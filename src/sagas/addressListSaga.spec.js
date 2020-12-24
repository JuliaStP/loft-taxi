  
import { addressListSaga } from './addressListSaga';
import { saveSaga } from './saveSaga';
import { getAddress } from '../actions';
import { serverGetAddress } from '../api';

jest.mock('../api', () => ({ 
  serverGetAddress: jest.fn(() => {})
}));

describe('addressListSaga', () => {
  describe('#GET_ADDRESS', () => {
    it('get address through api', async () => {
      serverGetAddress.mockImplementation(async () => true);
      const dispatched = await saveSaga(
          addressListSaga,
          getAddress()
      )
      expect(dispatched).toEqual({ 
        type: 'GET_ADDRESS_SUCCESS',
        payload: [] 
      })
    });
  });
}); 