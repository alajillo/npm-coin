import { useCallback, useState } from 'react';
function useMoveSelect() {
    const [selectedIndex, setSelectIndex] = useState<number>(-1);
    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            const { code } = event;
            if (code === 'ArrowDown') {
                setSelectIndex((v) => v + 1);
            }
            if (code === 'ArrowUp') {
                setSelectIndex((v) => {
                    if (v !== -1) {
                        return v - 1;
                    }
                    return -1;
                });
            }
        },
        [setSelectIndex]
    );
    return { selectedIndex, onKeyDown, setSelectIndex };
}

export default useMoveSelect;
