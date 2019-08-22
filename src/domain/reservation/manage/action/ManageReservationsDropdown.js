import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

import injectT from '../../../../../app/i18n/injectT';

const ManageReservationsDropdown = ({
  t, onInfoClick, reservation,
  onEditClick,
  onEditReservation
}) => {
  return (
    <div className="app-ManageReservationDropdown">
      <DropdownButton
        id="app-ManageReservationDropdown"
        title={t('ManageReservationsList.actionsHeader')}
      >
        <MenuItem onClick={onInfoClick}>
          {t('ManageReservationsList.actionLabel.information')}
        </MenuItem>

        {/* Only show/allow to change reservation state when its status is requested */}
        {reservation.state === 'requested' && (
        <>
          <MenuItem
            onClick={() => onEditReservation(reservation, 'confirmed')}
          >
            {t('ManageReservationsList.actionLabel.approve')}
          </MenuItem>
          <MenuItem
            onClick={() => onEditReservation(reservation, 'denied')}
          >
            {t('ManageReservationsList.actionLabel.deny')}
          </MenuItem>
        </>
        )}

        {reservation.state !== 'cancelled'
          && (
          <MenuItem
            onClick={() => onEditReservation(reservation, 'cancelled')}
          >
            {t('ManageReservationsList.actionLabel.cancel')}
          </MenuItem>
          )
        }

        <MenuItem
          onClick={onEditClick}
        >
          {t('ManageReservationsList.actionLabel.edit')}

        </MenuItem>
      </DropdownButton>
    </div>
  );
};

ManageReservationsDropdown.propTypes = {
  t: PropTypes.func,
  onInfoClick: PropTypes.func,
  reservation: PropTypes.object,
  onEditClick: PropTypes.func,
  onEditReservation: PropTypes.func
};

export default injectT(ManageReservationsDropdown);
