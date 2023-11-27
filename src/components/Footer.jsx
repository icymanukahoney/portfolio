import React from 'react';
//import React, { useState, useEffect, useRef} from 'react';
import { motion } from "framer-motion"


const Footer = () => {

  return (
  <div id="footer" className="footer-section"> 
    
    
    
    <div className="icon-container">
    <motion.div
        className="icon"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
      >
        <img src="/assets/white.png" alt="Paper Airplane Icon 4" />
      </motion.div>

      <motion.div
        className="icon"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
      >
        <img src="/assets/yellow.png" alt="Paper Airplane Icon 5" />
      </motion.div> 
      
      <motion.div
        className="icon"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
      >
        <img src="/assets/lightpink.png" alt="Paper Airplane Icon 2" />
      </motion.div>

      <motion.div
        className="icon"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
      >
        <img src="/assets/green.png" alt="Paper Airplane Icon 1" />
      </motion.div>

      <motion.div
        className="icon"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
      >
        <img src="/assets/pink.png" alt="Paper Airplane Icon 3" />
      </motion.div>
    </div>

    <div className="copyright"> &copy; Maria Stromova 2023 </div>

 </div>
  )
}

export default Footer
