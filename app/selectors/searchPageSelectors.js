import { createSelector } from 'reselect';

import ActionTypes from 'constants/ActionTypes';
import searchFiltersSelector from 'selectors/searchFiltersSelector';
import searchResultsSelector from 'selectors/searchResultsSelector';
import requestIsActiveSelectorFactory from 'selectors/factories/requestIsActiveSelectorFactory';

const unitsSelector = (state) => state.data.units;

export const searchPageSelectors = createSelector(
  requestIsActiveSelectorFactory(ActionTypes.API.RESOURCES_GET_REQUEST),
  searchFiltersSelector,
  searchResultsSelector,
  unitsSelector,
  (
    isFetchingSearchResults,
    searchFilters,
    searchResults,
    units
  ) => {
    return {
      filters: searchFilters,
      isFetchingSearchResults,
      results: searchResults,
      units,
    };
  }
);
