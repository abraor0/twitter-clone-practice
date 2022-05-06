const MainNavItem = ({ text, Icon}) => (
  <li className="my-1 text-lg">
    <a className="block group" href="#">
      <div className="flex gap-x-4 group-hover:bg-gray-200 rounded-full transition p-3 w-max pr-6">
        <Icon/>{text}
      </div>
    </a>
  </li>
);

export default MainNavItem;