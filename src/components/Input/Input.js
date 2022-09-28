const Input = () => {
  return (
    <div className="outline outline-1 outline-gray-300 p-2 text-base rounded-md group focus-within:outline-2 focus-within:outline-sky-500">
      <label for="username" className="group-focus-within:text-xs group-focus-within:font-semibold group-focus-within:text-sky-500 translate-y-[calc((1rem*1.5+1rem)/2-.5rem)] group-focus-within:translate-y-0 inline-block w-full transition-all">Phone, email, or username</label>
      <input id="username" type="email" className="focus-within:outline-none block w-full"/>
    </div>
  );
};

export default Input;