import { useRef } from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef, useState } from 'react';

const Input = forwardRef(({ id, label, disabled = false, activateAction,  defaultValue, ...inputProps }, ref) => {
  const [ value, setValue ] = useState(defaultValue || '');
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    getState: () => value,
    focus: () => inputRef.current.focus()
  }), [value]);

  const changeHandler = e => setValue(e.currentTarget.value);
  const actionHandler = e => {
    if (e.code === 'Enter') activateAction();
  };

  return (
    <div disabled={disabled} className={`outline outline-gray-300 p-2 text-base rounded-md group focus-within:outline-2 focus-within:outline-sky-500 ${disabled ? 'outline-0 text-gray-400 bg-gray-50' : 'outline-1'}`}>
      <label htmlFor={id} className={`cursor-text select-none group-focus-within:text-xs group-focus-within:font-semibold group-focus-within:text-sky-500 group-focus-within:translate-y-0 inline-block w-full transition-all ${value ? 'text-xs font-semibold translate-y-0' : 'translate-y-[calc((1rem*1.5+1rem)/2-.5rem)]'}`}>{label}</label>
      <input value={value} ref={inputRef} disabled={disabled} id={id} {...inputProps} onKeyDown={actionHandler} onChange={changeHandler} className="focus-within:outline-none block w-full"/>
    </div>
  );
});

export default Input;