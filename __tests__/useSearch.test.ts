import { renderHook, act } from '@testing-library/react-hooks';
import useSearch from '@Search/useSearch';

it('useSearch testing', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch());
    expect(result.current.list.length).toBe(0);
    expect(result.current.isLoading).toBe(false);
    act(() => {
        result.current.search('test');
    });
    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();
    expect(result.current.list.map((item: any) => item.name)).toEqual([
        'react',
        'react-dom',
        'react-test',
    ]);

    expect(result.current.isLoading).toBe(false);
    act(() => {
        result.current.search('');
    });
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.list.length).toBe(0);

    expect(result.current.isLoading).toBe(false);
});
