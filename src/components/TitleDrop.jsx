import React, { useState, useRef, useEffect, useContext } from 'react';
import { SermonContext } from './GlobalState';
import earlySermons from '../sermons/1964-1969/firstset';
import secondSet from '../sermons/1970/1970';
import thirdSet from '../sermons/1971/1971';
import fourthSet from '../sermons/1972/1972';
import lastSet from '../sermons/1973/1973';
import audioSermons from '../sermons/audio';

const sermonCollection = [
  ...earlySermons,
  ...secondSet,
  ...thirdSet,
  ...fourthSet,
  ...lastSet,
  ...audioSermons
];

const TitleDrop = () => {
  const { setAllSermons } = useContext(SermonContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredSermons, setFilteredSermons] = useState(sermonCollection);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setAllSermons(filteredSermons);
  }, [filteredSermons, setAllSermons]);

  const filterByTitle = (e) => {
    const letter = e.target.textContent;
    const titleFiltered = sermonCollection.filter((eachSermon) => {
      return eachSermon.title.toLowerCase().startsWith(letter.toLowerCase());
    });
    
    setFilteredSermons(titleFiltered);
    setDropdownOpen(false); // Close the dropdown after filtering
  };

  const resetFilter = () => {
    setFilteredSermons(sermonCollection);
    setDropdownOpen(false);
  };

  return (
    <div className="relative text-left" ref={dropdownRef} id='title'>
      <button
        onClick={toggleDropdown}
        className="text-white  bg-blue-600 focus:ring-4 shadow-sm focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
        type="button"
      >
        Title
        <svg
          className={`w-2.5 h-2.5 ml-3 transform ${dropdownOpen ? 'rotate-90' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="z-30 absolute left-20 p-4 mt-2 bg-gray-800 rounded-lg shadow w-96">
          <div className="grid grid-cols-5 gap-1 py-2 text-sm text-gray-200">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <div
                onClick={filterByTitle}
                key={letter}
                className="h-6 w-14 text-center flex items-center justify-center px-2 py-2 bg-gray-700 rounded cursor-pointer"
              >
                {letter}
              </div>
            ))}
            <div
              onClick={resetFilter}
              className="col-span-5 h-6 w-14 text-center flex items-center justify-center px-2 py-2 bg-gray-700 rounded cursor-pointer"
            >
              Reset
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleDrop;
