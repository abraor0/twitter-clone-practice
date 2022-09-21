import MagnifyingGlass from '../Icons/MagnifyingGlass';
import Close from '../Icons/Close';
import { useState } from 'react';

const Search = () => {
  const [ searchQuerry, setSearchQuerry ] = useState('');

  const handleOnChange = e => setSearchQuerry(e.target.value);

  return (
    <div className="flex gap-x-3 bg-gray-100 py-3 px-5 rounded-full mt-2 text-sm group focus-within:bg-transparent focus-within:outline-1 focus-within:outline-sky-500 focus-within:outline relative">
      <i className="text-xl mr-2 group-focus-within:text-sky-500">
        <MagnifyingGlass />
      </i>
      <input onChange={handleOnChange} className="bg-transparent focus-visible:outline-none placeholder:text-inherit " type="text" placeholder="Search Twitter" value={searchQuerry}/>
      <button type="button" className={`${searchQuerry ? '' : "invisible"} ml-auto transition-colors bg-sky-500 rounded-full hover:bg-sky-700"`}>
        <i className="text-xl text-white">
          <Close/>
        </i>
      </button>
      <div className="hidden absolute inset-x-0 top-full shadow-search rounded-lg py-4 px-10 group-focus-within:block bg-white">
        <p className="mb-10">Try searching for people, topics, or keyword</p>
      </div>
    </div>
  );
};

export default Search;