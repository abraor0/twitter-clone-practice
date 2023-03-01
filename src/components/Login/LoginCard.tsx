import ModalOverlay from '../UI/ModalOverlay';
import { Google, Apple } from '../Icons/icons';
import Anchor from '../UI/Anchor';
import Input, { InputHandle } from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useRef, useState } from 'react';
import { findUser } from '../../apis/firestore';
import { useNotificationContext } from '../../store/notification-context';
import { useEffect } from 'react';
import { useAuthContext } from '../../store/auth-context';
import useHttp from '../../hooks/use-http';
import Spinner from '../UI/Spinner';

const LoginCard = () => {
  const navigate = useNavigate();
  const { setMessage } = useNotificationContext(); 
  const { login } = useAuthContext();
  const [page, setPage] = useState(0);
  const usernameRef = useRef<InputHandle>(null);
  const passwordRef = useRef<InputHandle>(null);
  const { data: userData, status: userStatus, error: userError, sendRequest: userRequest } = useHttp(findUser);
  const { data: loginData, status: loginStatus, error: loginError, sendRequest: loginRequest } = useHttp(login);

  const nextHandler = () => {
    if(usernameRef.current) {
      const email = usernameRef.current.getState();
      userRequest(email);
    }
  };

  useEffect(() => {
    if(userData && userStatus === 'success') {
      if (page === 0) setPage(1);
    } else if(!userData && userStatus === 'error') {
      setMessage(userError as string);
    } 
  }, [userData, userStatus, userError]);

  useEffect(() => {
    if (page === 1) {
      passwordRef.current?.focus()
    }
  }, [page]);

  useEffect(() => {
    if(loginData && loginStatus === 'success') {
      navigate('/', {replace: true});
    } else if(!loginData && loginStatus === 'error') {
      setMessage(loginError as string);
    }
  }, [loginData, loginStatus, loginError]);

  const loginHandler = () => {
    if (usernameRef.current && passwordRef.current) {
      const email = usernameRef.current.getState();
      const password = passwordRef.current.getState();
      loginRequest(email, password);
    }
  };

  const status = userStatus === 'pending' || loginStatus === 'pending' ? 'pending' : '';
  
  return (
    <ModalOverlay onClick={() => navigate(-1)}>
      <div className={`flex flex-col gap-5 mx-auto px-5 ${page === 0 ? 'w-72 sm:w-80' : 'w-72 sm:w-[420px]'}`} style={{ opacity: status === 'pending' ? '0' : '1'}}>
        <header className="mt-7 mb-2 text-2xl sm:text-3xl font-bold">
          {page === 0 && <h2>Sign in to Twitter</h2>}
          {page === 1 && <h2>Enter your password</h2>}
        </header>
        {page === 0 && (
          <>
            <LoginButton to="" terciary>
              <i className="text-base">
                <Google />
              </i>
              Sign in with Google
            </LoginButton>
            <LoginButton to="" terciary>
              <i className="text-base">
                <Apple />
              </i>
              Sign in with Apple
            </LoginButton>
            <div className="flex -my-[10px] items-center gap-2">
              <hr className="grow"></hr>
              or
              <hr className="grow"></hr>
            </div>
          </>
        )}
        <Input activateAction={nextHandler} defaultValue="test@test.com" disabled={page === 1} ref={usernameRef} label="Email or username" id="username" type="email"/>
        {page === 1 && <>
          <Input activateAction={loginHandler} defaultValue="test123" ref={passwordRef} label="Password" id="password" type="password" />
          <Anchor className="text-xs -mt-3 self-start">Forgot password?</Anchor>
        </>}
        {page === 0 && <>
          <LoginButton black onClick={nextHandler}>Next</LoginButton>
          <LoginButton to="" terciary>
            Forgot password?
          </LoginButton>
        </>}
        {page === 1 && <LoginButton black onClick={loginHandler} className="mt-52 override:py-4 override:text-base">Log in</LoginButton>}
        <p className={`text-sm ${page === 0 ? 'mt-6 mb-24' : 'mb-3'}`}>
          Don't have an account? <Anchor>Sign up</Anchor>
        </p>
      </div>
      {status === 'pending' && <div className="absolute inset-0 flex items-center justify-center">
        <Spinner />
      </div>}
    </ModalOverlay>
  );
};

export default LoginCard;
