'use client';

import React, { useRef, useState } from 'react';
import { CircleCheckBig, Play } from 'lucide-react';
import Image from 'next/image';
import { ShortService } from '@/constants/content';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className=" h-lvh flex flex-col justify-center items-center pt-5">
      <div className="text-center">
        <Button variant="outline">
          Sofast 1.0 just released 🎉
        </Button>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            <span className="text-violet-600">
              স্বপ্নের
            </span>{' '}
            শুরু, আমাদের সাথে{' '}
            <span className="text-violet-600">!!</span>
          </h1>
        </div>
        <div className="relative w-full flex justify-center p-2">
          <video
            width={200}
            height={200}
            ref={videoRef}
            src="https://res.cloudinary.com/dywgjk97v/video/upload/v1729953054/China-Small-Accessories-Wholesale-Market_-Prices-and-Contacts_yi4365.mp4"
            controls
            className="w-full md:w-[400px] lg:min-w-[650px] aspect-video rounded-2xl border-4 border-violet-500 shadow-[0_0_50px_-15px_rgba(139,92,246,0.8)]"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center text-violet-600"
              aria-label="Play video"
            >
              <div className="bg-white/80 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
                <Play size={50} strokeWidth={2.5} />
              </div>
            </button>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <div>
            <TextLoopBasic />
          </div>
        </div>
        <Button variant="violet" size="lg" className="mt-8">
          আমাদের সেবা সমূহ জানুন
        </Button>

        {/* Video with glow + play icon */}
      </div>
    </section>
  );
}

import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Button } from '@/components/ui/button';

function TextLoopBasic() {
  return (
    <TextLoop className="font-mono text-sm">
      {ShortService.map((service, index) => (
        <div>
          {service.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 justify-center mb-2"
            >
              <item.icon className="w-5 h-5 text-violet-600 " />
              <span className="text-[12px] md:text-sm">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      ))}
    </TextLoop>
  );
}

export default Hero;
