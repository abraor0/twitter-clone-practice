import { Link } from 'react-router-dom';

const LoginButton = ({secondary, terciary, black, className = '', to, children,  ...buttonProps}) => {
  let colorClasses = 'bg-sky-500 hover:bg-sky-600 text-white';

  if (secondary)
    colorClasses = 'border-gray-300 hover:bg-sky-50 text-sky-500';
  if (terciary) colorClasses = 'border-gray-300 hover:bg-gray-200';
  if (black) colorClasses = 'bg-black text-white hover:bg-black/90';

  const fullClassName = 
    'transition-colors text-sm flex gap-2 justify-center items-center border-[1px] py-[10px] px-10 rounded-full font-semibold ' +
    colorClasses +
    ' ' +
    className;

  if (to !== undefined) {
    return (
      <Link
        to={to}
        className={fullClassName}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={fullClassName}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }
};

export default LoginButton;
