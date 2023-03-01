import mainNavOptions from '../../utils/nav';
import MainNavItem from './MainNavItem';

const MainNav = () => {
  return (
    <nav>
      <ul>
        {mainNavOptions.map((navOption, index) =>  <MainNavItem key={index} {...navOption} />)}
      </ul>
    </nav>
  );
};

export default MainNav;