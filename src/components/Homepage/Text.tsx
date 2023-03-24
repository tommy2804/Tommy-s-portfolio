import React from 'react';
import './homepage.css';
import Typewriter from 'typewriter-effect';

function Text() {
  return (
    <Typewriter
      options={{
        strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Text;
