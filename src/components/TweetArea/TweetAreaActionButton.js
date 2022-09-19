const TweetAreaActionButton = props => {
  const color = props.color || 'text-gray-500';

  return (
    <button className={color + ' transition-colors flex hover:text-sky-500 items-center group'} type="button">
      <i className="text-xl p-2 group-hover:bg-sky-100 rounded-full relative">
        {props.children}
      </i>
    </button>  
  );
};

export default TweetAreaActionButton; 