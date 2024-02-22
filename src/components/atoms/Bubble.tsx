import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';

function Bubble(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('src/assets/bubble.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/scene.gltf');

export default Bubble;
