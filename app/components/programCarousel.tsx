interface ProgramItemProps {
  title: any;
  description: any;
  video:any;
}

const ProgramItem: React.FC<ProgramItemProps> = ({ title, description, video }) => {
  return(
  <div className="max-w-[400px]">
    <div className="relative w-full min-h-[250px] min-w-[350px] overflow-hidden rounded-xl shadow-lg">
      <div className="absolute bg-cyan-500 inset-0 w-full h-full object-cover" />

      <div className="relative z-10 p-6 pt-4 w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-70 text-white">
        <div className='h-1/2'/>
        <h2 className="z-20 text-lg font-bold text-green-200">{title}</h2>
        <p className="z-20 mt-2 text-xs">{description}</p>
      
        <div className='overflow-hidden flex justify-center mt-4'>
        <iframe
            src={video}
            frameBorder="0"
            allowFullScreen
          />
        </div>

      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  </div>
  )
}

const ProgramCarousel: React.FC = () => {
  const items = [
    {
      title: "Push - Pull",
      description: (<div className="">
                  <p>Learn the basics.</p>
                </div>),
      video:'https://www.youtube.com/embed/qVek72z3F1U?si=DS4rLzYW51Ukj3aG'
    },
    {
      title: "Full Body",
      description: (<div className="px-2">
        <p className="text-xs">{`Another semi-beginner friendly option, full body workouts can be split in many ways for flexible schedules.`}</p>
        <p className="text-xs mt-2">{`You can do a lot of isolation work (flies and shoulder raises), short, compound-focused workouts (deadlift, squat, bench, home), or a mix, or something else.`}</p>
        <p className="text-xs mt-2">{`A balanced approach between compounds and isos allows for customization.  Here's a sample:`}</p>
        
        <div className="w-full min-h-0.5 border-t border-t-cyan-400 mt-4"/>

        <div className="flex flex-col md:grid md:grid-cols-2 mb-4">

        <ol className="text-xs font-semibold mt-4 md:mx-auto">{`Heavy Legs (Compounds), Light Upper (Isos)`}
          <li className="ml-6 text-xs font-normal list-decimal mt-2">Squat</li>
          <li className="ml-6 text-xs font-normal list-decimal">Deadlift</li>
          <li className="ml-6 text-xs font-normal list-decimal">Delt Cable Flies</li>
          <li className="ml-6 text-xs font-normal list-decimal">Dumbbell Flies (deep stretch)</li>
          <li className="ml-6 text-xs font-normal list-decimal">Military Press</li>
          <li className="ml-6 text-xs font-normal list-decimal">Medicine Ball Rotations or Farmers Carry</li>
        </ol>

        <ol className="text-xs font-semibold mt-4 md:mx-auto">{`Light Legs (Isos), Heavy Upper (Compounds)`}
            <li className="ml-6 text-xs font-normal list-decimal mt-2">Split Squat (deep stretch)</li>
            <li className="ml-6 text-xs font-normal list-decimal">Single-leg Deadlifts</li>
            <li className="ml-6 text-xs font-normal list-decimal">Incline Bench</li>
            <li className="ml-6 text-xs font-normal list-decimal">Dips</li>
            <li className="ml-6 text-xs font-normal list-decimal">Rows</li>
            <li className="ml-6 text-xs font-normal list-decimal">Pull-downs or Pull-ups</li>
        </ol>
        
        </div>
        </div>),
      video:'https://www.youtube.com/embed/eMjyvIQbn9M?si=_tWgQp2jh8EJWdSD'
    },
    {
      title: "Bodybuilding",
      description: (<div className="">
                  <p>{`Lifting for size and aesthetics.  Targeting specific muscles, sometimes for insane amounts of reps in order to get size gains.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=OPEDjl88P-4" title="Power Building" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is Jeff Nippard on "Power Building".`}</p>
                </div>),
      video:'https://www.youtube.com/embed/JEuQMsfvPYg?si=9L3Qb_HacSHZeJgE'
    },
    {
      title: "Power Lifting",
      description: (<div className="">
                  <p>{`Lifting for power, regardless of size gains.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=4VJZITGR5yU" title="Anatoly" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is a famous stealth power lifter.`}</p>
                </div>),
      video:'https://www.youtube.com/embed/phDV1Y-XNwU?si=IBuhXvnVssVOUXsy'
    },
    {
      title: "Crossfit / Hiit",
      description: (<div className="">
                  <p>{`For active lifestyles.  This type of exercise emphasizes heart rate and can be great for cardio and heart health. They can also be packed into 20 minutes.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=gzh1Qd2hE0M" title="Crossfit Power" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is a cross-fit champion destroying a bodybuilding workout.`}</p>
                  <a href="https://www.youtube.com/embed/7W0-jAxeTNs?si=oNB0Raievnx6nAGE" title="Jocko Willink" className="not-italic text-cyan-500 hover:text-yellow-500">{`And here is why Navy SEALs train crossfit.`}</a>
                </div>),
      video:'https://www.youtube.com/embed/VWQji1f7EOU?si=VCfgDo7wyAwRGQom'
    },
    {
      title: "Calesthenics",
      description: (<div className="">
                  <p>{`Basically Gymnastics. Training that provides big-but-not-maximum strength and hypertrophy gains while emphasizing athletic qualities like strong legs and shoulders and rotational ability.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=4VJZITGR5yU" title="Anatoly" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is a famous stealth power lifter.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=UO2TGmsdUbc&t=1002s" title="Calesthenics Health" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is Dr. Mike on Calesthenics.`}</p>
                </div>),
      video:'https://www.youtube.com/embed/7J3RaEYTPvM?si=mE2uC9nxKMJ7rWG3'
    },
    {
      title: "Knees Over Toes",
      description: (<div className="">
                  <p>{`A personal favorite. The founder had major knee injuries then developed a great mobility program with an emphasis for anyone who's struggled with knee pain or wants to jump high.  Ben includes progressions so anyone can use his program.`}</p>
                  <p><a href="https://www.youtube.com/watch?v=GcpTEyAQHMg" title="Crossfit Power" className="not-italic text-cyan-500 hover:text-yellow-500">{`As a bonus: Here`}</a>{` is Ben on reversing-out shoulder pain.`}</p>
                </div>),
      video:'https://www.youtube.com/embed/S7642PtpFLA?si=RYYbPOFDrkk3FKJ5'
    },
  ];

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
          {/** Project Container */}
          <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">
            {items.map((item, index) => (
              <ProgramItem key={index} title={item.title} description={item.description} video={item.video} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProgramCarousel;
