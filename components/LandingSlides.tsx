"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  GitBranch,
  MessageSquare,
  Users,
} from "lucide-react";

const slides = [
  {
    icon: GitBranch,
    title: "GitHub for Government",
    description:
      "GovHub treats every bill in U.S. history like a code repository. Track changes, understand versions, and see the full legislative history in one place.",
  },
  {
    icon: BarChart2,
    title: "Follow Legislation in Real-Time",
    description:
      "Get instant updates on actions, amendments, and floor votes. Star bills to create your own legislative watchlist and never miss a critical development.",
  },
  {
    icon: MessageSquare,
    title: "Join the Civic Conversation",
    description:
      "Move beyond partisan soundbites. Each bill has a dedicated discussion forum for citizens, experts, and journalists to engage in substantive, policy-focused dialogue.",
  },
  {
    icon: Users,
    title: "Know the People Behind the Policy",
    description:
      "Easily see who is sponsoring and co-sponsoring legislation. Understand the coalitions and political forces shaping the laws that affect us all.",
  },
];

const LandingSlides = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="bg-gray-900 py-20 sm:py-24">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="mx-auto max-w-2xl text-center">
                  <slide.icon className="mx-auto h-12 w-12 text-blue-400" />
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {slide.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-2 rounded-full shadow bg-white/30 text-white cursor-pointer hover:bg-white/50 focus:outline-none"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full shadow bg-white/30 text-white cursor-pointer hover:bg-white/50 focus:outline-none"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Bottom Dots */}
        <div className="absolute -bottom-6 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all w-2 h-2 bg-white rounded-full cursor-pointer ${
                  current === i ? "bg-opacity-100" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSlides;
