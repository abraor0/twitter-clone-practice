import { useReducer } from 'react';

const requestReducer = (state, action) => {
  switch(action.type) {
    case 'SEND':
      return {
        data: null,
        status: 'pending',
        err: null
      }
    case 'SUCCESS':
      return {
        data: action.payload,
        status: 'success',
        err: null
      }
    case 'ERROR':
      return {
        data: null,
        status: 'error',
        err: action.payload
      }
    default:
      return state;
  }
};

const useFirestore = (requestFunction) => {
  const [ requestState, dispatch ] = useReducer(requestReducer, {
    data: null,
    status: null,
    error: null
  });

  const sendRequest = async () => {
    dispatch({type: 'SEND'});

    try {
      const resp = await requestFunction();

      dispatch({
        type: 'SUCCESS',
        payload: resp
      })
    } catch(err) {
      dispatch( {
        type: 'ERROR',
        payload: err.message
      })
    }
  };

  return {
    ...requestState,
    sendRequest
  }
};

export default useFirestore;
