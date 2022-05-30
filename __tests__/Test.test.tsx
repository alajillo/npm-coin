import Test from '../components/Test';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

it('test component muse have test id ', () => {
    render(<Test />);
    const headingElement = screen.getByTestId('test');
    expect(headingElement.textContent).toBe('it will be test component');
});
