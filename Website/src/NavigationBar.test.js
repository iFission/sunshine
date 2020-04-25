import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import {NavigationBar} from './components/NavigationBar'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Navigation Bar component", () => {

    test('Navigation Bar test', () => {
        const wrapper = shallow(<NavigationBar />);
        expect(wrapper).toMatchSnapShot;
    });
});
