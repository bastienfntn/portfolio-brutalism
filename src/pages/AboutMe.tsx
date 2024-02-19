import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

function AboutMe() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F5F3F5');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(2);
    container.current?.appendChild(renderer.domElement);
    camera.position.z = 2.5;

    const light = new THREE.AmbientLight('#ffffff');
    scene.add(light);

    new GLTFLoader().load('src/assets/my_avatar.glb', async function (gltf) {
      new FBXLoader().load('src/assets/bow2.fbx', function (fbx) {
        const model = gltf.scene
        gltf.scene.position.y = -1;

        mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(fbx.animations[0]);
        action.play();

        scene.add(model);


      }, undefined, function (error) {
        console.error(error);
      });
    }, undefined, function (error) {
      console.error(error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;

    const loop = () => {
      const delta = clock.getDelta();
      mixer?.update(delta);
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    }

    loop();
  }, []);
  return (
    <div className="flex w-screen h-screen overflow-hidden items-center" ref={container} />
  )
}

export default AboutMe;
