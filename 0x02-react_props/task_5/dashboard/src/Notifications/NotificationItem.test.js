import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";


describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem type="default" />);
    });

    it('renders correct data & value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').prop('data')).toBe('default');
        expect(wrapper.find('li').text()).toBe('test');
    });

    it('renders correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toBe('<li data=\"default\"><u>test</u></li>');
    })
});