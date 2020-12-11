import card from './card';

describe('test profile reducer', () => {
  it('test SET_CARD_SUCCESS', () => {
    let result = card({}, {type: 'SET_CARD_SUCCESS'});
    expect(result.isLoggedIn).toBe(true);
  });
  it('test GET_CARD_SUCCESS', () => {
    let result = card({}, {type: 'GET_CARD_SUCCESS'});
    expect(result.isLoggedIn).toBe(true);
    expect(result.cardName !== '').toBe(true);
    expect(result.cardNumber !== '').toBe(true);
    expect(result.expiryDate !== '').toBe(true);
    expect(result.cvc !== '').toBe(true);
  });
})