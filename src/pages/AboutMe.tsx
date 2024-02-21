import { HTMLAttributes } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from '../components/atoms/Avatar';

function AboutMe({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col w-screen h-screen items-center ${className ?? ''}`}
    >
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <Avatar position={[0, -1, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default AboutMe;
