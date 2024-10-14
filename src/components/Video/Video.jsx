import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoCourse = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.body.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.body.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <div className='video-wrapper'>
      <iframe
        className="w-full"
        width="860"
        height="450"
        src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
        onContextMenu={(e) => e.preventDefault()}
        
      ></iframe>
    </div>
  );
};

export default VideoCourse;
