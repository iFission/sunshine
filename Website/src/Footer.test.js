import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import {Footer} from './components/Footer'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Footer component", () => {

    test('footer test', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapShot;
    });
});
