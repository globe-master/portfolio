import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ['MERN Stack Developer', 'Backend Developer', 'NFT Experienced', 'Continously Learning'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
