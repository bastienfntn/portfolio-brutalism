import React from 'react';
import Title from './Title';

type Props = {
  children: React.ReactNode;
};

function SectionTitle({ children }: Props) {
  return (
    <div className="relative group w-full h-20">
      <div className="absolute bottom-0 group-hover:h-20 w-full h-1.5 bg-black transition-all duration-300" />
      <Title className="absolute bottom-0 px-1 text-[64px] leading-[70px] group-hover:text-white transition-all duration-300">
        {children}
      </Title>
    </div>
  );
}

export default SectionTitle;
