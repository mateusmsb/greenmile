import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './types';
import api from '../../services/api'

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
            api.get('get_resources_since').then((response) => { dispatch(fetchingDataSuccess(response.data)) });
            ;
        }
        catch (error) {
            dispatch(fectchingDataFailure(error));
        }
    }
}

