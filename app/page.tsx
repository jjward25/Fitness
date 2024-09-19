import HumanBodySVG from "@/app/components/fitnessHuman";
import FaqAccordion from "./components/faqAccordion";
import TabbedComponent from "./components/exerciseTabs";
import ProgramCarousel from "./components/programCarousel";
import ExerciseVariants from "./components/exerciseTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-2 md:p-24 w-full h-full">
      {/** Page Title */}
      <h1 className="text-5xl font-semibold text-slate-800 mt-2 mb-10 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-black to-neutral-950 ">{`Fitness`}</h1>

      {/** Tier1 */}
      <div className="flex flex-col w-full h-full mt-12">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{`Tier 1: General Full Body Fitness`}</h1>
        <div className="bg-gradient-to-r from-purple-900 to-purple-300 h-[2px]"></div>

        {/** Tier1 ContentWrap */}
        <div className="p-4 mt-2 mx-auto">

          <div className="flex flex-row bg-neutral-100 rounded-xl p-3 pl-4 border border-neutral-300 shadow-md">
            
            <div className="flex flex-col md:max-w-[600px]">
              <p className="text-sm">{`This page is meant as a beginner's overview to full-body fitness, including links to exercises and information on exercise and program variations.`}</p>  
              <p className="text-sm mt-2">{`A well-rounded program will cover the full body in a way that maximizes your personal goals, so hopefully you leave with an understanding of how to train for good function.`}</p>
              <p className="text-sm mt-2">{`Now it's time - proceed and learn how to tailor your health according to my personal unscientific beliefs.`}</p>
            </div>

            <div className="hidden md:block rounded-xl overflow-hidden border-4 border-black w-32 ml-10 mr-5"><img
                src='/vanity.gif'
                alt='vanity'
                title='Vanity'
                className="object-cover" 
              /></div>

          </div>

          <p className="text-sm mt-8 font-semibold">{`Why and how you could work out different parts of the body:`}</p>

          <div className="w-full mt-8">
            <HumanBodySVG/>
          </div>

          {/** Tier1 Blurb */}
          <p className="text-sm">{`This doesn't cover everything of course.  Foot and ankle health is another overlooked area... Barefoot shoes and toe spacers can help loosen cramped feet from years in tight shoes, which `}<em>could</em>{` help with arch and plantar fasciitis issues 🤷`}</p>
          <p className="text-sm mt-3">{`Pair that with stretches on a slant board (or better, deficit jefferson curls), and now you're also loosening your tight calves and hamstrings and lower back. And hanging is great for your shoulders and ribs.`}</p>
          <p className="text-sm mt-3">{`The thing with stretching is, a lot of issues associated with muscle tightness, particularly in areas like the hip flexor that are key to mobility, are really strength issues. So, stretch (and breath deep when you stretch), but if you can use weights by hanging or grabbing a dumbell, then use weights.  `}<em className="font-semibold">{`Strengthening your body in the lenghtened position will actually improve your "flexibility" (range of motion) faster and more sustainably.`}</em></p>
          <p className="text-sm mt-3">{`You can do downward dog and stretch your hamstrings vertically but you still can't twist and you're not making strength gains that would help even more with posture or mobility.  It's like training arms by just pushing your palms together as hard and as long as you can. It's something, but it's not much.`}</p>
          <p className="text-sm mt-3">{`Instead, exercises like split squats, jefferson curls, and cable flies that emphasize strength through a full range of motion will make you both more flexible and more able to take advantage of that flexibility.`}</p>
          <p className="text-sm mt-3">{`Even passively, I'll often stretch my ribs by grabbing a dumbbell and holding it over my head to the far side to stretch the rib of the arm holding the dumbbell. It's a quick stretch because weight is pulling on it, and it provides more strength gains to maintain the stretched range of motion. Win win win.`}</p>
          <div className="rounded-3xl border-4 border-black bg-black mt-12">
          <img
              src='/djk.jpg'
              alt='Winning'
              title='Disc Jockey Khaled, Winning again'
              className="w-36 h-24 object-cover mx-auto" 
            /></div>
        </div>
      </div>

      {/** Tier2 */}
      <div className="flex flex-col w-full h-full mt-12">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{`Tier 2: Exercises and Exercise Variations`}</h1>
        <div className="bg-gradient-to-r from-purple-900 to-purple-300 h-[2px]"></div>
        
        {/** Tier2 ContentWrap */}
        <div className="p-4 mt-2 mx-auto w-full">
        
          <div className="flex flex-col bg-neutral-100 rounded-xl p-4  border border-neutral-300 shadow-md">
            <p className="text-sm">{`Building on the above, this section will link to different exercises I like and then share a few ways you could create variation in the exercises.`}</p>
            <p className="text-sm mt-2">{`What's important to know is that workouts are built on Sets and Reps.  For each exercise you'll do say 10 repetitions, and do that 3 times - with small breaks between each SET of 10 REPs. And you'll do those sets 1-4 times a week.`}</p>
            <p className="text-sm mt-2">{`Reps can also be a unit of time (jog for 20 mins, farmers carry for 5, or "AMRAP" (as many reps as possible) for 2 mins).  We'll get more into terms like AMRAP in the Exercise Variations table, and rep ranges right after that.`}</p>
          </div>
          
          <p className="text-sm mt-8 font-bold">{`Table of Exercises:`}</p>
          <div className="my-8"><TabbedComponent/></div>

          <p className="text-sm mt-8 font-bold">{`Table of Exercise Variations:`}</p>
          <div className="my-8"><ExerciseVariants/></div>
          
          {/** Tier2 Blurb */}
          <p className="text-sm mt-4 font-bold"></p>

        </div>
      </div>

      {/** Tier3 */}
      <div className="flex flex-col w-full h-full mt-12">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{`Tier 3: Program Variations`}</h1>
        <div className="bg-gradient-to-r from-purple-900 to-purple-300 h-[2px]"></div>
        
        {/** Tier3 Blurb */}
        <div className="mt-4 flex flex-col bg-neutral-100 rounded-xl p-4 border border-neutral-300 shadow-md">
          <p className="text-sm">{`IMO, a simple push/pull method is a great way to get started and learn basic form and function for different muscles and exercises.  As you work the program you'll find the right rep/effort mix for your strength and growth goals.`}</p>
          <p className="text-sm mt-4">{`The main reason I like push/pull is because it promotes balance from the start.  I advocate for mixing in single-leg pistol squats, RDLs and dumbbell work to maintain a left-right balance, but before all that is a simple push-pull.`}</p>
          <p className="text-sm mt-4">{`Your quads and hamstrings should be strong together. Your back and chest should be strong together. Push/pull gets at this and also accounts for the need to train your back and chest horizontally and vertically (Rows & Bench, Pull-ups & Pull-downs/Presses). If you have no goal in mind, start here.`}</p>
        </div>

        {/** Tier3 Program Accordion */}
        <div className="py-4 w-full">
          <ProgramCarousel/>
        </div>

      </div>

      {/** Tier4 */}
      <div className="flex flex-col w-full h-full mt-12">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{`Tier 4: FAQ`}</h1>
        <div className="bg-gradient-to-r from-purple-900 to-purple-300 h-[2px]"></div> 
        
        {/** Tier4 ContentWrap */}
        <div className="py-4 w-full">
          <FaqAccordion/>          
        </div>
      </div>

    </main>
  );
}

