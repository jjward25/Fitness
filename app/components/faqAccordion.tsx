"use client"
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600 hover:bg-gray-800">
      <button
        className="flex justify-between items-center w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-180" : ""
          } text-cyan-400`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 text-black bg-neutral-300 border-t border-cyan-400">
          {content}
        </div>
      )}
    </div>
  );
};

const FaqAccordion: React.FC = () => {
  const items = [
    {
      title: "Set Building Basics -- The Relationship Between Sets, Reps and Effort:",
      content: (<div className="px-4">                  
                  <p className="text-sm">{`Typically, anywhere betwen 6-30 reps is good for activating the muscles enough to trigger some <em className="not-italic text-cyan-800 cursor-help" title="Muscle growth, size (not necessarily strength)">hypertrophy</em>. How hard you work on each rep and set will do more to determine your actual strength gains.  Higher rep ranges are good for encouraging mind-muscle connection and preserving your joints while still exhausting the muscle, lower ranges skew more towards strength gains.`}</p>
                  <p className="text-sm mt-4">{`One common practice is for lifters to take a day to find their "1-rep Max" - the most they can do, all-out, for one rep.  Then they'll calculate their working sets for the next several weeks off of that.`} <em className="not-italic text-cyan-800 cursor-help" title="RIR are the number of reps with good form you have left in you when you finish your sets.  Typically you want to aim for less than 5 RIR regardless of if you're going higher-rep lower-weight or vice versa.">{`Reps-in-Reserve (RIR)`}</em>{` is another growing method for gauging effort.`}</p>
                  <p className="text-sm mt-4">{`These will be helpful concepts as you pick a program and begin to personalize it, just remember to always maintain strict form. Pushing more weight with sub-optimal form often leads to problems and plateauing gains.`}</p>
                </div>),
    },
    {
      title: "Progression & Injury Prevention:",
      content: (<div className="px-4">
                  <p className="text-sm">{`People don't start out benching 225lbs.  Do bodyweight exercises, focus on form, use bands or machines...  Whatever you have to do to build a foundation based on good form, do it.  It's the only way to maximize potential gains and minimize injuries.`}</p>
                  <p className="text-sm mt-4">{`The other key factor for injuries is maintaining balance.  Quads that can pull with high force can over-tax and yank on tight, weak hamstrings - so focus on building a solid, balanced base without worrying about the weight.  Dumbells can be great for maintaing left-right balance - just make sure you also work in RDLs and split squats to keep the balance in your lower body as well.`}</p>
                  <p className="text-sm mt-4">{`Finally, try and get a good stretch on all or most lifts, with slower `}<em className="not-italic text-cyan-800 cursor-help" title="the lowering part when you bench press">eccentrics</em> and athletic <em className="not-italic text-cyan-800 cursor-help" title="the pushing part when you bench press">concentrics</em>{` to build strength through a full range of motion.  If you're working to about less than 5 RIR and keeping a good diet, the gains will come.`}</p>
                  </div>),
    },
    
  ];

  return (
    <div className="w-full mt-4 mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FaqAccordion;
