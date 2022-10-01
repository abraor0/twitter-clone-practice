import { Reply, Like, Retweet, Share } from '../Icons/icons';
import ButtonTooltip from '../UI/ButtonTooltip';

const PostToolbar = ({ quotes, retweets, favorites }) => {
  return (
    <div className="flex -ml-2">
      <div className="flex-1">
        <button
          type="button"
          className="transition-colors flex text-gray-500 hover:text-sky-500 items-center gap-x-[6px] pr-2 group"
        >
          <i className="text-xl p-2 group-hover:bg-sky-100 rounded-full relative">
            <Reply />
            <ButtonTooltip text={'Reply'} />
          </i>
          {quotes == '0' ? null : quotes}
        </button>
      </div>
      <div className="flex-1">
        <button
          type="button"
          className="transition-colors flex text-gray-500 hover:text-green-500 items-center gap-x-[6px] pr-2 group"
        >
          <i className="text-xl p-2 group-hover:bg-green-100 rounded-full relative">
            <Retweet />
            <ButtonTooltip text={'Retweet'} />
          </i>
          {favorites == '0' ? null : favorites}
        </button>
      </div>
      <div className="flex-1">
        <button
          type="button"
          className="transition-colors flex text-gray-500 hover:text-pink-500 items-center gap-x-[6px] pr-2 group"
        >
          <i className="text-xl p-2 group-hover:bg-pink-100 rounded-full relative">
            <Like />
            <ButtonTooltip text={'Like'} />
          </i>
          {retweets == '0' ? null : retweets}
        </button>
      </div>
      <div className="flex-1">
        <button
          type="button"
          className="transition-colors flex text-gray-500 hover:text-sky-500 items-center gap-x-[6px] pr-2 group"
        >
          <i className="text-xl p-2 group-hover:bg-sky-100 rounded-full relative">
            <Share />
            <ButtonTooltip text={'Share'} />
          </i>
        </button>
      </div>
    </div>
  );
};

export default PostToolbar;
