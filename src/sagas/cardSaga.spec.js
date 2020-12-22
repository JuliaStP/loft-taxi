import { setCardSaga, getCardSaga } from './cardSaga';
import { saveSaga } from './saveSaga';
import { setCard, getCard } from '../actions';
import { serverSetCard, serverGetCard } from '../api';

jest.mock('../api', () => ({ 
    serverSetCard: jest.fn(() => true),
    serverGetCard: jest.fn(() => true)
}));

describe('cardSaga', () => {
    describe('#SET_CARD', () => {
      it('set card data', async () => {
        serverSetCard
        .mockImplementation(async () => true);
        const dispatched = await saveSaga(
            setCardSaga,
            setCard('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        )
        expect(dispatched).toEqual([{ type: 'SET_CARD_SUCCESS' }])
      });
    });

    describe('#GET_CARD', () => {
        it('get card data', async () => {
          serverGetCard
          .mockImplementation(async () => true);
          const dispatched = await saveSaga(
              getCardSaga,
              getCard('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
          )
          expect(dispatched).toEqual([{ 
            type: 'GET_CARD_SUCCESS',
            payload: {
                'cardNumber': undefined, 
                'expiryDate': undefined, 
                'cardName': undefined, 
                'cvc': undefined
            }
           }])
        });
      });
});  