import { useReducer } from 'react';

const requestReducer = (state, action) => {
  switch(action.type) {
    case 'SEND':
      return {
        data: null,
        status: 'pending',
        error: null
      }
    case 'SUCCESS':
      return {
        data: action.payload,
        status: 'success',
        error: null
      }
    case 'ERROR':
      return {
        data: null,
        status: 'error',
        error: action.payload
      }
    default:
      return state;
  }
};

const useHttp = () => {
  const [ requestState, dispatch ] = useReducer(requestReducer, {
    data: null,
    status: null,
    error: null
  });

  const sendRequest = async (requestFunction, ...params) => {
    dispatch({type: 'SEND'});

    try {
      const resp = await requestFunction(...params);
      
      dispatch({
        type: 'SUCCESS',
        payload: resp
      })
    } catch(error) {
      dispatch( {
        type: 'ERROR',
        payload: error.message || 'Something went wrong!'
      })
    }
  };

  return {
    ...requestState,
    sendRequest
  }
};

export default useHttp;
