
import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from './Button';
import './HeroSection.css';
function Landing() {
  return (
 
    
        <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1><Typewriter
              options={{
                strings: [
                  "Build your dreams"
                ],
                autoStart: true,
                loop: true,
              }}
            /></h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          USER LOGIN
        </Button>
         
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VC LOGIN
        </Button>
       
      </div>
    </div>
      
    
  );
}

export default Landing;
