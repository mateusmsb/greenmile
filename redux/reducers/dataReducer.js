import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '..actions/types';

const initialState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return { ...state, isFetching: true };
        case FETCHING_DATA_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_DATA_SUCCESS:
            return { ...state, isFetching: false, data: action.payload };
        default:
            return state;
    }
}


export default dataReducer;