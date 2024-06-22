import { useContext } from 'react';
import { SermonContext } from '../components/GlobalState.js';

const SermonsContent = () => {
  const { selectedSermon } = useContext(SermonContext);
  return (
    <div className="p-4 w-full min-h-screen flex flex-col items-center justify-start">
      <h3 className="text-[3rem] font-sans italic text-text text-center mt-28">
        {selectedSermon.title}
      </h3>
      <p className="font-mono text-text text-center">{selectedSermon.date}</p>
      {selectedSermon.hasOwnProperty('type') ?
      <audio controls className='mt-6'>
        <source src={selectedSermon.audioUrl} type="audio/mpeg"></source>
         <p className=" text-text font-mono">This sermon is in audio format</p>
      </audio> 
     
      :
      <p className="sermonText text-[6rem] font-semibold text-center text-balance text-text">
      🔊 {selectedSermon.sermon} 🔑
    </p>
      }
    </div>
  );
};

export default SermonsContent;
