import selector from '../ResourceCompactListSelector';

function getState({ resources = {} }) {
  return { data: { resources } };
}

function createResource(id, unitId) {
  return {
    id,
    unit: unitId,
  };
}

describe('shared/resource-compact-list/ResourceCompactListSelector', () => {
  test('all resourceIds are returned if not unitId is passed', () => {
    const state = getState({});
    const props = { resourceIds: ['123', '321'] };
    const data = selector(state, props);
    expect(data.resourceIds).toEqual(props.resourceIds);
  });

  test('filtered resourceIds by unit are returned if unitId is passed', () => {
    const state = getState({
      resources: {
        123: createResource('123', 'unitId'),
        321: createResource('321', 'unitId2'),
      },
    });
    const props = { resourceIds: ['123', '321'], unitId: 'unitId2' };
    const data = selector(state, props);
    expect(data.resourceIds).toEqual(['321']);
  });
});
