import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './types';

export const fetchingData = () => ({ type: FETCHING_DATA });

export const fetchingDataSuccess = (json) => ({
    type: FETCHING_DATA_SUCCESS,
    payload: json
});

export const fectchingDataFailure = (error) => ({
    type: FETCHING_DATA_FAILURE,
    payload: error
});


export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchingData());
        try {
            let response = await fetch('https://api.exchangeratesapi.io/latest')
            let json = await response.json();
            dispatch(fetchingDataSuccess(json));
        }
        catch (error) {
            dispatch(fectchingDataFailure(error));
        }
    }
}