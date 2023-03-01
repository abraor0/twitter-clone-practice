import MainNav from '../Nav/MainNav';
import { Logo, Tweet } from '../Icons/icons';
import UserBadge from '../User/UserBadge';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-[76px] xsm:w-[92px] xl:w-[282px] shrink-0">
      <div className="w-[76px] xsm:w-[92px] xl:w-[282px] flex h-screen flex-col items-center xl:items-stretch justify-between px-1 fixed">
        <div>
          <Link to="/">
            <h1 className="mt-1 p-3 hover:bg-sky-100 text-sky-500 text-3xl rounded-full inline-block transition w-max">
              <Logo />
            </h1>
          </Link>
          <MainNav />
          <button className="mt-4 bg-sky-500 text-2xl font-bold text-white p-4 xl:px-24 xl:py-3 rounded-full hover:bg-sky-600 transition-colors">
            <i className="xl:hidden">
              <Tweet />
            </i>
            <span className="text-base hidden xl:block">Tweet</span>
          </button>
        </div>
        <UserBadge />
      </div>
    </header>
  );
};

export default Header;
