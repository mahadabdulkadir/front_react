import React, { useState } from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import Work from '../Work/Work'; // Import the Work component

const Header = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = document.getElementById('myVideo');
    if (video) {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
    <div className='app__header app__flex'>
      <div className="video-container">
      <motion.video 
  key={images.movie} 
  className="home-video" 
  autoPlay 
  muted 
  loop 
  id="myVideo"
  playsInline  // Add this
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <source src={images.movie} type="video/mp4" />
  Your browser does not support the video tag.
</motion.video>


        <div className="home-content">
          <h1>Split Second Production</h1>
          
        </div>

        {/* Render the Work component here */}
       
      </div>
    

    </div> 
      <div class="storytelling-text">
  We are in the business' of storytelling
</div>
    <Work />
    </>
  );
}

export default AppWrap(Header, 'Home');
