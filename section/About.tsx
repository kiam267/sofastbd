import Title from '@/components/Title';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas';
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section className="container mx-auto my-10" id="about">
      <Title
        popupTitle="about"
        title="চলো ঘুরে দেখি!!"
        description="  আমাদের কোম্পানি সম্পর্কে কিছু তথ্য"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 m-3">
        <Card className="relative">
          <PixelatedCanvas
            src="/we-can.png"
            width={200}
            height={200}
            cellSize={3}
            dotScale={0.9}
            shape="circle"
            backgroundColor="#FFF"
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="w-full  "
          />
          <CardContent>
            <h2 className="text-xl font-bold my-1">
              আমরা কে?
            </h2>
            <p className="text-gray-600 font-medium">
              Sofast একটি নির্ভরযোগ্য চায়না সোসিং ও শিপিং
              সার্ভিস । আমরা ফ্যাক্টরি থেকে সংগ্রহ করে,
              কাস্টমস-ভ্যাট ক্লিয়ার করে,পণ্য পৌঁছে দিই আপনার
              বাসায়।
            </p>
          </CardContent>
        </Card>
        <Card className="relative">
          <PixelatedCanvas
            src="/mission.png"
            width={200}
            height={200}
            cellSize={3}
            dotScale={0.9}
            shape="circle"
            backgroundColor="#FFF"
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="w-full  "
          />
          <CardContent>
            <h2 className="text-xl font-bold my-1">
              আমাদের লক্ষ্য
            </h2>
            <p className="text-gray-600 font-medium">
              বাংলাদেশের উদ্যোক্তাদের জন্য চায়না থেকে পণ্য
              আমদানি সহজ, দ্রুত ও ঝামেলামুক্ত করা — এটাই
              আমাদের লক্ষ্য।
            </p>
          </CardContent>
        </Card>
        <Card className="relative">
          <PixelatedCanvas
            src="/promise.png"
            width={200}
            height={200}
            cellSize={3}
            dotScale={0.9}
            shape="circle"
            backgroundColor="#FFF"
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="w-full  "
          />
          <CardContent>
            <h2 className="text-xl font-bold my-1">
              আমাদের অঙ্গীকার
            </h2>
            <div className="block mt-5">
              <div className="flex items-center space-x-1 mb-2">
                <CircleCheckBig className="w-5 h-5 text-purple-800 " />
                <span className="text-[12px] md:text-sm">
                  সরাসরি ফ্যাক্টরি থেকে কেয়ালিটিফুল পণ্য
                </span>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                <CircleCheckBig className="w-5 h-5 text-purple-800 " />
                <span className="text-[12px] md:text-sm">
                  নিরাপদ পেমেন্ট ও ট্র্যাকিং সিস্টেম
                </span>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                <CircleCheckBig className="w-5 h-5 text-purple-800 " />
                <span className="text-[12px] md:text-sm">
                  সম্পূর্ণ কাস্টমস ও ভ্যাট হ্যান্ডলিং
                </span>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                <CircleCheckBig className="w-5 h-5 text-purple-800 " />
                <span className="text-[12px] md:text-sm">
                  সময়মতো ডেলিভারি (১৪ দিনের মধ্যে)
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default About;
