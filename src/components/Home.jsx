// app/renderer/pages/Home.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeContent from './HomeContent';
import SermonsContent from './SermonsContent';
import VideosContent from './VideosContent';
import SettingsContent from './SettingsContent';
import SongsContent from './SongContent';
import YearDrop from './YearDrop';
import { FaHome, FaBook, FaVideo, FaCog, FaMusic } from 'react-icons/fa';
import TitleDrop from './TitleDrop';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeContent />;
      case 'Sermons':
        return <SermonsContent />;
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

  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
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
            <FaBook
              className="text-textBlue hover:cursor-pointer"
              onClick={() => {
                setActiveTab('Sermons');
                setIsSidebarVisible((prev) => !prev);
              }}
            />
            <TitleDrop />
            <YearDrop />

            <div className=" flex bg-[rgba(0,0,0,0.4)] w-[30vw] rounded-md border">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 bg-[transparent] w-[95%]  "
              />
              <div className="p-2 text-[1rem] hover:cursor-pointer">🍳</div>
            </div>

          </div>
          <div className="flex items-center justify-center gap-4 ">
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Home')}
            >
              <FaHome />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setActiveTab('Sermons');
                setIsSidebarVisible((prev) => !prev);
              }}
            >
              <FaBook />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Videos')}
            >
              <FaVideo />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Settings')}
            >
              <FaCog />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('Songs')}
            >
              <FaMusic />
            </motion.div>
          </div>
        </div>
        <div className="bg-lighter p-4"></div>
      </header>
      <div className="flex overflow-hidden pt-16">
        <AnimatePresence>
          {isSidebarVisible && activeTab === 'Sermons' && (
            <motion.aside
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
              className="w-64 bg-gradient-to-b from-background to-lighter text-white p-4 overflow-y-auto fixed inset-y-0 z-10 mt-16"
            >
              <ul>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Sermon 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Sermon 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Sermon 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Sermon 4
                  </a>
                </li>
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
        <main
          className={`flex-1 flex flex-col overflow-y-auto ${
            isSidebarVisible && activeTab === 'Sermons' ? '' : ''
          }`}
          style={{
            backgroundImage: 'url(darker.jpg)',
            backgroundSize: 'cover',
            width: '100%',
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
