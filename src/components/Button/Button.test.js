import react from 'react';
import Button from './index';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  it('Prueba button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
  });
});
