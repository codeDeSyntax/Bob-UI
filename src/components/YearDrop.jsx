import React, { useState } from 'react';

const YearDrop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const years = [
    '1963', '1964', '1965', '1966', '1967', '1968',
    '1969', '1970', '1971', '1972', '1973', '1974'
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownOffsetButton"
        onClick={toggleDropdown}
        className="text-white shadow-lighter shadow-sm focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-blue-600"
        type="button"
      >
        Year
        <svg
          className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDistance"
        onMouseLeave={closeDropdown}
        className={`z-30 absolute left-20 p-4 mt-2 bg-background divide-y divide-gray-100 rounded-lg shadow w-[24rem] dark:bg-gray-700 ${
          dropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="grid grid-cols-5 gap-1 py-2 text-sm text-gray-700 dark:text-gray-200 ">
          {years.map((year) => (
            <div
              key={year}
              className="h-6 w-14 text-center text-mono flex items-center justify-center px-2 py-2 bg-[rgba(0,0,0,0.6)] text-text"
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearDrop;
