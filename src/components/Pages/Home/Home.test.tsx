import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

jest.mock('react-i18next', (): any => ({
  useTranslation: (): any => ({
    t: (key: string): string => key
  })
}));

describe('<Home />', () => {
  const wrapper = shallow(<Home />);

  it('Should render the correct number of elements', () => {
    expect(wrapper.find('.home')).toHaveLength(1);
  });
});
