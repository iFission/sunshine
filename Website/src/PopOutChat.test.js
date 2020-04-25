import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import PopOutChat from './PopOutChat'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Pop Out Chat component", () => {

    test('Pop Out Chat test', () => {
        const wrapper = shallow(<PopOutChat />);
        expect(wrapper).toMatchSnapShot;
    });
});
