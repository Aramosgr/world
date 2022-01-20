import React from 'react';
import { shallow } from 'enzyme';
import Error from '.';

jest.mock('react-i18next', (): any => ({
  useTranslation: (): any => ({
    t: (key: string): string => key
  })
}));

describe('<Error />', () => {
  const wrapper = shallow(<Error />);

  it('Should render the correct number of elements', () => {
    expect(wrapper.find('.error')).toHaveLength(1);
  });
});
