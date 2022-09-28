import ModalOverlay from '../UI/ModalOverlay';
import Google from '../Icons/Google';
import Apple from '../Icons/Apple';
import LoginButton from './LoginButton';
import Anchor from '../UI/Anchor';
import Input from '../Input/Input';

const LoginCard = () => {
  return (
    <ModalOverlay>
      <div className="flex flex-col gap-5 w-80 mx-auto">
        <header className="mt-7 mb-2 text-3xl font-bold">
          <h2>Sign in to Twitter</h2>
        </header>
        <LoginButton terciary>
          <i className="text-base">
            <Google />
          </i>
          Sign in with Google
        </LoginButton>
        <LoginButton terciary>
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
        <Input />
        <LoginButton black>
          Next
        </LoginButton>
        <LoginButton terciary>
          Forgot password?
        </LoginButton>
        <p className="text-sm mt-6 mb-24">Don't have an account? <Anchor>Sign up</Anchor></p>
      </div>
    </ModalOverlay>
  );
};

export default LoginCard;