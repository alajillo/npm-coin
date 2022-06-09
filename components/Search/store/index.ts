import { createStore } from 'redux';

type actionType = {
    type: string;
    keyword: string;
};

function searchReducer(state: any, action: actionType) {
    switch (action.type) {
        case 'SET_KETWORD':
            return { keyword: action.keyword };
        default:
            return state;
    }
}

export const store = createStore(searchReducer, { keyword: '' });

export const setKeyword = (keyword: string) => {
    store.dispatch({
        type: 'SET_KEYWORD',
        keyword,
    });
};
