import React from 'react';
import renderer from 'react-test-renderer';
// import {render, cleanup} from '@testing-library/react-native';
import ListItem from './ListItem';

// afterEach(cleanup);

// describe('<ListItem />', () => {
//   it('should match snapshot', () => {
//     const rendered = render(<ListItem />).toJSON();
//     expect(rendered).toMatchSnapshot();
//   });
// });

it('renders correctly', () => {
  const tree = renderer.create(<ListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
