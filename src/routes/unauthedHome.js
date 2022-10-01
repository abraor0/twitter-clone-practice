import { Logo, Google, Apple } from '../components/Icons/icons';
import LoginButton from '../components/Login/LoginButton';
import LoginFooter from '../components/Login/LoginFooter';
import LoginCard from '../components/Login/LoginCard';
import Anchor from '../components/UI/Anchor';
import { Outlet } from 'react-router-dom';

const UnauthedHome = () => {
  return (
    <div className="lg:h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row grow">
        <div className="relative order-1 lg:-order-1 lg:w-[55%]">
          <i className="text-white absolute text-[350px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Logo />
          </i>
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
            className="h-[450px] w-full lg:h-full object-cover"
          />
        </div>
        <div className="self-center lg:self-stretch items-center text-center lg:text-left lg:items-stretch flex flex-col gap-12 py-10 lg:py-32 px-6 sm:px-8 shrink-0">
          <i className="text-5xl text-sky-500">
            <Logo />
          </i>
          <p className="text-4xl sm:text-6xl font-bold">Happening now</p>
          <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-left font-bold mb-6">
              Join Twitter today.
            </h1>
            <div className="mx-auto lg:mx-0 flex flex-col gap-3 w-[85%] xsm:w-[65%] sm:w-[55%]">
              <LoginButton to="" terciary>
                <i className="text-base">
                  <Google />
                </i>
                Sign up with Google
              </LoginButton>
              <LoginButton to="" terciary>
                <i className="text-base">
                  <Apple />
                </i>
                Sign up with Apple
              </LoginButton>
              <div className="flex items-center gap-2">
                <hr className="grow"></hr>
                or
                <hr className="grow"></hr>
              </div>
              <LoginButton to="">Sign up with phone or email</LoginButton>
              <p className="text-xs">
                By signing up, you agree to the{' '}
                <Anchor>Terms of Service</Anchor> and{' '}
                <Anchor>Privacy Policy</Anchor>, including{' '}
                <Anchor>Cookie Use.</Anchor>
              </p>
            </div>
          </div>
          <div className="flex xsm:self-auto flex-col w-[85%] xsm:w-[65%] sm:w-[55%]">
            <h2 className="font-bold mb-4">Already have an account?</h2>
            <LoginButton to="/login" secondary>
              Sign in
            </LoginButton>
          </div>
        </div>
      </div>
      <Outlet />
      <LoginFooter />
    </div>
  );
};

export default UnauthedHome;
