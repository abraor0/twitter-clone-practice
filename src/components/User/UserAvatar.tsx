interface userAvatarProps {
  src: string;
}

const UserAvatar = ({ src }: userAvatarProps) => (
  <img src={src} alt="" className="rounded-full w-11 h-11 object-fill shrink-0"/>
);

export default UserAvatar;