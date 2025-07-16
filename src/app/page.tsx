'use client';

import Image from 'next/image';
import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const streamUrl = 'https://playerv.zcast.com.br/video/tvcomsoro/1';

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={`tvcom-bg min-h-screen flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat ${
        isPlaying ? 'py-4' : 'py-8'
      }`}
      style={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <div className={`flex flex-col items-center ${isPlaying ? 'mb-4' : 'mb-8'}`}>
        <Image 
          src='/logo.png' 
          alt='TVCOM Sorocaba Logo' 
          width={isPlaying ? 80 : 120} 
          height={isPlaying ? 80 : 120} 
          className='mb-4' 
        />
        <h1 className='tvcom-title'>TVCOM</h1>
        <h2 className='tvcom-subtitle'>SOROCABA</h2>
        <h3 className='tvcom-channel'>CANAL 8 NET</h3>
      </div>
      
      {isPlaying ? (
        <VideoPlayer streamUrl={streamUrl} onClose={handleClosePlayer} />
      ) : (
        <div className='tvcom-player-large flex items-center justify-center'>
          <button className='tvcom-play-btn' onClick={handlePlayClick} aria-label='Assistir ao vivo'>
            <svg width='96' height='96' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='32' cy='32' r='32' fill='#3A6EA5' />
              <polygon points='26,20 50,32 26,44' fill='#FFD600' />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
