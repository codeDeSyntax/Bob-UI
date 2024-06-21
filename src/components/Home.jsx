// app/renderer/pages/Home.jsx

import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-900 text-white p-4 text-center">
        <h1>Sermon Reader</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-blue-700 text-white p-4 overflow-y-auto">
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Sermon 1</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sermon 2</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sermon 3</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sermon 4</a></li>
          </ul>
        </aside>
        <main className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl mb-4">Welcome to the Sermon Reader</h2>
          <p>Select a sermon from the sidebar to get started.</p>
        </main>
      </div>
    </div>
  );
};

export default Home;
