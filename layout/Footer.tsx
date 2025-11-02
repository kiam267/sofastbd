'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {} from 'lucide-react';
import { Icons } from '@/constants/icons';
function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(); // e.g. "6:12:45 PM"
      setTime(formatted);
    };

    updateTime(); // set initial time
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <footer className="border-t p-5">
      {/* List - 01 */}
      <div className="flex flex-col md:flex-row justify-between items-center my-4">
        {/* Item - 01 */}
        <div className="my-6 md:my-0">
          <Link href="/">
            <Image
              src="/sofast.png"
              alt="Sofastbd Logo"
              width={150}
              height={50}
            />
            <div className="bg-purple-800 w-64 relative px-4 rounded-4xl">
              <p className=" absolute top-1/2  -translate-x-1/2 -translate-y-1/2 transform flex flex-col justify-center items-center  w-3 h-3 bg-purple-400 rounded-full animate-ping"></p>
              <p className=" absolute top-1/2  -translate-x-1/2 -translate-y-1/2 transform flex flex-col justify-center items-center  w-2 h-2 bg-purple-500 rounded-full"></p>
              <span className="font-mono ms-2 text-white">
                All Time Available
              </span>
            </div>
          </Link>
        </div>
        {/* Item - 02 */}
        <div>
          <h4 className="text-2xl font-bold py-3 font-mono">
            {time}
          </h4>
          <div className="flex justify-between gap-4 ">
            <Link
              href="https://www.facebook.com/sofastbd"
              target="_blank"
              className="font-bold border p-2 border-blue-600 hover:bg-blue-600 transition rounded  text-blue-600 hover:text-white "
            >
              <Icons.Facebook className="w-6 h-6 " />
            </Link>
            <Link
              href="https://wa.me/+8801309301034"
              target="_blank"
              className="font-bold border p-2 border-green-600 hover:bg-green-600 transition rounded hover:text-white text-green-600   "
            >
              <Icons.Whatsapp className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/sofastbd"
              target="_blank"
              className="font-bold border p-2 border-blue-600 hover:bg-blue-600 transition rounded  text-blue-600 hover:text-white "
            >
              <Icons.Messenger className="w-6 h-6" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="font-bold border p-2 border-sky-600 hover:bg-sky-600 transition rounded  text-sky-600 hover:text-white"
            >
              <Icons.Telegram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="border-b my-2"></div> */}
      {/* List - 02 */}
      <div className="flex flex-col-reverse md:flex-row my-7 md:my-1 justify-between items-center ">
        <div>
          <p className="text-center text-sm text-gray-600 font-semibold">
            © 2024 Sofastbd. All rights reserved.
          </p>
        </div>
        <div className="flex justify-between gap-y-3">
          <Link
            href="/private-policy"
            className="underline mx-4 text-sm hover:text-purple-600 transition font-bold"
          >
            প্রাইভেসি পলিসি
          </Link>
          <Link
            href="/terms"
            className="underline mx-4 text-sm hover:text-purple-600 transition font-bold"
          >
            শর্তাবলি
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
