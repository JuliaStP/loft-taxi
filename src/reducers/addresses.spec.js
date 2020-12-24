import addresses from './addresses';

describe('test addresses reducer', () => {
  it('test GET_ADDRESS_SUCCESS', () => {
    let result = addresses({}, {type: 'GET_ADDRESS_SUCCESS'});
    expect(result.addresses).toBe(true);
  });
  it('test LOG_OUT', () => {
    let result = addresses({}, {type: 'LOG_OUT'});
    expect(result.isLoggedIn).toBe(false);
  });
})