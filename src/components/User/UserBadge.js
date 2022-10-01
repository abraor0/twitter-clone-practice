import { Dots } from '../Icons/icons';
import UserAvatar from './UserAvatar';

const UserBadge = ({ profile_image, name, m_name }) => {
  return (
    <button className="flex gap-x-3 p-3 mb-3 hover:bg-gray-200 rounded-full items-center text-left">
      <UserAvatar src={profile_image} />
      <div className="hidden xl:block text-sm">
        <p className="font-bold">{name}</p>
        <p>{`@${m_name}`}</p>
      </div>
      <div className="hidden xl:block ml-8">
        <Dots />
      </div>
    </button>
  );
};

export default UserBadge;
