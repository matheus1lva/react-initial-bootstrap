import React from 'react';
import Main from '../Main.tsx';
import { render } from '@testing-library/react';

describe('<Main />', () => {
	it('should render the component', () => {
		const { getByText } = render(<Main />);
		expect(getByText('Hi my world')).toBeTruthy();
	});
})