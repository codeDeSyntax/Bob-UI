import React, { useState, useContext, useCallback, useRef } from 'react';
import { SermonContext } from '../components/GlobalState';
import { motion, AnimatePresence } from 'framer-motion';
import HomeContent from './HomeContent';
import SermonsContent from './SermonsContent';
import VideosContent from './VideosContent';
import SettingsContent from './SettingsContent';
import SongsContent from './SongContent';
import SearchBar from './SearchBar';
import YearDrop from './YearDrop';
import {
  FaHome,
  FaBook,
  FaVideo,
  FaCog,
  FaMusic,
  FaTimes,
  FaSort,
} from 'react-icons/fa';
import TitleDrop from './TitleDrop';
import SermonList from './SermonList';

const Home = () => {
  const {
    selectedSermon,
    sermonsInTab,
    setSelectedSermon,
    deleteSermonInTab,
    allSermons,
    setAllSermons,
  } = useContext(SermonContext);
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [ascending, setAscending] = useState(true); // State to manage ascending or descending order
  const sermonTextRef = useRef(null);
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeContent />;
      case 'Sermons':
        return <SermonsContent sermonTextRef={sermonTextRef}/>;
      case 'Videos':
        return <VideosContent />;
      case 'Settings':
        return <SettingsContent />;
      case 'Songs':
        return <SongsContent />;
      default:
        return <HomeContent />;
    }
  };

  const sortByTitle = () => {
    const sortedSermons = [...allSermons].sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (ascending) {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
    setAllSermons(sortedSermons);
    setAscending(!ascending); // Toggle between ascending and descending
  };

  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  const handleSermonClick = useCallback(
    (sermon) => {
      setSelectedSermon(sermon);
    },
    [setSelectedSermon]
  );

  const searchText = (searchTerm) => {
    const input = searchTerm.trim().toLowerCase();
    const paragraph = sermonTextRef.current;
    const text = paragraph.innerText;

    // Remove previous highlights
    paragraph.innerHTML = text;

    if (input.length > 0) {
      const escapedInput = escapeRegExp(input);
      const regex = new RegExp(`(${escapedInput})`, 'gi');
      const matches = [...text.matchAll(regex)];

      if (matches.length > 0) {
        let highlightedText = text.replace(
          regex,
          '<span class="highlight">$1</span>'
        );
        paragraph.innerHTML = highlightedText;

        // Scroll to the first highlighted text
        const highlightElement = document.querySelector('.highlight');
        if (highlightElement) {
          highlightElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // Reset scroll position if no match is found
        window.scrollTo(0, 0);
      }
    }
  };

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <header className="bg-background text-text fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4 p-3 justify-between">
          <div className="flex items-center justify-center gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-800">
              <FaBook
                size={22}
                className="text-text hover:cursor-pointer"
                onClick={() => {
                  setActiveTab('Sermons');
                  setIsSidebarVisible((prev) => !prev);
                }}
              />
            </div>
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-800 cursor-pointer"
              onClick={sortByTitle}
            >
              <FaSort size={22} />
            </div>
            <TitleDrop />
            <YearDrop />
            <SearchBar searchText={searchText}/>
          </div>
          <div className="flex items-center justify-center gap-8 pr-10">
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Home')}
            >
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-800">
                <FaHome size={22} />
              </div>
            </motion.div>
            <motion.div
              className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center bg-gray-800"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setActiveTab('Sermons');
                setIsSidebarVisible((prev) => !prev);
              }}
            >
              <FaBook size={22} />
            </motion.div>
            <motion.div
              className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center bg-gray-800"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Videos')}
            >
              <FaVideo size={22} />
            </motion.div>
            <motion.div
              className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center bg-gray-800"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Settings')}
            >
              <FaCog size={22} className='animate-spin'/>
            </motion.div>
            <motion.div
              className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center bg-gray-800"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Songs')}
            >
              <FaMusic size={22} />
            </motion.div>
          </div>
        </div>
        {activeTab === 'Sermons' ? (
          <div className="bg-lighter p-2 gap-3 flex items-center justify-between">
            <div className="">
              <p className="font-mono text-text">{selectedSermon?.title}</p>
              <p className="text-textBlue font-mono"> {selectedSermon?.date}</p>
            </div>
            {sermonsInTab.length > 0 ? (
              <div className="flex item-center justify-center gap-2">
                {sermonsInTab.map((sermon) => (
                  <div
                    className="flex items-center justify-center p-2 rounded-lg bg-background gap-2 hover:cursor-pointer group"
                    key={sermon.id}
                    onClick={() => handleSermonClick(sermon)}
                  >
                    <p className="text-[.7rem]">{sermon.title.slice(0, 10)}</p>
                    <FaTimes
                      className="text-textBlue text-[.5rem] cursor-pointer size-3 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out transform group-hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSermonInTab(sermon);
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </header>
      <div className="flex  pt-16">
        <AnimatePresence>
          {!isSidebarVisible && activeTab === 'Sermons' && (
            <motion.aside
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
              className="w-[24rem] bg-gradient-to-b from-background to-lighter text-white p-4 overflow-y-auto fixed inset-y-0  mt-[8rem]"
            >
              <SermonList setIsSidebarVisible={setIsSidebarVisible} />
            </motion.aside>
          )}
        </AnimatePresence>
        <main
          className={` flex flex-col overflow-y-auto overflow-x-hidden ${
            isSidebarVisible && activeTab === 'Sermons' ? '' : ''
          }`}
          style={{
            backgroundImage: 'url(darker.jpg)',
            backgroundSize: 'cover',
            width: '100vw',
            backgroundPosition: 'center',
          }}
        >
          <div className="">{renderContent()}</div>
        </main>
      </div>
    </motion.div>
  );
};

export default Home;
