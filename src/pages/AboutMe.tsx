import { HTMLAttributes } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from '../components/atoms/Avatar';
import Bubble from '../components/atoms/Bubble';

function AboutMe({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col w-screen h-screen items-center ${className ?? ''}`}
    >
      <Canvas camera={{ position: [0, 0, 2.3] }}>
        <ambientLight />
        <Avatar position={[0, -1, 0]} />
        <Bubble position={[0.3, 1, 0.1]} scale={[0.2, 0.2, 0.2]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default AboutMe;
