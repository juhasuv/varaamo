import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import Immutable from 'seamless-immutable';
import { Table } from 'react-bootstrap';

import SearchResult from 'components/search-page/SearchResult';
import SearchResults from 'components/search-page/SearchResults';
import Resource from 'fixtures/Resource';

describe('Component: SearchResults', () => {
  let element;
  const props = {
    results: Immutable([
      Resource.build(),
      Resource.build(),
    ]),
  };

  before(() => {
    element = TestUtils.renderIntoDocument(<SearchResults {...props} />);
  });

  describe('basic rendering', () => {
    it('should render without problems', () => {
      expect(element).to.be.ok;
    });

    it('should render a Table component', () => {
      const tableComponent = TestUtils.findRenderedComponentWithType(element, Table);
      expect(tableComponent).to.exist;
    });
  });

  describe('rendering table header', () => {
    let ths;

    before(() => {
      ths = TestUtils.scryRenderedDOMComponentsWithTag(element, 'th');
    });

    it('should render 2 th elements', () => {
      expect(ths).to.have.length(2);
    });

    it('first th element should contain text "Nimi"', () => {
      expect(ths[0].textContent).to.equal('Nimi');
    });

    it('second th element should contain text "Yksikkö"', () => {
      expect(ths[1].textContent).to.equal('Yksikkö');
    });
  });

  describe('rendering individual results', () => {
    let resultComponents;

    before(() => {
      resultComponents = TestUtils.scryRenderedComponentsWithType(element, SearchResult);
    });

    it('should render a SearchResult for every result in props', () => {
      expect(resultComponents).to.have.length(props.results.length);
    });
  });
});
