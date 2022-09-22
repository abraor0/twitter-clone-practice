import TweetToolbarTooltip from '../Tweet/TweetToolbarTooltip';

const MainNavItem = ({ text, Icon}) => (
  <li className="my-1 text-lg">
    <a className="block group" href="#">
      <div className="flex gap-x-4 group-hover:bg-gray-200 rounded-full transition p-3 w-max xl:pr-6">
        <i className="relative">
          <Icon/>
          <i className="xl:hidden">
            <TweetToolbarTooltip text={text} />
          </i>
        </i>
        <span className="hidden xl:block">
          {text}
        </span>
      </div>
    </a>
  </li>
);

export default MainNavItem;