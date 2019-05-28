import { getDefaultRouterProps, getState } from '../../../utils/testUtils';
import searchResultsSelector from './searchResultsSelector';

describe('pages/search/results/searchResultsSelector', () => {
  function getSelected(extraState) {
    const state = getState(extraState);
    const props = getDefaultRouterProps();
    return searchResultsSelector(state, props);
  }

  test('returns filters', () => {
    expect(getSelected().filters).toBeDefined();
  });
});
