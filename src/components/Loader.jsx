// app/renderer/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-background">
      <motion.img
        src="./cloud.png"
        className="h-40 w-40"
        animate={{ rotate: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 1 }}
        alt="cloud"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white text-2xl"
      >
        Welcome to his Voice....
      </motion.div>
    </div>
  );
};

export default Loader;
