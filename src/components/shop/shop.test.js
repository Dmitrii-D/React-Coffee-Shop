import React from 'react';
import Shop from './shop';
import {shallow, mount} from 'enzyme';
import CoffeeService from '../../services/coffeeService';

describe('Testing <CoffeePage/>', () => {
  describe('Testing snap & state', () => {
    it('Shop have rendered correctly', () => {
      const item = shallow(<Shop />);
      expect(item).toMatchSnapshot();
    });
    
    it('Shop state "term" is empty', () => {
      const term = shallow(<Shop/>);
      expect(term).toBeEmpty();
    });   
    it('Shop state "filter" is empty', () => {
      const filter = shallow(<Shop/>);
      expect(filter).toBeEmpty();
    });
    it('Shop state "loading" is true', () => {
      const loading = shallow(<Shop/>);
      expect(loading).toBeTruthy();
    });
  });
  describe('Testing handles', () => {
    // const service = new getService();
    // const div = mount(<ItemList
    //                             getData={service.getAllData}
    //                             renderCoffee={({name}) => name}  />)
    // it('Cllick on item list must render all div 1 instamce', () => {
    //   div.setState({itemList: [{name: 'wqw', id: 1}, {name: 'wqw', id: 2}]});
    //   div.find('.shop__item:first-child').simulate('click');
    //   expect(div).toHaveLength(1);
    // });
  });
});