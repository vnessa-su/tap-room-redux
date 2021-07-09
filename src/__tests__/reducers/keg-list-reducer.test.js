import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  it('should return the default state', () => {
    expect(kegListReducer()).toEqual({})
  });
})