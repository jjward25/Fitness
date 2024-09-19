import IsolationCards from "./subcomponents/cardIsolation";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ChestCarousel() {

  return (
    <section>
      
      <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title=''
                    description= 'Basic chest-focused exercises.'
                    videos={[
                      { url: 'https://www.youtube.com/embed/BTxPU2AhHfU?si=8srd-idPsFPZ8snM', title: '5 Chest Exercises' },
                      { url: 'https://www.youtube.com/embed/wDr-fxhq778?si=OVzU8n0W1ZnVWbtT', title: 'Dumbbell Chest Exercises' },
                      { url: 'https://www.youtube.com/embed/vCNONR6unm8?si=yhvuYg24YdxdeZQv', title: 'Bodyweight Chest Exercises' },
                      
                    ]}
                    />
                </div>
           

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
