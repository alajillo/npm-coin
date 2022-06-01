import { useCallback, useState } from 'react';
function useMoveSelect(limit: number) {
    const [selectedIndex, setSelectIndex] = useState<number>(-1);
    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            const { code } = event;
            if (code === 'ArrowDown') {
                setSelectIndex((v) => (v !== limit ? v + 1 : limit));
            }
            if (code === 'ArrowUp') {
                setSelectIndex((v) => (v !== -1 ? v - 1 : -1));
            }
        },
        [setSelectIndex, limit]
    );
    return { selectedIndex, onKeyDown, setSelectIndex };
}

export default useMoveSelect;
