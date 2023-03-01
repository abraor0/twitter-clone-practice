import UserAvatar from '../User/UserAvatar';
import { DownArrow, World } from '../Icons/icons';
import { ChangeEvent, useState } from 'react';
import TweetAreaActions from './TweetAreaActions';
import { useAuthContext } from '../../store/auth-context';
import { useRef } from 'react';
import { useEffect } from 'react';

const TweetArea = () => {
  const [showTweetConfig, setShowTweetConfig] = useState(false);
  const [tweetText, setTweetText] = useState('');
  const { user } = useAuthContext();
  const placeholderRef = useRef<HTMLDivElement>(null);

  const handlerOnFocus = () => setShowTweetConfig(true);
  const handlerInput = (e: ChangeEvent<HTMLSpanElement>) => setTweetText(e.target.innerText);

  useEffect(() => {
    if (placeholderRef.current) {
      if (tweetText &&
          placeholderRef.current.innerText
         ) {
        placeholderRef.current.innerText = '';
      } else if (!tweetText) {
        placeholderRef.current.innerText = 'What\'s happening?';
      }
    }
  }, [ tweetText ]);

  return (
    <div className="px-3 flex gap-x-4">
      <UserAvatar src={user?.info.profile_img} />
      <div className="flex-1">
        {showTweetConfig && (
          <button
            className="transition-colors hover:bg-sky-100 text-sky-500 flex items-center gap-x-1 text-[0.8125rem] border-[1px] border-gray-300 px-3 leading-relaxed rounded-full font-semibold mb-5"
            type="button"
          >
            Everyone
            <i className="text-base">
              <DownArrow />
            </i>
          </button>
        )}
        <div className="pl-1 mb-4 mt-3 grid grid-rows-1 grid-cols-1">
          <div ref={placeholderRef} className="text-gray-700 row-start-1 row-end-2 col-start-1 col-end-1"></div>
          <span
            onInput={handlerInput}
            className="block text-wrap-any focus-visible:outline-none row-start-1 row-end-2 col-start-1 col-end-1"
            onFocus={handlerOnFocus}
            contentEditable="true"
          ></span>
        </div>          
        {showTweetConfig && (
          <button
            className="flex items-center gap-x-1 text-sky-500 font-semibold text-sm transition-colors hover:bg-sky-100 px-2 py-[2px] rounded-full"
            type="button"
          >
            <i className="text-base">
              <World />
            </i>
            Everyone can reply
          </button>
        )}
        <TweetAreaActions characterCount={tweetText.length} />
      </div>
    </div>
  );
};

export default TweetArea;
