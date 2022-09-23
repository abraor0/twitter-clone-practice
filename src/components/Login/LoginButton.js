const LoginButton = props => {
  let colorClasses = 'bg-sky-500 hover:bg-sky-600 text-white';

  if(props.secondary) colorClasses = 'border-gray-300 hover:bg-sky-50 text-sky-500';
  if(props.terciary) colorClasses = 'border-gray-200 hover:bg-gray-100';
  return (
    <button type="button" className={'transition-colors text-sm flex gap-2 justify-center items-center border-[1px] py-[10px] px-10 rounded-full font-semibold ' + colorClasses}>
      {props.children}
    </button>
  );
};

export default LoginButton;