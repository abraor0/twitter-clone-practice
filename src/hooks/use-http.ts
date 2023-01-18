import { useReducer } from 'react';

interface requestStateType<T> {
  data: T | null;
  status: string | null;
  error: string | null;
}

type actionType<T> = { type: 'SEND' ;} | 
{
  type: 'ERROR';
  payload: string;
} | {
  type: 'SUCCESS';
  payload: T;
} | {
  type: 'INITIALIZE';
};

const requestReducer = <T>(state: requestStateType<T>, action: actionType<T>) => {
  switch(action.type) {
    case 'SEND':
      return {
        ...state,
        status: 'pending'
      }
    case 'SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload
      }
    case 'INITIALIZE':
      return {
        ...state
      }
    default:
      throw new Error('Invalid action');
  }
};

const useHttp = <T extends (...args: any[]) => any>(requestFunction: T, params: Parameters<T>) => {
  const [ requestState, dispatch ] = useReducer<React.Reducer<requestStateType<ReturnType<T>>, actionType<ReturnType<T>>>>(requestReducer,{
    data: null,
    status: null,
    error: null
  });

  const sendRequest = async() => {
    dispatch({type: 'SEND'});

    try {
      const resp = await requestFunction(params);
      
      dispatch({
        type: 'SUCCESS',
        payload: resp
      })
    } catch(error) {
      if ( error instanceof Error) {
        dispatch( {
          type: 'ERROR',
          payload: error.message || 'Something went wrong!'
        })
      }
    }
  };

  return {
    ...requestState,
    sendRequest
  }
};

export default useHttp;