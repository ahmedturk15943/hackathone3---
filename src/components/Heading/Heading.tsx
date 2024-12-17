import React from 'react';

interface HeadingProps {
  text: string;
}
const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[#333333] font-bold mb-6 sm:mb-8">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
