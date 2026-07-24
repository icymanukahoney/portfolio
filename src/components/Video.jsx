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
      <source src="/assets/KULA2.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video  controls>
      <source src="/assets/FLO.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video  controls>
      <source src="/assets/SNOWCITY.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

<video  controls>
      <source src="/assets/HORSE.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video  controls>
      <source src="/assets/UW2.MOV" type="video/mp4" />
      </video>


      <video  controls>
      <source src="/assets/evening.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
    </>
  );
};

export default Video;








