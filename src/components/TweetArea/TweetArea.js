import UserAvatar from '../User/UserAvatar';
import DownArrow from '../Icons/DownArrow';
import World from '../Icons/World';
import { useState } from 'react';
import TweetAreaActions from './TweetAreaActions';

const TweetArea = () => {
  const [ showTweetConfig, setShowTweetConfig ] = useState(false);
  const [ tweetText, setTweetText ] = useState('');

  const handlerOnFocus = () => setShowTweetConfig(true);
  const handlerInput = e => setTweetText(e.target.innerText);

  return (
    <div className="px-3 flex gap-x-4">
      <UserAvatar src="https://pbs.twimg.com/profile_images/1570224322609926149/t7roNRDx_normal.jpg" />
      <div className="flex-1">
        {showTweetConfig && <button className="transition-colors hover:bg-sky-100 text-sky-500 flex items-center gap-x-1 text-[0.8125rem] border-[1px] border-gray-300 px-3 leading-relaxed rounded-full font-semibold mb-5" type="button">
          Everyone
          <i className="text-base"> 
            <DownArrow />
          </i>
        </button>}
        {/* <span className="relative -z-10 w-full inline-block h-auto">
          <textarea className="absolute inset-0 resize-none focus-visible:outline-none placeholder:text-gray-700 text-lg" onFocus={handlerOnFocus} placeholder="What's happening?" maxLength="280"></textarea>
        </span> */}
        <span onInput={handlerInput} className="block pl-1 text-wrap-any focus-visible:outline-none text-gray-700 text-lg mb-4 mt-3" onFocus={handlerOnFocus} contentEditable="true">
          What's happening?
        </span>
        {showTweetConfig && <button className="flex items-center gap-x-1 text-sky-500 font-semibold text-sm transition-colors hover:bg-sky-100 px-2 py-[2px] rounded-full" type="button">
          <i className="text-base">
            <World />
          </i>
          Everyone can reply
         </button>}
        <TweetAreaActions characterCount={tweetText.length}/>
      </div>
    </div>
  );
};

export default TweetArea;