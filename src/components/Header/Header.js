import MainNav from '../Nav/MainNav';
import Logo from '../Icons/Logo';
import UserBadge from '../User/UserBadge';

const dummyUser = {
  profile_image: 'https://pbs.twimg.com/profile_images/1570224322609926149/t7roNRDx_normal.jpg',
  name: 'brao',
  m_name: 'braor0drigues'
};

const Header = () => {
  return (
    <header className="w-64">
      <div className="flex h-screen flex-col justify-between pr-2 w-64 fixed">
        <div>
          <a href="#">
            <h1 className="mt-1 mb-2 p-3 hover:bg-sky-100 rounded-full transition w-max">
              <Logo />
            </h1>
          </a>
          <MainNav />
          <button className="mt-4 bg-sky-500 font-bold text-white px-20 py-3 rounded-full hover:bg-sky-600 transition-colors">Tweet</button>
        </div>
        <UserBadge {...dummyUser} />
      </div>
    </header>
  );
};

export default Header;