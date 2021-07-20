import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import OrderTaxi from './OrderTaxi';
 
const mockStore = {
    getState: () => ({addresses: {addresses: []}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('OrderTaxi', () => {
    it('renders correctly', () => {
      const { getByLabelText  } = render(
        <BrowserRouter>
            <Provider store={mockStore}>
                <OrderTaxi />
            </Provider>
        </BrowserRouter>
      );
      expect(getByLabelText('From:')).toHaveAttribute('name', 'from');
      expect(getByLabelText('To:')).toHaveAttribute('name', 'to');
    })
})