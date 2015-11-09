import { createSelector } from 'reselect';

import ActionTypes from 'constants/ActionTypes';
import purposeCategoriesSelector from 'selectors/purposeCategoriesSelector';
import requestIsActiveSelectorFactory from 'selectors/factories/requestIsActiveSelectorFactory';

const purposeCategoryListSelector = createSelector(
  purposeCategoriesSelector,
  requestIsActiveSelectorFactory(ActionTypes.API.PURPOSES_GET_REQUEST),
  (
    purposeCategories,
    isFetchingPurposes
  ) => {
    return {
      isFetchingPurposes,
      purposeCategories,
    };
  }
);

export default purposeCategoryListSelector;