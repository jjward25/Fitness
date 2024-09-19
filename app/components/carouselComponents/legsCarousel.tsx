import IsolationCards from "./subcomponents/cardIsolation";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function LegCarousel() {

  return (
    <section>
      
      <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Legs'
                    description= ''
                    videos={[
                      { url: 'https://www.youtube.com/embed/H6mRkx1x77k?si=aenH78NlSrrprTET', title: 'Nippard Legs' },
                      { url: 'https://www.youtube.com/embed/OUwWnl1OX8U?si=68C-Ir-ucIvwziUC', title: 'RP Legs' },

                      { url: 'https://www.youtube.com/embed/kWJlmdkyzfs?si=AHDQGylbxiSx7SMy', title: 'RP Legs Intense' },
                      { url: 'https://www.youtube.com/embed/Vb4Pn-zsFGc?si=wb5wkVGT86udZzUm', title: 'KOT Split Squats' },

                      { url: 'https://www.youtube.com/embed/UzczU-Ihu0w?si=d-y_RcX0TnVCp77I', title: 'KOT Beginner' },
                      { url: 'https://www.youtube.com/embed/UzczU-Ihu0w?si=d-y_RcX0TnVCp77I', title: 'KOT Mobility' },
                    ]}
                    />
                </div>    

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Quads'
                    description= ''
                    videos={[
                      { url: 'https://www.youtube.com/embed/vdHYj7iwNRE?si=2K_0Jsxbra3-poe7', title: 'RP Quads' },
                      
                      
                    ]}
                    />
                </div>  

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Hamstrings'
                    description= ''
                    videos={[
                      { url: 'https://www.youtube.com/embed/0a_fVS2s4Ho?si=dLLxAloG3pYp92Wr', title: 'Nippard Hamstrings' },
                    ]}
                    />
                </div>    


                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title='Calves'
                    description= ''
                    videos={[
                      { url: 'https://www.youtube.com/embed/21inrjhoFkQ?si=Thak2buQNHRFdvlg', title: 'Nippard Calves' },
                    ]}
                    />
                </div>                        

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
