import React from 'react';

const Video = () => {
  return (
     
     <div className="video-container">
      <video  controls>
      <source src="/assets/RPReplay_Final1705637371.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video  controls>
      <source src="/assets/video-output-6E6DA7D2-9C01-4FA3-9670-C108E4918F00.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video  controls>
      <source src="/assets/video-output-B5DF10F2-2ED6-4141-B182-EA8C37E271DE.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;








