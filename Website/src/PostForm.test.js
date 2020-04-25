import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import PostForm from './components/PostForm'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('should', () => {
    expect(true).toBeTruthy();
})

describe('Postform Component', () => {

    it('first name check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('input[type="text"]').at(0).
            simulate('change',
                {
                    target: { name: 'fname', value: 'Alice' }
                });
        expect(wrapper.state('fname')).toEqual('Alice');
    })

    it('last name check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('input[type="text"]').at(1).
            simulate('change',
                {
                    target: { name: 'lname', value: 'Kham' }
                });
        expect(wrapper.state('lname')).toEqual('Kham');
    })

    it('email check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('input[type="email"]').
            simulate('change',
                {
                    target: { name: 'email', value: 'alicekham@gmail.com' }
                });
        expect(wrapper.state('email')).toEqual('alicekham@gmail.com');
    })

    it('info check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('textarea[id="info"]').
            simulate('change',
                {
                    target: { name: 'info', value: 'abc' }
                });
        expect(wrapper.state('info')).toEqual('abc');
    })

    it('checkbox check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('input[type="checkbox"]').
        simulate('change',{ target: {checked: false} });
    })

    it('submit button check', () => {
        const wrapper = shallow(<PostForm />);
        wrapper.find('button[type="submit"]')
        .simulate('submit', {target: {submit: false}});
        expect(wrapper.state('button')).toBeFalsy();
    });

    // test('postform test', () => {
    //     const wrapper = shallow(<PostForm />);
    //     expect(wrapper).toMatchSnapShot;
    //   });
})