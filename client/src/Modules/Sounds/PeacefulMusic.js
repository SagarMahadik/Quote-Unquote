import React, { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

const PeacefulMusic = () => {
  const [musicIndex, setMusicIndex] = useState(0);
  const musicUrls = [
    'https://res.cloudinary.com/antilibrary/video/upload/v1619637025/Music/Fragile-Lo-Fi-Chill-Melancholic-Music_gohgoh.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619637257/Music/Monplaisir_-_18_-_Action_r1bofm.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619636354/Music/keys-of-moon-white-petals_porhzf.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029504/Music/Almost-Bliss_nff9tq.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029486/Music/herbal-tea_nn106v.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029475/Music/ron-gelinas-chillout-lounge-slow-grind_qblkts.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029459/Music/audionautix-trippin-coffee_oclxv3.mp3'
  ];
  useEffect(() => {
    selectRandomMusic();
  }, []);

  const selectRandomMusic = () => {
    let randomIndex = generateRandomInteger(1, musicUrls.length - 1);
    setMusicIndex(randomIndex);
    console.log(randomIndex);
  };

  return (
    <div>
      <ReactHowler
        src={`${musicUrls[musicIndex]}`}
        playing={true}
        onEnd={() => selectRandomMusic}
        volume={0.5}
      />
    </div>
  );
};

export default PeacefulMusic;
