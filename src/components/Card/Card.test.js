import react from 'react';
import Card from './index';
import { shallow } from 'enzyme';

describe('<Card />', () => {
  it('Prueba card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toBe(1);
  });
});
