import Image from 'next/image';

export default function Home() {
  return (
    <div
      className='tvcom-bg min-h-screen flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat'
      style={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <div className='flex flex-col items-center mb-8'>
        <Image src='/logo.png' alt='TVCOM Sorocaba Logo' width={120} height={120} className='mb-4' />
        <h1 className='tvcom-title'>TVCOM</h1>
        <h2 className='tvcom-subtitle'>SOROCABA</h2>
        <h3 className='tvcom-channel'>CANAL 8 NET</h3>
      </div>
      <div className='tvcom-player-large flex items-center justify-center'>
        <button className='tvcom-play-btn' aria-label='Assistir ao vivo'>
          <svg width='96' height='96' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='32' cy='32' r='32' fill='#3A6EA5' />
            <polygon points='26,20 50,32 26,44' fill='#FFD600' />
          </svg>
        </button>
      </div>
    </div>
  );
}
