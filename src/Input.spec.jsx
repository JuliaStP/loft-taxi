import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Input from "./Input";


describe('Input Component Testing', () => {
    it("renders correctly", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Input label="Password" type="password" name="password" changeHandler={()=>{}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('input text', () => {
        const mockCallback = jest.fn();
        const wrapper = mount(<Input label="Email" type="email" name="email" changeHandler={mockCallback}/>),
        input = wrapper.find('input');
        input.value = 'test';
        input.simulate('changeHandler');
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

