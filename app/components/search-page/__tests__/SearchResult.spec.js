import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import Immutable from 'seamless-immutable';
import { Link } from 'react-router';

import SearchResult from 'components/search-page/SearchResult';
import Resource from 'fixtures/Resource';

const props = {
  result: Immutable(Resource.build()),
};

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<SearchResult {...props} />);
  const output = renderer.getRenderOutput();

  return output;
}

describe('Component: SearchResult', () => {
  describe('rendering', () => {
    let output;

    before(() => {
      output = setup();
    });

    it('should render a table row', () => {
      expect(output.type).to.equal('tr');
    });

    it('should render 2 table cells', () => {
      const tds = output.props.children;

      expect(tds).to.have.length(2);
      tds.forEach((td) => {
        expect(td.type).to.equal('td');
      });
    });

    describe('the first table cell', () => {
      it('should contain a link to resources page', () => {
        const td = output.props.children[0];
        const link = td.props.children;

        expect(TestUtils.isElementOfType(link, Link)).to.be.true;
        expect(link.props.to).to.contain('resources');
      });

      it('should display the name of the result', () => {
        const td = output.props.children[0];
        const link = td.props.children;
        const expected = props.result.name.fi;

        expect(link.props.children).to.equal(expected);
      });
    });

    describe('the second table cell', () => {
      it('should contain unit of the result', () => {
        const td = output.props.children[1];
        const expected = props.result.unit;

        expect(td.props.children).to.equal(expected);
      });
    });
  });
});
