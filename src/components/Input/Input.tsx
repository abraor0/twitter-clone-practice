import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  activateAction?: () => void;
  defaultValue?: string;
}

export interface InputHandle {
  getState: () => string;
  focus: () => void;
}

const Input = forwardRef<InputHandle, InputProps>(({ id, label, disabled = false, activateAction,  defaultValue, ...inputProps }, ref) => {
  const [ value, setValue ] = useState(defaultValue || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getState: () => value,
    focus: () => inputRef.current?.focus()
  }), [value]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const actionHandler = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && activateAction) activateAction();
  };


  return (
    <div className={`outline outline-gray-300 p-2 text-base rounded-md group focus-within:outline-2 focus-within:outline-sky-500 ${disabled ? 'outline-0 text-gray-400 bg-gray-50' : 'outline-1'}`}>
      <label htmlFor={id} className={`cursor-text select-none group-focus-within:text-xs group-focus-within:font-semibold group-focus-within:text-sky-500 group-focus-within:translate-y-0 inline-block w-full transition-all ${value ? 'text-xs font-semibold translate-y-0' : 'translate-y-[calc((1rem*1.5+1rem)/2-.5rem)]'}`}>{label}</label>
      <input value={value} ref={inputRef} disabled={disabled} id={id} {...inputProps} onKeyDown={actionHandler} onChange={changeHandler} className="focus-within:outline-none block w-full"/>
    </div>
  );
});

export default Input;