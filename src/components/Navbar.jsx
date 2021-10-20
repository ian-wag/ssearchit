import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SearchCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="flex items-center text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            ssearchit <SearchCircleIcon className="w-8 ml-2" />
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? <SunIcon className="w-6" /> : <MoonIcon className="w-6" />}
        </button>
      </div>
      <Search />
    </div>
  );
};
