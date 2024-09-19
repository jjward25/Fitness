import IsolationCards from "./subcomponents/cardIsolation";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ShoulderCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl md:pl-6 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:no-scrollbar">

                {/** Project */}
                <div className="max-w-[400px]">
                  <IsolationCards 
                    title=''
                    description= 'Basic trap-focused exercises.'
                    videos={[
                      
                      { url: 'https://www.youtube.com/embed/21lYP86dHW4?si=XxC9eTDXqGC22kIN', title: '3 Exercises' },
                      { url: 'https://www.youtube.com/embed/C6sYjDFuq9I?si=tCC-IpEaTHFqAwPh', title: 'Nippard Traps' },
                      { url: 'https://www.youtube.com/embed/k8IwhjE8rHQ?si=_3RdlIuo-xOshadY', title: 'Nippard Traps & Delts' },
                      { url: 'https://www.youtube.com/embed/XHsEUJso6zk?si=hWizrdr3jsjeZq3n', title: 'RP Shoulders' },
                      
                    ]}
                    />
                </div>

                             

            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
