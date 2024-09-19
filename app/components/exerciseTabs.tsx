"use client"

import React, { useState, ReactNode } from "react";
import CompoundCarousel from "./carouselComponents/compoundCarousel";
import ArmCarousel from "./carouselComponents/armCarousel";
import ChestCarousel from "./carouselComponents/chestCarousel";
import BackCarousel from "./carouselComponents/backCarousel";
import ShoulderCarousel from "./carouselComponents/shoulderCarousel";
import LegCarousel from "./carouselComponents/legsCarousel";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tab: React.FC<TabProps> = ({ label }) => {
  return (
    <div className="text-lg font-semibold text-white">{label}</div>
  );
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="w-full  mx-auto bg-gray-700 rounded-2xl  overflow-hidden shadow-lg">
      {/* Tab Labels */}
      <div className="flex flex-wrap justify-start border-b border-cyan-400">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-4 text-lg min-w-[100px] font-semibold text-cyan-400 hover:bg-gray-700 transition-colors duration-200 ${
              activeTabIndex === index ? "border-b-2 border-cyan-400" : ""
            }`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-gray-900 text-gray-300">
        {tabs[activeTabIndex].children}
      </div>
    </div>
  );
};

const TabbedComponent: React.FC = () => {
  return (
    <Tabs
      tabs={[
        {
          label: "Compounds",
          children: (
            <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Compound Exercises</h3>
                <p className="leading-5 text-sm pl-0.5">
                    Compound exercises work a group of muscles at the same time.  Because of this, they are usually better at the start of a workout when everything is fresh.  They are the base of all my workouts, before moving on to Isolation exercises.</p>
                <p className="leading-5 text-sm pl-0.5 mt-2">
                    However, you can get creative with compounds if you want to. I do 4 sets of Deadlifts on leg day - 2 jefferson curls with lighter weight but a deep, deep range of motion to build strong erectors.  Then 2 sets of heavy deadlifts, getting more of the legs and core. I also will hold the bar close to my chest like a row and rotate left and right for my spine.</p>
                <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                    <CompoundCarousel/>
                </div>
            </div>
          ),
        },
        {
          label: "Arms",
          children: (
            <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Exercises for the Arm</h3>
                <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                    <ArmCarousel/>
                </div>
            </div>
          ),
        },
        {
          label: "Chest",
          children: (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Exercises for the Chest</h3>
              <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                <ChestCarousel/>
                </div>
            </div>
          ),
        },
        {
        label: "Back",
        children: (
            <div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Exercises for the Back</h3>
            <p className="leading-5 text-sm pl-0.5">
                    The back is too complex for me to pretend to break it down to the traps, delts, lats, obliques, etc.</p>
                    <p className="leading-5 text-sm pl-0.5 mt-2">
                    For me, (1) Deadlifts, (2) Pull-ups or Lat Pull-downs, (3) Seated or Standing Rows, and (4) Medicine ball rotations are enough.</p>
            <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                <BackCarousel/>
                </div>
            </div>
        ),
        },
        {
            label: "Shoulders",
            children: (
                <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Exercises for the Shoulders</h3>
                <p className="leading-5 text-sm pl-0.5">
                    The shoulders are too complex for me to pretend to break them down to the traps, delts, front, rear, etc. and separate that from the back.</p>
                    <p className="leading-5 text-sm pl-0.5 mt-2">
                    For me, (1) Dips, (2) Cable (range of motion) and DB (strength) flies to the side, front and Y-raises seem to do 90% of the work. Pull-ups and Lat pulldowns help round it out.  So a big back-and-shoulders day could make sense, with Day 2 being big leg compounds and Bench.</p>
                <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                    <ShoulderCarousel/>
                    </div>
                </div>
            ),
            },
        {
            label: "Legs",
            children: (
                <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Exercises for the Legs</h3>
                <p className="leading-5 text-sm pl-0.5">Do them all, then do more, then go to the track.</p>
                <div className="w-[350px] -ml-6 md:w-[800px] mt-8 mb-2">
                    <LegCarousel/>
                    </div>
                </div>
            ),
            }
    ]}
    />
  );
};

export default TabbedComponent;
