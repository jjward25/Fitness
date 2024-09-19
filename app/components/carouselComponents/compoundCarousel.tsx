import CompoundCards from "./subcomponents/cardCompounds";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function CompoundCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                <CompoundCards 
                    title='Back Squats'
                    description= 'Classic squat. Hits most major leg groups, including hamstrings and glutes. Superset with calf raises, then run half a mile on your toes to hit the soleus muscle under your standing calf muscles for a simple full leg workout.'
                    variations="Front Squat (more quad+core), Low-back Squat (more glute focus), Goblin Squat (mobility focus), Pistol Squat (left/right balance)"
                    skills={[
                        { url: '/legs.png', title: 'Quads' },
                        { url: '/ass.png', title: 'Glutes' },
                        { url: '/core.png', title: 'Core & Stability' },
                        { url: '/mobility.png', title: 'Mobility' },
                      ]}
                    video ='https://www.youtube.com/embed/sdeQjm7avi8?si=azl1y2JirSiSRc5A'
                    />
                </div>

                {/** Project */}
                <div className="max-w-[400px]">
                <CompoundCards 
                    title='Bench / Push Ups'
                    description= 'The classic upper body compound. I usually do incline bench to work more on the front delts than flat bench.'
                    variations="Incline/Decline (upper/lower chest emphasis), Smith Machine (strict form), Dumbbells (left/right balance)"
                    skills={[
                        { url: '/chest.png', title: 'Chest' },
                        { url: '/back.png', title: 'Back' },
                        { url: '/shoulders.png', title: 'Shoulders' },
                        { url: '/arms.png', title: 'Tris & a lil Bis' },
                      ]}
                    video ='https://www.youtube.com/embed/A0NBCkpYatQ?si=V6fwin2oJLU9pL5t'
                    />
                </div>

                {/** Project */}
                <div className="max-w-[400px]">
                <CompoundCards 
                    title='Deadlift'
                    description= 'Probably the best lift for you. Sedentary life kills the hamstrings and glutes, which this exercise specializes in. Start light.'
                    variations="Stiff-leg (upper glute), RDLs (left-right stability), Jefferson Curls (erectors emphasis), Good Mornings (low back emphasis), Deficit Deadlifts (range of motion)"
                    skills={[
                        { url: '/legs.png', title: 'Hamstrings' },
                        { url: '/ass.png', title: 'Glutes' },
                        { url: '/core.png', title: 'Core & Stability' },
                        { url: '/mobility.png', title: 'Mobility' },
                        { url: '/back.png', title: 'Back (erectors)' },
                      ]}
                    video ='https://www.youtube.com/embed/_pxX2gq5t4g?si=l7F8UCgpHP5RVkm8'
                    />
                </div>

                {/** Project */}
                <div className="max-w-[400px]">
                <CompoundCards 
                    title='Dips'
                    description= 'A good balance to any vertical press for more balanced shoulders and pecs.'
                    variations="Tri Pull-downs, Close-grip Decline Bench, Underhand bench"
                    skills={[
                        { url: '/chest.png', title: 'Chest' },
                        { url: '/shoulders.png', title: 'Shoulders' },
                      ]}
                    video ='https://www.youtube.com/embed/yN6Q1UI_xkE?si=rQi0I58676DbYrz3'
                    />
                </div>

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
