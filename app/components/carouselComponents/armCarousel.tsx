import IsolationCards from "./subcomponents/cardIsolation";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ArmCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Biceps'
                    description= 'Basic bicep-focused exercises.'
                    videos={[
                      { url: 'https://www.youtube.com/embed/wNeiLSEwTHk?si=qhTOg4JLFF7XwXVz', title: 'Bicep Curl Variations' },
                      { url: 'https://www.youtube.com/embed/rigzbHWbllM?si=WSnj3hO2S0L_3sFw', title: 'Pull-ups for Biceps' },
                    ]}
                    />
                </div>

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Triceps'
                    description= 'Basic tricep-focused exercises.'
                    videos={[
                      { url: 'https://www.youtube.com/embed/popGXI-qs98?si=z1uKafDbJaUMeGMM', title: 'Tricep Info' },
                    ]}
                    />
                </div>

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Forearms + Grip'
                    description= 'Forearm-focused exercises.'
                    videos={[
                      { url: 'https://www.youtube.com/embed/pIqw6-WcPeE?si=dXntHvH03eIse2au', title: 'Bench Press Form' },
                    ]}
                    />
                </div>                

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
