import IsolationCards from "./subcomponents/cardIsolation";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function BackCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title=''
                    description= 'Build back better.'
                    videos={[
                      { url: 'https://www.youtube.com/embed/PAXkl-AdJFg?si=ixgP_z_-zBlbUaWt', title: 'Wide vs Thick' },
                      { url: 'https://www.youtube.com/embed/O94yEoGXtBY?si=pj1akGvV_vG59hag', title: 'Lat Dos and Donts' },
                      { url: 'https://www.youtube.com/embed/iPwcZ_cLvbE?si=3AeN7FMZS0X5Ae13', title: 'RP Lats' },
                      { url: 'https://www.youtube.com/embed/axoeDmW0oAY?si=2dh0Kq-107tf1gY7', title: 'Rowing Thickness' },
                      { url: 'https://www.youtube.com/embed/Awi0w5Xh1Mk?si=-0vKiWqcRTvr-X5a', title: 'RP Full Back' },
                    ]}
                    />
                </div>                             

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
