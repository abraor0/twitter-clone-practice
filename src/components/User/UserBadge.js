import Dots from '../Icons/Dots';
import UserAvatar from './UserAvatar';

const UserBadge = ({ profile_image, name, m_name }) => {
  return (
    <button className="flex gap-x-3 p-3 mb-3 hover:bg-gray-200 rounded-full items-center text-left">
      <UserAvatar src={profile_image} />
      <div className="text-sm">
        <p className="font-bold">{name}</p>
        <p>{`@${m_name}`}</p>
      </div>
      <div className="ml-8">
        <Dots />
      </div>
    </button>
  );
};

export default UserBadge;