import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import simple from 'simple-mock';

import Reservation from 'fixtures/Reservation';
import Resource from 'fixtures/Resource';
import { getResourcePageUrl } from 'utils/resourceUtils';
import ReservationControls from './ReservationControls';
import {
  UnconnectedReservationControlsContainer as ReservationControlsContainer,
} from './ReservationControlsContainer';

describe('shared/reservation-controls/ReservationControlsContainer', () => {
  const resource = Resource.build();
  const reservation = Reservation.build({ resource: resource.id });
  const props = {
    actions: {
      confirmPreliminaryReservation: simple.stub(),
      denyPreliminaryReservation: simple.stub(),
      openReservationCancelModal: simple.stub(),
      openReservationInfoModal: simple.stub(),
      updatePath: simple.stub(),
      selectReservationToCancel: simple.stub(),
      selectReservationToEdit: simple.stub(),
      selectReservationToShow: simple.stub(),
    },
    isAdmin: false,
    isStaff: false,
    reservation,
    resource,
  };

  let container;
  let instance;

  before(() => {
    container = shallow(<ReservationControlsContainer {...props} />);
    instance = container.instance();
  });

  describe('rendering', () => {
    it('renders ReservationControls component', () => {
      expect(container.find(ReservationControls)).to.have.length(1);
    });

    it('passes correct props to ReservationControls component', () => {
      const actualProps = container.find(ReservationControls).props();

      expect(actualProps.isAdmin).to.equal(props.isAdmin);
      expect(actualProps.isStaff).to.equal(props.isStaff);
      expect(actualProps.onCancelClick).to.equal(instance.handleCancelClick);
      expect(actualProps.onConfirmClick).to.equal(instance.handleConfirmClick);
      expect(actualProps.onDenyClick).to.equal(instance.handleDenyClick);
      expect(actualProps.onEditClick).to.equal(instance.handleEditClick);
      expect(actualProps.onInfoClick).to.equal(instance.handleInfoClick);
      expect(actualProps.reservation).to.equal(props.reservation);
    });
  });

  describe('handleCancelClick', () => {
    before(() => {
      instance.handleCancelClick();
    });

    it('calls props.actions.selectReservationToCancel with this reservation', () => {
      expect(props.actions.selectReservationToCancel.callCount).to.equal(1);
      expect(
        props.actions.selectReservationToCancel.lastCall.args[0]
      ).to.deep.equal(
        props.reservation
      );
    });

    it('calls the props.actions.openReservationCancelModal function', () => {
      expect(props.actions.openReservationCancelModal.callCount).to.equal(1);
    });
  });

  describe('handleEditClick', () => {
    before(() => {
      instance.handleEditClick();
    });

    it('calls props.actions.selectReservationToEdit with reservation and minPeriod', () => {
      expect(props.actions.selectReservationToEdit.callCount).to.equal(1);
      expect(
        props.actions.selectReservationToEdit.lastCall.args[0]
      ).to.deep.equal(
        { reservation: props.reservation, minPeriod: props.resource.minPeriod }
      );
    });

    it('calls the props.actions.updatePath with correct url', () => {
      const actualUrlArg = props.actions.updatePath.lastCall.args[0];
      const expectedUrl = getResourcePageUrl(
        props.resource,
        props.reservation.begin,
        props.reservation.begin
      );

      expect(props.actions.updatePath.callCount).to.equal(1);
      expect(actualUrlArg).to.equal(expectedUrl);
    });
  });

  describe('handleInfoClick', () => {
    before(() => {
      instance.handleInfoClick();
    });

    it('calls props.actions.selectReservationToShow with this reservation', () => {
      expect(props.actions.selectReservationToShow.callCount).to.equal(1);
      expect(
        props.actions.selectReservationToShow.lastCall.args[0]
      ).to.deep.equal(
        props.reservation
      );
    });

    it('calls the props.actions.openReservationInfoModal function', () => {
      expect(props.actions.openReservationInfoModal.callCount).to.equal(1);
    });
  });
});