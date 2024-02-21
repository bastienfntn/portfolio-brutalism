import * as THREE from 'three';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { AnimationClip } from 'three';

function Avatar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('src/assets/my_avatar.glb');
  const { animations } = useFBX('src/assets/idle.fbx');

  const { ref, names, actions } = useAnimations<AnimationClip>(animations);

  useEffect(() => {
    actions[names[0]]?.play();
  }, [actions, names]);

  useFrame((state) => {
    const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
    ref.current?.getObjectByName('Head')?.lookAt(target);
  });

  return (
    <group {...props} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} ref={ref} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('src/assets/my_avatar.glb');

export default Avatar;
