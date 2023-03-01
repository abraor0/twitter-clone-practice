import { Dots } from '../Icons/icons';
import UserAvatar from '../User/UserAvatar';
import TweetToolbar from './TweetToolbar';
import ButtonTooltip from '../UI/ButtonTooltip';
import { Link } from 'react-router-dom';
import type { TweetTypes } from '../../apis/firestore';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

function formatDate(date: string) {
  const tweetDate = new Date(date);
  const todayDate = new Date();
  let formatedDate;

  const tweetYear = tweetDate.getFullYear();
  const todayYear = todayDate.getFullYear();

  if (tweetYear !== todayYear) {
    formatedDate = `${
      monthNames[tweetDate.getMonth()]
    } ${tweetDate.getDay()}, ${tweetYear}`;
  } else {
    const tweetMonth = tweetDate.getMonth();
    const tweetDay = tweetDate.getDate();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();

    if (tweetMonth === todayMonth && tweetDay === todayDay) {
      const tweetHours = tweetDate.getHours();
      const todayHours = todayDate.getHours();

      if (tweetHours === todayHours) {
        const tweetMin = tweetDate.getMinutes();
        const todayMin = todayDate.getMinutes();

        if (tweetMin === todayMin) {
          const tweetSec = tweetDate.getSeconds();
          const todaySec = todayDate.getSeconds();

          formatedDate = `${todaySec - tweetSec}s`;
        } else {
          formatedDate = `${todayMin - tweetMin}m`;
        }
      } else {
        formatedDate = `${todayHours - tweetHours}h`;
      }
    } else {
      formatedDate = `${monthNames[tweetMonth]} ${tweetDay}`;
    }
  }
  return formatedDate;
}

interface TweetProps extends TweetTypes {
}

const Tweet = ({
  user_m_name,
  user_name,
  user_profile_img,
  created,
  text,
  ...toolbarData
}: TweetProps) => {
  
  return (
    <article className="flex gap-x-3 border-y border-y-gray-100 px-3 pt-3 pb-[6px] text-[15px]">
      <div className="mt-2 shrink-0">
        <UserAvatar src={user_profile_img} />
      </div>
      <div className="flex-1">
        <header className="flex relative">
          <div className="flex mt-2 sm:gap-2 flex-col sm:flex-row">
            <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold leading-5">
              <Link to={`/${user_m_name}`}>{user_name}</Link>
            </h3>
            <span className="text-gray-500">
              {/* TODO: Remove assertion */}
              {`@${user_m_name}`} · {formatDate((created as any).toDate())}
            </span>
          </div>
          <button
            className="absolute top-1 right-0 transition-colors flex text-gray-500 hover:text-sky-500 items-center gap-x-[6px] pr-2 group "
            type="button"
          >
            <i className="text-xl p-2 group-hover:bg-sky-100 rounded-full relative">
              <Dots />
              <ButtonTooltip text={'More'} />
            </i>
          </button>
        </header>
        <div className="mb-2 mt-1">
          <p>{text}</p>
        </div>
        <TweetToolbar {...toolbarData} />
      </div>
    </article>
  );
};

export default Tweet;
