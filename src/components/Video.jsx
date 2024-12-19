import React from 'react'
import { Helmet } from 'react-helmet'

const Video = () => {
  return (
<>
    <Helmet>
  <title>Maria Stromova Portfolio - Home</title>
  <meta name="description" content="Website-portfolio of the Frontend developer, UX designer and Digital and Content Creator, Maria Stromova" />
  <meta name="keywords" content="ux design, web design, frontend, digital, content creation, video, Maria Stromova" />
  </Helmet>
     
     <div className="video-container">

     <video  controls>
      <source src="/assets/autumn.MP4" type="video/mp4" />
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
    </>
  );
};

export default Video;








