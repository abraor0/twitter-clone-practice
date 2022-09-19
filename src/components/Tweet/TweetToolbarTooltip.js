const TweetToolbarTooltip = ({ text }) => (
  <span className="absolute bg-gray-600 text-white text-[10px] opacity-0 group-hover:animate-fadein leading-5 not-italic px-1 mt-3 rounded-sm left-1/2 -translate-x-1/2">
    {text}
  </span>
);

export default TweetToolbarTooltip;