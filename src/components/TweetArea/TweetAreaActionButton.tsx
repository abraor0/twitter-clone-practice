interface TweetAreaActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  children: React.ReactNode;
}

const TweetAreaActionButton = ({ color, children , ...buttonProps}: TweetAreaActionButtonProps) => {
  const bColor = color || 'text-gray-500';

  return (
    <button className={bColor + ' transition-colors flex hover:text-sky-500 items-center group'} type="button" {...buttonProps}>
      <i className="text-xl p-2 group-hover:bg-sky-100 rounded-full relative">
        {children}
      </i>
    </button>  
  );
};

export default TweetAreaActionButton; 