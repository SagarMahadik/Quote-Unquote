import React, { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

const PeacefulMusic = () => {
  const [musicIndex, setMusicIndex] = useState(0);
  const musicUrls = [
    'https://res.cloudinary.com/antilibrary/video/upload/v1619637025/Music/Fragile-Lo-Fi-Chill-Melancholic-Music_gohgoh.mp3',
    'https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/rf8-IYuoBk2w8qc9h/audioblocks-wandering_rN4hiZj2r_NWM.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619637257/Music/Monplaisir_-_18_-_Action_r1bofm.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619636354/Music/keys-of-moon-white-petals_porhzf.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029504/Music/Almost-Bliss_nff9tq.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029486/Music/herbal-tea_nn106v.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029475/Music/ron-gelinas-chillout-lounge-slow-grind_qblkts.mp3',
    'https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/HNxwBHlArk43bm5tw/audioblocks-pocket_BBsDuf0OI_NWM.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620029459/Music/audionautix-trippin-coffee_oclxv3.mp3',
    'https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/HNxwBHlArk43bm5tw/audioblocks-violet-clouds_BK-ne2df8_NWM.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620237842/Music/Warm-Memories-Emotional-Inspiring-Piano_bmbbm5.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620470263/Music/ron-gelinas-chillout-lounge-where-will-i-go_s9frts.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620470771/Music/precious-memories_zxsfox.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620470771/Music/Eternal-Hope_otjs3e.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620470770/Music/inossi-sunset-eyes_gg1kad.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1620470263/Music/ron-gelinas-chillout-lounge-where-will-i-go_s9frts.mp3',
    'https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BmTqpuFhIkb43hfs2/audioblocks-calm-relaxing-piano_B7BeiumyD_NWM.mp3',
    'https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/rKLwfKUpUkbi7gbov/audioblocks-afternoon-walk_bpm-93_HvCb9hYNw_NWM.mp3'
  ];

  useEffect(() => {
    selectRandomMusic();
  }, []);

  const selectRandomMusic = () => {
    let randomIndex = generateRandomInteger(1, musicUrls.length - 1);
    setMusicIndex(randomIndex);
  };

  return (
    <div>
      <ReactHowler
        src={`${musicUrls[musicIndex]}`}
        playing={true}
        onEnd={selectRandomMusic}
        volume={1.0}
      />
    </div>
  );
};

export default PeacefulMusic;
