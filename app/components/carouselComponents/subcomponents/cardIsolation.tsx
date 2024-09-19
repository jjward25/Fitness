import React from 'react';

interface Video {
  url: string;
  title: string;
}

interface CardProps {
  title: string;
  description: string;
  videos: Video[];
}


const IsolationCards: React.FC<CardProps> = ({ title, description, videos }) => {
  return (
    <div className="relative w-full min-h-[250px] min-w-[350px] overflow-hidden rounded-xl shadow-lg">
      <div className="absolute bg-blue-300 inset-0 w-full h-full object-cover" />

      <div className="relative z-10 p-6 pt-4 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-70 text-white pb-24">
        <div className='h-1/2'/>
        <h2 className="z-20 text-lg font-bold">{title}</h2>
        
        <div className='flex flex-col mt-6 gap-y-4'>
          {videos.map((video, index) => (
            <div className='flex flex-col' key={index}>
              <p className='font-semibold text-sm text-neutral-200 mb-2'>{video.title}</p>
              <div className='rounded-xl overflow-hidden mx-auto'>
                <iframe
                    src={video.url}
                    frameBorder="0"
                    allowFullScreen
                  />
              </div>
            </div>  
          ))}
        </div>
        
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default IsolationCards;
