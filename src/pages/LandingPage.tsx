import { HTMLAttributes, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Title from '../components/atoms/Title';
import SectionTitle from '../components/atoms/SectionTitle';
import MovingBand from '../components/atoms/MovingBand';

function LandingPage({ className }: HTMLAttributes<HTMLDivElement>) {
  const titles = useRef<HTMLDivElement>(null);
  const sectionTitles = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.flex', {
        x: -1000,
        duration: 0.5,
        stagger: 0.1,
      });
    },
    { scope: titles },
  );

  useGSAP(
    () => {
      gsap.from('.relative', {
        x: 1000,
        duration: 0.5,
        stagger: 0.1,
      });
    },
    { scope: sectionTitles },
  );

  return (
    <div
      className={`flex flex-col w-screen h-screen items-center ${className ?? ''}`}
    >
      <MovingBand className="my-6" />
      <div className="flex w-screen h-full items-center">
        <div className="grid w-full grid-rows-3 m-8" ref={titles}>
          <div className="flex w-full h-full items-end space-x-4">
            <Title className="text-sm">Hi, I am</Title>
            <Title className="text-bigName leading-[180px]">BAST</Title>
          </div>
          <div className="flex w-full h-full items-end space-x-4">
            <Title className="text-bigName leading-[180px]">IEN.</Title>
            <Title className="text-sm">I am</Title>
          </div>
          <div className="flex flex-col w-full h-full justify-end space-y-2 my-4">
            <Title className="text-[128px] leading-[110px]">web</Title>
            <Title className="text-[128px] leading-[110px]">developer</Title>
          </div>
        </div>
        <div
          className="w-full h-80 flex flex-col justify-center ms-20"
          ref={sectionTitles}
        >
          {['About Me', 'Projects', 'Contact'].map((text) => (
            <SectionTitle key={`${text}-section`}>{text}</SectionTitle>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
