import React, { useState, useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ReactMatrixAnimation } from 'react-matrix-animation';

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

  const [matrixVisible, setMatrixVisible] = useState(true); 

  const [activeSection, setActiveSection] = useState('about'); // Default active section is 'about'

  const helloRef = useRef(null);
  const passionRef = useRef(null);

  const flowersRef = useRef(null);

// mail
  const handleSayHelloClick = () => {
    window.location.href = "mailto:msoftheworld@gmail.com";
  };

//matrix
const handleMatrixClick = () => {
  setMatrixVisible(false); // Set matrixVisible to false when the animation is clicked
};

// link to website hotel
const handleOpenLinkClick = () => {
  window.open('https://icymanukahoney.github.io/Summative2-hotel-app/', '_blank');
};

// link to git hub news project
const handleOpenGitHubNewsClick = () => {
  window.open('https://github.com/icymanukahoney/Formative-3.1', '_blank');
};

// link to git hub hotel project
const handleOpenGitHubHotelClick = () => {
  window.open('https://github.com/icymanukahoney/Summative2-hotel-app', '_blank');
};


// link to git hub Figure project
const handleOpenGitHubFigureClick = () => {
  window.open('https://github.com/icymanukahoney/FigureHead', '_blank');
};



// link to colour website 
const handleOpenLinkColourClick = () => {
  window.open('https://summative4-livid.vercel.app/', '_blank');
};

// link to git hub news project
const handleOpenGitHubColourClick = () => {
  window.open('https://github.com/icymanukahoney/Summative4', '_blank');
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
      const contactSection = document.getElementById('contact');

      if (window.scrollY < aboutMeSection.offsetTop) {
        setActiveSection('about');
      } else if (window.scrollY < projectsSection.offsetTop) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

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
<div id="main"className="main-section">

<section id="hero" className="hero-section">
    <h4>
          <div className="typing" ref={helloRef}></div>
    </h4>
    <h2>I am Maria Stromova</h2>

    <h3>Frontend developer and UX designer</h3>
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
  <p>I'm a passionate and determined UX designer and web developer, 
  and my journey to this point has been unexpectedly adventurous.
  I've had the incredible opportunity to travel extensively, living 
  in various countries and cities, experiencing diverse cultures, and 
  embracing the beauty of this world. My thirst for knowledge and 
  self-improvement has led me to complete two degrees and earn two diplomas.
  I've always been a curious soul, exploring different roles and professions
  in search of my true calling. Then, like a puzzle falling into place, 
  I discovered my passion for UX Design and Web Development.
  To me, UX Design and Web Development are magical because they blend art, 
  psychology, technology, and human interaction into something truly special. 
  It's about understanding users' needs and aspirations and translating them 
  into flawless digital journeys. I find inspiration in art, fashion, travel, 
  and, most importantly, people.</p>

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

      <div id="project-one" className="project-grid">
        <div>
        <img src="/assets/laptop-figure.jpg" id="img-project" className="project-image"
         alt="figure-app" />
        </div>

        <div className="project-text">
         <p>FigureHead is an online platform for passionate figurine enthusiasts, 
          providing a secure space for connection and trade. </p>
          </div>
          <img src="/assets/git-hub.png" alt="news-app"
         onClick={handleOpenGitHubFigureClick}
         className="link"
         id="git"
         style={{ cursor: 'pointer' }}
         />
      </div>

      <div id="project-two" className="project-grid">

        <div>
        <img src="/assets/tablet-hotel-mockup.jpg" id="img-project" className="project-image" alt="hotel-app" />
        </div>

        <div className="project-text">
         <p>Alps and Ocean is the student project dedicated to developing a user-friendly single-page 
         web application catering to visitors seeking short-term accommodations in the scenic South 
         Island of New Zealand.</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
         
         <img src="/assets/git-hub.png" alt="news-app"
         onClick={handleOpenGitHubHotelClick}
         className="link"
         id="git"
         style={{ cursor: 'pointer' }}
         />
      </div>

      <div id="project-three" className="project-grid">
        <div>
        <img src="/assets/laptop news.jpg" id="img-project" className="project-image" alt="news-app" />
        </div>

          <div className="project-text">
         <p>Smart News, a student project, offers real-time global weather updates, curated multilingual news, 
          and diverse content, including quotes and jokes from NewsAPI, WeatherAPI, Quotes Type Fit, and Official Joke.</p>
          </div>

          <img src="/assets/git-hub.png" alt="news-app"
         onClick={handleOpenGitHubNewsClick}
         className="link"
         id="git"
         style={{ cursor: 'pointer' }}
         />
      </div>

<div id="project-four" className="project-grid">

        <div>
        <img src="/assets/3.png" id="img-project" className="project-image" alt="colour-app" />
        </div>

        <div className="project-text">
         <p>Colour Me Beautiful NZ, a leading website, empowers individuals with personalized colour analysis,
           makeup classes, styling consultations across New Zealand.</p>
         </div>
        
        <img src="/assets/white-link.png" alt="hotel-app"
         onClick={handleOpenLinkColourClick}
         className="link"
         id="link"
         style={{ cursor: 'pointer' }}
         />
         
         <img src="/assets/git-hub.png" alt="news-app"
         onClick={handleOpenGitHubColourClick}
         className="link"
         id="git"
         style={{ cursor: 'pointer' }}
         />
      </div>

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
</div>
</section>
</div>
  );
};

export default Home
