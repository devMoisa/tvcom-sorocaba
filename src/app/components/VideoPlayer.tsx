'use client';

import { useState, useEffect } from 'react';

interface VideoPlayerProps {
  streamUrl: string;
  onClose?: () => void;
}

export default function VideoPlayer({ streamUrl, onClose }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleError = () => {
    setError('Erro ao carregar o stream. Tente novamente.');
    setIsLoading(false);
  };

  return (
    <div className='tvcom-player-large'>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-2xl'>
          <div className='text-white text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4'></div>
            <p>Carregando stream...</p>
          </div>
        </div>
      )}

      {error && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-2xl'>
          <div className='text-white text-center p-6'>
            <p className='text-red-400 mb-4'>{error}</p>
            <button onClick={() => window.location.reload()} className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>
              Tentar Novamente
            </button>
          </div>
        </div>
      )}

      {/* {onClose && (
        <button onClick={onClose} className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all' aria-label='Fechar player'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M18 6L6 18M6 6L18 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      )} */}

      <iframe src={streamUrl} className='w-full h-full rounded-2xl' frameBorder='0' allowFullScreen allow='autoplay; fullscreen' onLoad={() => setIsLoading(false)} onError={handleError} title='TVCOM Sorocaba - Canal 8 NET' />
    </div>
  );
}
