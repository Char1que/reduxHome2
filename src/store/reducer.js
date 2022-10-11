import {GET_POST, GET_POSTS_ERROR, GET_POSTS_LOADING} from "./actionType";

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_POST:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const getData = () => {
    return async (dispatch) => {
        dispatch ({
            type: GET_POSTS_LOADING
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            dispatch({
                type: GET_POST,
                payload: data
            })

        } catch (error) {
            dispatch ({
                type: GET_POSTS_ERROR,
                payload: error.toString()
            })
        }
    }

}
