import useMoveSelect from '@Search/useMoveSelect';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
test('useMoveSelect keyDown event testing', () => {
    const { result } = renderHook(() => useMoveSelect(5));
    render(
        <div data-testid="container" onKeyDown={result.current.onKeyDown} />
    );
    const container = screen.getByTestId('container');

    expect(result.current.selectedIndex).toBe(-1);

    fireEvent.keyDown(container, { code: 'ArrowDown' });
    expect(result.current.selectedIndex).toBe(0);

    fireEvent.keyDown(container, { code: 'ArrowUp' });
    expect(result.current.selectedIndex).toBe(-1);

    fireEvent.keyDown(container, { code: 'ArrowUp' });
    expect(result.current.selectedIndex).toBe(-1);

    for (let i = 0; i < 7; i++) {
        fireEvent.keyDown(container, { code: 'ArrowDown' });
    }
    expect(result.current.selectedIndex).toBe(5);
});
