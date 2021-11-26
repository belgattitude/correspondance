import {
  softShadows,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  OrbitControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

const canvasStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
};

softShadows();

const Index = () => {
  const meshRef = useRef<THREE.Mesh>();
  useFrame(() => {
    if (meshRef.current !== undefined) {
      return (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01);
    }
  });
  const [video] = useState(() => {
    const vid = document.createElement('video');
    //vid.src = 'https://soluble.io/studioworks/mhr/assets/paola-video-bg.mp4';
    //vid.src = '/videos/paola-video-bg.m4v';
    vid.src = '/videos/red.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.playbackRate = 1;
    vid.muted = true;
    return vid;
  });
  useEffect(() => void video.play(), [video]);
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 2]} />
      <MeshWobbleMaterial color={'white'} speed={1}>
        <videoTexture attach="map" args={[video]} />
      </MeshWobbleMaterial>
    </mesh>
  );

  /**
   *       <meshBasicMaterial>
   <videoTexture attach="map" args={[video]} />
   </meshBasicMaterial>

   */
};

export default function VideoRoute() {
  return (
    <>
      <Canvas style={canvasStyle} shadows={true}>
        <ambientLight intensity={0.4} />
        <directionalLight color="yellow" position={[0, 5, 5]} />
        <Index />
        <OrbitControls />
      </Canvas>
    </>
  );
}
