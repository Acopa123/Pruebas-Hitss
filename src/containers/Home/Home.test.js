import react from 'react';
import Home from './index';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('Prueba home', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.length).toBe(1);
  });
});
