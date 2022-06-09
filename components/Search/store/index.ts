import { createStore, Reducer } from 'redux';
type actionType = {
    type: string;
    keyword: string;
};
type stateType = {
    keyword: string;
};

const searchReducer: Reducer<stateType, actionType> = (
    state: stateType = { keyword: '' },
    action: actionType
) => {
    switch (action.type) {
        case 'SET_KETWORD':
            return { keyword: action.keyword };
        default:
            return state;
    }
};

export const store = createStore(searchReducer);

export const setKeyword = (keyword: string) => {
    store.dispatch({
        type: 'SET_KEYWORD',
        keyword,
    });
};
