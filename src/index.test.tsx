import React from 'react';
import { render } from '@testing-library/react';
import Sample from '.';

// TODO: Delete/Update once index.tsx contains the actual code
describe('<Sample />', () => {
  test('it should mount', () => {
    const screen = render(<Sample />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
