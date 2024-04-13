import React, { useState, useEffect, useRef} from 'react'
import { Link } from 'react-scroll'
import Typed from 'typed.js'
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ReactMatrixAnimation } from 'react-matrix-animation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import Video from '../components/Video'
import { Helmet } from 'react-helmet'

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

  const [matrixVisible, setMatrixVisible] = useState(true); 

  const [activeSection, setActiveSection] = useState('about'); // Default active section is 'about'

  const helloRef = useRef(null);
  const passionRef = useRef(null);

  const flowersRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: adds smooth scrolling behavior
    });
}

// mail
  const handleSayHelloClick = () => {
    window.location.href = "mailto:msoftheworld@gmail.com";
  };

//matrix
const handleMatrixClick = () => {
  setMatrixVisible(false); // Set matrixVisible to false when the animation is clicked
};


// WEBSITES LINKS

// link to website hotel
const handleOpenLinkClick = () => {
  window.open('https://icymanukahoney.github.io/Summative2-hotel-app/', '_blank');
};

// link to colour website 
const handleOpenLinkColourClick = () => {
  window.open('https://summative4-livid.vercel.app/', '_blank');
};

// link to gallery website 
const handleOpenLinkGalleryClick = () => {
  window.open('https://gallery-js-coral.vercel.app/', '_blank');
};

// link to bar website 
const handleOpenLinkBarClick = () => {
  window.open('https://sass-cafe-poject.vercel.app/', '_blank');
};



// BEHANCE - UX LINKS 

// link to COLOUR BEhance UX Portfolio 
const handleOpenUxLinkColourClick = () => {
  window.open('https://www.behance.net/gallery/196053937/Colour-Me-Beautiful-NZ-Student-Study-Project/', '_blank');
};



// ICONS LINKS - Footer

// link to git hub 
const handleOpenGitHubClick = () => {
  window.open('https://github.com/icymanukahoney/', '_blank');
};

// link to linkedin
const handleOpenLinkedinClick = () => {
  window.open('https://www.linkedin.com/in/maria-stromova-52a01587/', '_blank');
};

// link to instagram 
const handleOpenInstaClick = () => {
  window.open('https://www.instagram.com/icymanukahoney/', '_blank');
};

// link to youtube 
const handleOpenYoutubeClick = () => {
  window.open('https://www.youtube.com/@icymanukahoney/', '_blank');
};

// link to youtube 
const handleOpenBehanceClick = () => {
  window.open('https://www.behance.net/mariaroe/', '_blank');
};



// flower icons 
const flowerClickHandler = (flower) => {
  gsap.to(flower, {
    rotation: '+=360', // Increment the rotation by 360 degrees each time
    transformOrigin: 'center', // Set the transform origin to the center for rotation effect
  });
};
useEffect(() => {
  const flowers = flowersRef.current.querySelectorAll('.flower-container-home img');
  flowers.forEach((flower) => {
    flower.addEventListener('click', () => flowerClickHandler(flower));
  });
  // Clean up event listeners on component unmount
  return () => {
    flowers.forEach((flower) => {
      flower.removeEventListener('click', () => iconClickHandler(flower));
    });
  };
}, []);


//scroll for the nav bar to specific section 
useEffect(() => {
  const handleScroll = () => {
    const aboutMeSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const uxSection = document.getElementById('ux');
    const reelsSection = document.getElementById('reels');
    const contactSection = document.getElementById('contact');

    const scrollY = window.scrollY;

    if (scrollY < aboutMeSection.offsetTop) {
      setActiveSection('about');
    } else if (scrollY < projectsSection.offsetTop) {
      setActiveSection('projects');
    }  else if (scrollY < uxSection.offsetTop) {
        setActiveSection('ux');
    } else if (scrollY < reelsSection.offsetTop + reelsSection.offsetHeight) {
      setActiveSection('reels');
    } else {
      setActiveSection('contact');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
 // Empty dependency array ensures the effect runs only once after the initial render

//typing animation
  useEffect(() => {
    const helloOptions = {
      strings: ['<span className="green-text"> {Hello}, </span>'],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      cursorChar: '|',
      contentType: 'html'
    };

    const passionOptions = {
      strings: [
        `<span className="green-text">I am passionate about building exceptional digital
         experience and specializing in bringing innovative ideas to life </span>`
        ], // Array of strings to be typed
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      startDelay: 700, // Delay before typing starts in milliseconds
      showCursor: true, // Show blinking cursor
      cursorChar: '|', // Character for cursor
      contentType: 'html', // 'html' or 'null' for plaintext
    };
  
    const helloTyped = new Typed(helloRef.current, helloOptions);
    const passionTyped = new Typed(passionRef.current, passionOptions);
    
    // Clean up on component unmount
    return () => {
      helloTyped.destroy();
      passionTyped.destroy();
    };
  }, []);


  return (
<>
  <Helmet>
  <title>Maria Stromova Portfolio - Home</title>
  <meta name="description" content="Website-portfolio of the Frontend developer, UX designer and Digital and Content Creator, Maria Stromova" />
  <meta name="keywords" content="portfolio, website, ux design, web design, frontend, digital, content creation, video, Maria Stromova" />
  </Helmet>

<div id="main"className="main-section">

<section id="hero" className="hero-section">
    <h4>
          <div className="typing" ref={helloRef}></div>
    </h4>
    <h2>I am Maria Stromova, </h2>

    <h3>a Frontend developer, UX designer, Digital Content and Video Creator </h3>
    <h4>
          <div className="typing" ref={passionRef}></div>
    </h4>

    <div id='contact-me' className="contact-button">
          <Link to="contact" smooth={true} duration={500}>
            {`{Contact Me}`}
          </Link>
     </div>
</section>


<section id="about" className="about-section">

  <h1 data-aos="zoom-in">{`{About}`}</h1>

  {matrixVisible && <div className="matrix-animation-container" onClick={handleMatrixClick}><ReactMatrixAnimation /></div>}

  <div id="about-me-grid" className="about-grid">

  <div className="grid-item"> 
  <img src="/assets/my-photo.jpeg" alt="my image" />
  </div>

  <div className="grid-item"> 
  <p>
  I'm a passionate and determined web developer, UX designer, digital content and 
  video  creator, and my journey to this point has been unexpectedly adventurous.
  I've had the incredible opportunity to travel extensively, living 
  in various countries and cities, experiencing diverse cultures, and 
  embracing the beauty of this world. My thirst for knowledge and 
  self-improvement has led me to complete two degrees and earn two diplomas.
  I've always been a curious soul, exploring different roles and professions
  in search of my true calling. Then, like a puzzle falling into place, 
  I discovered my passion for UX Design, Web Development and Digital creation.
  To me, UX design, web development, and digital content creation are magical because they blend art, 
  psychology, technology, and human interaction into something truly special. 
  It's about understanding users' needs and aspirations and translating them 
  into flawless digital journeys. I find inspiration in art, fashion, travel, 
  and, most importantly, people.
  </p>

  <div className="skills-container">
    
    <h5>Here are my recently acquired skills and technologies:</h5>
    <ul>
      <li>Figma (UX/UI)</li>
      <li>HTML5, CSS3, SASS</li>
      <li>React</li>
      <li>JavaScript (ES6+)</li>
      <li>Node.js, Express.js</li>
      <li>WordPress</li>
    </ul>
  </div>


    </div>

  </div>
</section>

<section id="projects" className="project-section">
      <h1>{`{Projects}`}</h1>

      <div id="projects-container" className="project-container">

      <div id="project-four" className="project-grid">
        <div>
        <img src="/assets/tablet-hotel-mockup.jpg" id="img-project" className="project-image" alt="hotel-app" />
        </div>

        <div className="project-text">
         <p>Alps and Ocean is the JS student project dedicated to developing a user-friendly single-page 
         web application catering to visitors seeking short-term accommodations in the scenic South 
         Island of New Zealand.</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
      </div>

       <div id="project-four" className="project-grid">
        <div>
        <img src="/assets/3.png" id="img-project" className="project-image" alt="colour-app" />
        </div>

        <div className="project-text">
         <p>Colour Me Beautiful NZ, a leading website, empowers individuals with personalized colour analysis,
           makeup classes, styling consultations across New Zealand (WordPress, React, PHP).</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkColourClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
      </div>

      <div id="project-four" className="project-grid">
        <div>
        <img src="/assets/Gal.png" id="img-project" className="project-image" alt="gallery-app" />
        </div>

        <div className="project-text">
         <p>Art Gallery Project - a one-page JavaScript app featuring works by famous artists.</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkGalleryClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
      </div>

      <div id="project-four" className="project-grid">
        <div>
        <img src="/assets/OGB.png" id="img-project" className="project-image" alt="OGB-bar-app" />
        </div>

        <div className="project-text">
         <p>The O.G.B - the user-friendly app is designed to provide customers with easy access to the menu, 
          streamlined order placement, and exclusive special offers (HTML, SASS).</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkBarClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
      </div>

      </div>
</section>


<section id="ux" className="ux-section">
<h1>{`{UX}`}</h1>

<div id="ux-container" className="ux-container">

<div id="project-four" className="project-grid">
        <div>
        <img src="/assets/Frame 10.png" id="img-project" className="project-image" alt="hotel-app" />
        </div>
        
        <img src="/assets/behance-50.png" alt="hotel-app"
         onClick={handleOpenUxLinkColourClick}
         className="link-behance"
         id="link-behance"
         style={{ cursor: 'pointer' }}
         />
      </div>

</div>
</section>



<section id="reels" className="video-section">
<h1>{`{Reels}`}</h1>
<div id="video-container" className="video-container">
      <Video />
    </div>
</section>


<section id="contact" className="contact-section">
<h1>{`{Contact}`}</h1>
<div id="contact-me" className="contact-me-section" >
    <h2>GET IN TOUCH!</h2>
<p>If you have an idea for a project,</p>
<p>don't hesitate to reach out via email!</p>

<div className="flower-container-home" ref={flowersRef}>
    <img src="/assets/pink-flower.png" alt="Pink Flower"/>
    <img src="/assets/pink-flower.png" alt="Pink Flower"/>
    <img src="/assets/pink-flower.png" alt="Pink Flower"/>
    <img src="/assets/pink-flower.png" alt="Pink Flower"/>
    <img src="/assets/pink-flower.png" alt="Pink Flower"/>
 </div>

    <button id='contact-me-button' className="hello-button" onClick={handleSayHelloClick}>
      {`{Say Hello}`}
      </button>


<div className="social-links-container" >
      <ul id='social'>
         <li>
            <Link to="git-hub-social" smooth={true} duration={500}>
            <img src="/assets/github-link.png" alt="news-app"
            onClick={handleOpenGitHubClick}
            className="icon-link"
            id="social-icon"
            style={{ cursor: 'pointer' }}
           />
            </Link>
          </li>

          <li>
            <Link to="linkedin-social" smooth={true} duration={500}>
            <img src="/assets/linkedin.png" alt="news-app"
            onClick={handleOpenLinkedinClick}
            className="icon-link"
            id="social-icon"
            style={{ cursor: 'pointer' }}
            />
            </Link>
          </li>

          <li>
            <Link to="insta-social" smooth={true} duration={500}>
            <img src="/assets/insta.png" alt="news-app"
             onClick={handleOpenInstaClick}
             className="icon-link"
             id="social-icon"
             style={{ cursor: 'pointer' }}
             />
            </Link>
          </li>

          <li>
            <Link to="insta-social" smooth={true} duration={500}>
            <img src="/assets/icons8-youtube-120-4.png" alt="news-app"
             onClick={handleOpenYoutubeClick}
             className="icon-link"
             id="social-icon"
             style={{ cursor: 'pointer' }}
             />
            </Link>
          </li>

          

          <li>
            <Link to="insta-social" smooth={true} duration={500}>
            <img src="/assets/icons8-behance-120-3.png" alt="news-app"
             onClick={handleOpenBehanceClick}
             className="icon-link"
             id="social-icon"
             style={{ cursor: 'pointer' }}
             />
            </Link>
          </li>

          </ul>
          </div>

          <FontAwesomeIcon icon={faRocket} id="rocket-icon" className="rocket-icon" onClick={scrollToTop} />

</div>

</section>
</div>
</>
  );
};

export default Home
