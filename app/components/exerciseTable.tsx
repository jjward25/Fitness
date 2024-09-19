export default function ExerciseVariants() {
    return (
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12">Variant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-6/12">Description</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">


                {/**Row 0 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">Basics Review</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`Compounds: exercises that use multiple muscle groups.  This means no single muscle is being strained to its max (typically). Specifically training one muscle or targeted area would be an Isolation exercise.`}` </td>
                </tr>
                {/**Row 1 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">Pyramid Structure</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`A program where you increase weight as you do more sets. Some people do a reverse pyramid or flat sets. `}<a href="https://www.youtube.com/shorts/Pf_fz2aQpyg" className="text-cyan-800 hover:text-yellow-800 font-semibold">Here</a>{` is Jeff Nippard with more.`}` </td>
                </tr>

                {/**Row 2 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">Supersets</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`Doing sets of two different exercises between rests, if you rest.  Usually done as a time saving exercise with two non-related musclegroups so you can still get max effort out of each. Also helpful as a finishing round at the end of an exercise with two related Isolated muscle exercises.`}</td>
                </tr>

                {/**Row 3 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">AMRAP</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`Popular with HIIT and Crossfit programs, AMRAP involves doing as many reps as you can for a given period of time.  This is good when you're focused on cardio and stamina.`}</td>
                </tr>

                {/**Row 4 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">MYO-Rep Match</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`MYO Reps also involve maxing out.  You do one set to failure, and then no matter what your next set has to reach the same volume.  This may mean re-racking and finishing a few more reps.`}<a href="https://www.youtube.com/watch?v=V71TGRQaLRs" className="text-cyan-800 hover:text-yellow-800 font-semibold">{`Here`}</a>{` is Dr. Mike with more.`}</td>
                </tr>

                {/**Row 5 */}
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 w-2/12 align-top font-semibold">Lengthened Partials</td>
                    <td className="px-6 py-4 text-sm text-gray-900 w-6/12 align-top max-w-xs break-words">{`Doing Lengthened Partials means doing a less-than-full-range-of-motion on your exercises, but instead of doing it the lazy way, only doing the parts where the stretch is deepest.  This could be good for building muscle size.  `}<a href="https://www.youtube.com/watch?v=u6cDPCCbnyc&t=779s" className="text-cyan-800 hover:text-yellow-800 font-semibold">{`Here`}</a>{` is Dr. Mike with more.`}</td>
                    
                </tr>
                
                </tbody>
            </table>
            </div>
    )}