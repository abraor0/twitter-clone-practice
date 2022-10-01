import { Dots } from '../Icons/icons';
import ButtonTooltip from '../UI/ButtonTooltip';

const ProfileHeader = () => {
  return (
    <div>
      <div>
        <img />
        <div>
          <img />
        </div>
        <button
          className="ml-auto transition-colors flex text-gray-500 items-center gap-x-[6px] pr-2 group"
          type="button"
        >
          <i className="text-xl p-2 group-hover:bg-gray-200 outline-1 outline outline-gray-300 rounded-full relative">
            <Dots />
            <ButtonTooltip text={'More'} />
          </i>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
