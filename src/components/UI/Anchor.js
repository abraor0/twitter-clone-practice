const Anchor = ({ children, className = '', secondary }) => {
  let colorsClass = 'text-sky-500 hover:shadow-border-p'

  if (secondary) colorsClass = "text-gray-700 hover:shadow-border-s";
  
  return (
    <a href="#" className={`${colorsClass} ${className}`}>
      {children}
    </a>
  );
};

export default Anchor;