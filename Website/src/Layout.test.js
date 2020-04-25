import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import {Layout} from './components/Layout'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Layout component", () => {

    test('layout test', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper).toMatchSnapShot;
    });
});
