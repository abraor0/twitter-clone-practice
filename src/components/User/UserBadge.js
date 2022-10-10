import { useState } from 'react';
import { Dots } from '../Icons/icons';
import UserAvatar from './UserAvatar';
import {useAuthContext} from '../../store/auth-context';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

const UserBadge = () => {
  const [showLogOptions, setShowLogOptions] = useState(false);
  const { logout, user: {info} } = useAuthContext();
  const badgeRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    if (menuRef.current) {
      const {top, height, left} = badgeRef.current.getBoundingClientRect();
     
      menuRef.current.style.top = `${top - height + 20}px`;
      menuRef.current.style.left = `${left}px`;
    }
  });

  return (
    <div ref={badgeRef} className="relative">
    {showLogOptions && 
      createPortal(
      <>
        <div className="fixed inset-0" onClick={() => setShowLogOptions(false)}></div>
        <div ref={menuRef} className="absolute min-w-[320px] shadow-menu rounded-lg bg-white z-50 text-base">
          <button onClick={logout} className="relative z-50 w-full text-sm text-left p-4">{`Log out @${info.m_name}`}</button>
        </div>
      </>, document.querySelector('#react-misc-container'))  
    }
    <button onClick={() => setShowLogOptions(true)} className="relative flex gap-x-3 p-3 mb-3 hover:bg-gray-200 rounded-full items-center text-left">
      <UserAvatar src={info.profile_img} />
      <div className="hidden overflow-hidden whitespace-nowrap xl:block text-sm">
        <p className="overflow-hidden text-ellipsis font-bold">{info.name}</p>
        <p className="overflow-hidden text-ellipsis">{`@${info.m_name}`}</p>
      </div>
      <div className="hidden xl:block ml-8">
        <Dots />
      </div>
    </button>
    </div>
  );
};

export default UserBadge;
