import React, { useContext } from 'react';
import { SermonContext } from '../components/GlobalState';
import SolarSystem from '../components/Stars'
const SermonsContent = ({ sermonTextRef }) => {
  const { selectedSermon, settings } = useContext(SermonContext);

  const sermonTextStyle = {
    fontSize: `${settings.textSize}rem`,
    fontFamily:`${settings.fontFamily}`// Convert textSize to rem units
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-start w-screen overflow-auto max-w-full">
      <h3 className="text-[3rem] font-sans italic text-text text-center mt-28 underline">
        {selectedSermon.title}
      </h3>
      <p className="font-mono text-text text-center">{selectedSermon.date}</p>
      <SolarSystem/>
      {selectedSermon.hasOwnProperty('type') ? (
        <audio controls className="mt-6">
          <source src={selectedSermon.audioUrl} type="audio/mpeg" />
          <p className="text-text font-mono">This sermon is in audio format</p>
        </audio>
      ) : (
        <div
          ref={sermonTextRef} // Attach the ref to the sermon text div
          className="sermonText w-[100%] font-semibold text-center text-text break-words overflow-hidden font-mono"
          style={{ ...sermonTextStyle, fontFamily: `${settings.fontFamily}`, backgroundColor: `${settings.backgroundColor}`, color: `${settings.textColor}` }}
          dangerouslySetInnerHTML={{ __html: '🔊' + selectedSermon.sermon + '🔑'}}
        />
      )}
    </div>
  );
};

export default SermonsContent;
