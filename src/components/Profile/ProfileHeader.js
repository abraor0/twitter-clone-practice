import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Dots } from '../Icons/icons';
import ButtonTooltip from '../UI/ButtonTooltip';
import LoginButton from '../Login/LoginButton';

const ProfileHeader = ({ user }) => {
  const containerRef = useRef();
  const bannerRef = useRef();
  const [offsetToCentralize, setOffsetToCentralize] = useState('');

  // Calculates the offset in pixels needed to center the profile
  // image between the banner and the white bg
  useEffect(() => {
    if (containerRef.current && bannerRef.current) {
      const totalHeight = containerRef.current.getBoundingClientRect().height;
      const bannerHeight = bannerRef.current.getBoundingClientRect().height;
      const imgHalfSizePx =
        document.body.computedStyleMap().get('font-size').value * 4.5;

      setOffsetToCentralize(imgHalfSizePx - (totalHeight - bannerHeight));
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} className="relative">
        <img ref={bannerRef} src={user.user_banner_image} alt="" />
        <div
          className={`absolute rounded-full p-1 left-5 bg-white h-36 w-36`}
          style={{ bottom: `-${offsetToCentralize}px` }}
        >
          <img className="rounded-full" src={user.user_profile_image} alt="" />
        </div>
        <div className="mt-3 flex">
          <button
            className="ml-auto transition-colors flex text-gray-500 items-center gap-x-[6px] pr-2 group"
            type="button"
          >
            <i className="text-xl p-2 group-hover:bg-gray-200 outline-1 outline outline-gray-300 rounded-full relative">
              <Dots />
              <ButtonTooltip text={'More'} />
            </i>
          </button>
          <LoginButton to="" black className="override:px-4">
            Follow
          </LoginButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
