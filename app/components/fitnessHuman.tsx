'use client'

import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type BodyPart = 'Legs' | 'Hips' | 'Core' | 'Chest' | 'Shoulders' | 'Arms' | 'Head'

const bodyPartColors: Record<BodyPart, string> = {
  Legs: '#FF6B6B',
  Hips: '#4ECDC4',
  Core: '#45B7D1',
  Chest: '#FFA07A',
  Shoulders: '#98D8C8',
  Arms: '#F9ED69',
  Head: '#FFFFFF'
}

const bodyPartDesc: Record<BodyPart, any> = {
  Legs: (
    <div>
      <p className="mt-2 text-xs text-gray-500">{`Legs for Life. Never skip leg day.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`If you do nothing else, run to keep your quads and hammies somewhat active. If you sit all day your hamstrings and glutes are probably dead.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`By that I mean `}<em className='font-semibold'>run</em>{`, not jog.  Feel your hip flexors as you lift your leg on your strides, feel your hamstrings and quads as you extend and push off every step.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`It could be 60% speed and a quarter-mile to start, but emphasize the right motion and mind-muscle connection. Bonus: run on your toes in barefoot shoes.`}</p>
    </div>
  ),
  Hips: (
    <div>
      <p className="mt-2 text-xs text-gray-500">{`This section is to make a distintion between stability (core) and mobility (hips). Both are key for longevity, getting out of your seat, picking up kids, etc.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`Deadlifts and Jefferson curls are king for strength and stability. These build up the legs and erectors which will massively improve posture and pain.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`Split squats are great for mobility. Focusing on depth and firing your glutes and quads to build up hip strength that will help keep you upright.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`Sissy squats are great for lateral mobility (cutting in sports), and 90/90 and couch stretches are great supplements. And, of course running.`}</p>
      <p className="mt-2 text-xs text-gray-500">{`Dynamism matters.  Farmer's walks won't help much with mobility but will build full-body stability. Light jogs can help loosen hips and shoulders and ribs.  Dynamic sports add spinal flexion and new angles/range.`}</p>
    </div>
  ),
  Core: (<div>
          <p className="mt-2 text-xs text-gray-500">{`Core exercises help stabilize your body, but with good form the core doesn't need a ton of iso work.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`Often cardio, deadlifts, and overall good form meets 80% of your needs, meaning abs and erectors. Especially if you're doing compound exercises or stability work (RDLs, Lateral Lunges).`}</p>
          <p className="mt-2 text-xs text-gray-500">{`Otherwise, leg raises and split squats will hit neglected hip flexors for more upright walking posture - and you should include rotational work.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`Spinal rotation is your friend; increasing and strengthening your spine and back's range of motion with medicine ball obliques will reduce pain.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`*I like to mix Jefferson curls and deficit deadlifts, usually doing 2 sets of each to emphasize both range of motion and strength in the lower back.`}</p>
        </div>),
  Chest: (<div>
            <p className="mt-2 text-xs text-gray-500">{`(and back) The chest is often over-emphasized - in reality, you probably pull more often than you push.`}</p>
            <p className="mt-2 text-xs text-gray-500">{`Mostly, you just want your chest to balance your back strength and look good. I do incline bench for a good shelf and flies for a deep, activating stretch (and dips for lower chest but mostly shoulders).`}</p>
            <p className="mt-2 text-xs text-gray-500">{`The back is much more important and should be trained horizontally (rows) and vertically (pull downs, military press), with slow eccentrics to work the back up-down-front-and-back.`}</p>
            <p className="mt-2 text-xs text-gray-500">{`The back protects your spine and should be strong and flexible, including with rotation. A strong upper body routine can also loosen tight ribs, increasing oxygen intake, which has many benefits.`}</p>
          </div>),
  Shoulders: (<div>
                <p className="mt-2 text-xs text-gray-500">{`Easily the most underrated group. Unsung heros for posture, calesthenics, and gymnastics... I even tilt my chest workout towards shoulders by only doing incline bench for upper chest and dips for lower chest.`}</p>
                <p className="mt-2 text-xs text-gray-500">{`Shoulders are complex, with front, side and rear delts each having components of their own that can be targeted individually.`}</p>
                <p className="mt-2 text-xs text-gray-500">{`For that reason, range of motion is just as important as strength training in the shoulder region. Cables are great, and so are compounds like deep dips and controlled military press for big motions that emphasize shoulders but work with everything.`}</p>
              </div>),
  Arms: (<div>
          <p className="mt-2 text-xs text-gray-500">{`Easily the most over-rated group...  Girls are basically the only reason to do curls.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`You pick things up with your legs and back, not your biceps.  The contractions of your arm is not very functional in reality. It just looks good.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`As such, I do not train biceps independently except to use an underhand grip on pull-ups sometimes.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`Triceps help round out the arm shape. Working in a close-grip bench set or tri-pulldowns after a bench set to isolate them helps build overall arm size.`}</p>
          <p className="mt-2 text-xs text-gray-500">{`Farmers carries and other work on forearms and grip are great and also much more functional.`}</p>
        </div>),
  Head: <p className="mt-2 text-xs text-gray-500">Reed more buks</p>
}

export default function HumanBodySVG() {
  const [hoveredPart, setHoveredPart] = useState<BodyPart | null>(null)

  const handleMouseEnter = (part: BodyPart) => {
    setHoveredPart(part)
  }

  const handleMouseLeave = () => {
    setHoveredPart(null)
  }

  return (
    <div className="w-full max-w-[200px] relative mx-auto md:mx-0 mb-8 md:mb-0 md:left-1/4">
      <TooltipProvider>
        {/* Flex container for vertical layout */}
        <div className="flex flex-col w-full md:flex-row items-center">
          {/* SVG Container with fixed height and no relative positioning */}
          <div className="flex-shrink-0" style={{ minHeight: '20px' }}>
            <svg
              viewBox="0 0 100 180"
              className="w-full max-h-[375px]"
            >
              {/* Head */}
              <Tooltip>
                <TooltipTrigger asChild>
                <circle cx="50" cy="20" r="15" fill={hoveredPart === 'Head' ? bodyPartColors.Head : '#D3D3D3'}
                    onMouseEnter={() => handleMouseEnter('Head')}
                    onMouseLeave={handleMouseLeave} />
              </TooltipTrigger>
              </Tooltip>
              {/* Chest */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <rect
                    x="35" y="40" width="30" height="45"
                    fill={hoveredPart === 'Chest' ? bodyPartColors.Chest : '#D3D3D3'}
                    onMouseEnter={() => handleMouseEnter('Chest')}
                    onMouseLeave={handleMouseLeave}
                  />
                </TooltipTrigger>
              
              </Tooltip>

              {/* Core */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <rect
                    x="35" y="86" width="30" height="16"
                    fill={hoveredPart === 'Core' ? bodyPartColors.Core : '#D3D3D3'}
                    onMouseEnter={() => handleMouseEnter('Core')}
                    onMouseLeave={handleMouseLeave}
                  />
                </TooltipTrigger>
              </Tooltip>

              {/* Hips */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <rect
                    x="35" y="103" width="30" height="12"
                    fill={hoveredPart === 'Hips' ? bodyPartColors.Hips : '#D3D3D3'}
                    onMouseEnter={() => handleMouseEnter('Hips')}
                    onMouseLeave={handleMouseLeave}
                  />
                </TooltipTrigger>
              </Tooltip>

              {/* Legs */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <g
                    onMouseEnter={() => handleMouseEnter('Legs')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <rect x="35" y="116" width="12.5" height="52" fill={hoveredPart === 'Legs' ? bodyPartColors.Legs : '#D3D3D3'} />
                    <rect x="52.5" y="116" width="12.5" height="52" fill={hoveredPart === 'Legs' ? bodyPartColors.Legs : '#D3D3D3'} />
                  </g>
                </TooltipTrigger>
              </Tooltip>

              {/* Arms */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <g
                    onMouseEnter={() => handleMouseEnter('Arms')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <rect x="21" y="50" width="12.5" height="45" fill={hoveredPart === 'Arms' ? bodyPartColors.Arms : '#D3D3D3'} />
                    <rect x="66.5" y="50" width="12.5" height="45" fill={hoveredPart === 'Arms' ? bodyPartColors.Arms : '#D3D3D3'} />
                  </g>
                </TooltipTrigger>
              </Tooltip>

              {/* Shoulders */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <g
                    onMouseEnter={() => handleMouseEnter('Shoulders')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <rect x="21" y="40" width="12.5" height="9" fill={hoveredPart === 'Shoulders' ? bodyPartColors.Shoulders : '#D3D3D3'} />
                    <rect x="66.5" y="40" width="12.5" height="9" fill={hoveredPart === 'Shoulders' ? bodyPartColors.Shoulders : '#D3D3D3'} />
                  </g>
                </TooltipTrigger>
              </Tooltip>
            </svg>
          </div>

          {/* Description Container */}
          <div className="mt-4 text-center text-xs min-w-[300px]" aria-live="polite">
            {hoveredPart ? (
              <div className='relative'>
                <span className="font-bold">{hoveredPart}:</span>
                <div className='relative h-auto'>{bodyPartDesc[hoveredPart]}</div>
              </div>
            ) : (
              <div>
                <p className="text-gray-500">Hover over a body part to see some stuff.</p>
              </div>
            )}
          </div>
        </div>
      </TooltipProvider>
    </div>
  )
}
