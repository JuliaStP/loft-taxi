import route from './route';

describe('test route reducer', () => {
  it('test GET_ROUTE_SUCCESS', () => {
    let result = route({}, {type: 'GET_ROUTE_SUCCESS'});
    expect(result.route).toBe(true);
  });
  it('test LOG_OUT', () => {
    let result = route({}, {type: 'LOG_OUT'});
    expect(result.isLoggedIn).toBe(false);
  });
})