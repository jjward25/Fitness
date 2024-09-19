import React from 'react';

interface Skill {
  url: string;
  title: string;
}

interface CardProps {
  title: string;
  description: any;
  variations: string;
  skills: Skill[];
  video:string;
}


const CompoundCards: React.FC<CardProps> = ({ title, description, skills, variations, video }) => {
  return (
    <div className="relative w-full min-h-[250px] min-w-[350px] overflow-hidden rounded-xl shadow-lg">
      <div className="absolute bg-cyan-500 inset-0 w-full h-full object-cover" />

      <div className="relative z-10 p-6 pt-4 w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-70 text-white">
        <div className='h-1/2'/>
        <h2 className="z-20 text-lg font-bold text-green-200">{title}</h2>
        <p className="z-20 mt-2 text-xs">{description}</p>
        <p className="z-20 mt-2 text-xs text-neutral-100"><b className='text-neutral-400'>Related Exercises: </b>{variations}</p>
        
        <div className='z-20 my-3 py-1 px-2 flex flex-row justify-start space-x-4 hover:bg-cyan-900 hover:rounded-xl hover:bg-opacity-70'>
          {skills.map((skill, index) => (
            <div className='rounded-2xl overflow-hidden border-2 border-black' key={index}>
            <img
              src={skill.url}
              alt={skill.title}
              className="w-8 h-8 object-cover hover:scale-105 cursor-pointer"
              title={skill.title}
            /></div>
          ))}
        </div>

        <div className='rounded-xl overflow-hidden'>
        <iframe
            src={video}
            frameBorder="0"
            allowFullScreen
          />
        </div>

      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default CompoundCards;
