import React from 'react';

function Title({
  popupTitle,
  title,
  description,
}: {
  popupTitle: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-purple-800 block w-24 text-white rounded-full m-auto relative px-4">
        <p className=" absolute top-1/2  -translate-x-1/2 -translate-y-1/2 transform flex flex-col justify-center items-center  w-3 h-3 bg-purple-400 rounded-full animate-ping"></p>
        <p className=" absolute top-1/2  -translate-x-1/2 -translate-y-1/2 transform flex flex-col justify-center items-center  w-2 h-2 bg-purple-500 rounded-full"></p>
        <span className="font-mono ms-1">{popupTitle}</span>
      </div>
      <h2 className="text-5xl font-bold mt-5">{title}</h2>
      <p className="mt-4 text-md text-gray-600 ">
        {description}
      </p>
    </div>
  );
}

export default Title;
