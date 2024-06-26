// src/components/VideosContent.js

import React from 'react';
import { motion } from 'framer-motion';
// import 'tailwindcss/tailwind.css';

const images = [
  // Replace with your image URLs
  '/gallery/eagle6.jpeg',
  '/gallery/eagle1.jpeg',
  '/gallery/eagle2.jpeg',
  '/gallery/branham.jpeg',
  '/gallery/eagle7.jpeg',
  '/gallery/lamb1.jpeg',
  '/gallery/moon1.jpeg',
  '/gallery/splash.jpeg',
  '/gallery/moon2.jpeg',
  '/gallery/eagle5.jpeg',
  '/gallery/lamb1.jpeg',
  '/gallery/lamb.jpeg',
  '/broBob.png',
  '/gallery/moon2.jpeg',
  '/gallery/lamb2.jpeg',
  '/gallery/splash.jpeg',
  '/gallery/wmb.jpeg',
  '/gallery/vog.jpeg',
  '/gallery/hno.jpeg',
  '/gallery/brick.jpeg',
];

const VideosContent = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 bg-gradient-to-b from-gray-700 to-blue-900 text-white min-h-screen">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="m-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)' }}
        >
          <img
            src={src}
            alt={`Gallery item ${index + 1}`}
            className="w-[10rem] h-[18rem] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default VideosContent;
