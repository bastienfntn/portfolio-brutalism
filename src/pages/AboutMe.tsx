import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function AboutMe() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F5F3F5');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(2);
    container.current?.appendChild(renderer.domElement);
    camera.position.z = 2;

    const light = new THREE.AmbientLight('#ffffff');
    scene.add(light);

    new GLTFLoader().load('src/assets/my_avatar.glb', async function (gltf) {
      gltf.scene.position.y = -1;
      scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;

    const loop = () => {
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
