import React, { useState } from 'react';
import ReactHowler from 'react-howler';

const PeacefulMusic = () => {
  const [musicIndex, setMusicIndex] = useState(0);

  const musicUrls = [
    'https://res.cloudinary.com/antilibrary/video/upload/v1619637025/Music/Fragile-Lo-Fi-Chill-Melancholic-Music_gohgoh.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619636354/Music/keys-of-moon-white-petals_porhzf.mp3',
    'https://res.cloudinary.com/antilibrary/video/upload/v1619636354/Music/keys-of-moon-white-petals_porhzf.mp3'
  ];
  return (
    <div>
      <ReactHowler
        src={`${musicUrls[musicIndex]}`}
        playing={true}
        onEnd={() => setMusicIndex(musicIndex + 1)}
        volume={0.5}
      />
    </div>
  );
};

export default PeacefulMusic;
