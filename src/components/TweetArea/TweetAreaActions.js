import TweetAreaActionButton from './TweetAreaActionButton';
import {
  Image,
  Gif,
  Poll,
  Emoji,
  Schedule,
  Location,
  Plus
} from '../Icons/icons';
import ButtonTooltip from '../UI/ButtonTooltip';
import { useEffect, useRef, useState } from 'react';

const TweetAreaActions = ({ characterCount }) => {
  const [progressLength, setProgressLength] = useState();
  const circleRef = useRef();

  useEffect(() => {
    const progressL = circleRef.current.getTotalLength();
    setProgressLength(progressL);
    circleRef.current.style.strokeDashoffset = progressL / 4;
  }, []);

  useEffect(() => {
    const ratio = characterCount / 280;
    const progressSize = ratio * progressLength;

    circleRef.current.style.strokeDasharray = `${progressSize} ${
      progressLength - progressSize
    }`;
  });

  return (
    <div className="pt-4 border-t-[1px] border-gray-100 my-4 flex flex-wrap gap-y-2 justify-between items-center">
      <div className="text-xl flex">
        <TweetAreaActionButton color="text-sky-500">
          <Image />
          <ButtonTooltip text="Image" />
        </TweetAreaActionButton>
        <TweetAreaActionButton color="text-sky-500">
          <Gif />
          <ButtonTooltip text="Gif" />
        </TweetAreaActionButton>
        <TweetAreaActionButton color="text-sky-500">
          <Poll />
          <ButtonTooltip text="Poll" />
        </TweetAreaActionButton>
        <TweetAreaActionButton color="text-sky-500">
          <Emoji />
          <ButtonTooltip text="Emoji" />
        </TweetAreaActionButton>
        <TweetAreaActionButton color="text-sky-500">
          <Schedule />
          <ButtonTooltip text="Schedule" />
        </TweetAreaActionButton>
        <TweetAreaActionButton color="text-sky-500">
          <Location />
          <ButtonTooltip text="Location" />
        </TweetAreaActionButton>
      </div>
      <div
        className={`${
          characterCount == 0 ? 'invisible' : ''
        } items-center flex gap-x-3`}
      >
        <div className="text-2xl">
          <svg width="1em" height="1em">
            <circle
              cx=".5em"
              cy=".5em"
              r=".4em"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="3px"
            />
            <circle
              ref={circleRef}
              cx=".5em"
              cy=".5em"
              r=".4em"
              fill="none"
              stroke="#0e99e9"
              strokeWidth="3px"
              strokeLinecap={characterCount == 0 ? '' : 'round'}
            />
          </svg>
        </div>
        <div className="w-[1px] h-8 bg-gray-300"></div>
        <button
          className="text-sky-500 text-lg rounded-full border-gray-300 p-[1px] border-[1px]"
          type="button"
        >
          <Plus />
        </button>
        <button
          disabled={characterCount == 0}
          className="visible bg-sky-500 font-bold text-white px-4 text-sm py-2 rounded-full hover:bg-sky-600 transition-colors disabled:bg-sky-300"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetAreaActions;
