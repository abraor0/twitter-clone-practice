interface AnchorProps {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

const Anchor = ({ children, className = '', secondary }: AnchorProps) => {
  let colorsClass = 'text-sky-500 hover:shadow-border-p'

  if (secondary) colorsClass = "text-gray-700 hover:shadow-border-s";
  
  return (
    <a href="#" className={`${colorsClass} ${className}`}>
      {children}
    </a>
  );
};

export default Anchor;