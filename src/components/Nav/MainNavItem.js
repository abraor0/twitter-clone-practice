import { NavLink } from 'react-router-dom';
import ButtonTooltip from '../UI/ButtonTooltip';

const MainNavItem = ({ text, Icon, path }) => (
  <li className="my-1 text-lg">
    <NavLink 
      className="block group" 
      to={path || '#'}
      children={({ isActive }) => {
        return (
        <div className="flex gap-x-4 group-hover:bg-gray-200 rounded-full transition p-3 w-max xl:pr-6">
          <i className="relative">
            <Icon active={isActive}/>
            <i className="xl:hidden">
              <ButtonTooltip text={text} />
            </i>
          </i>
          <span className={`hidden xl:block ${isActive ? 'xl:font-bold' : ''}`}>{text}</span>
      </div>);
      }}
    />
  </li>
);

export default MainNavItem;
