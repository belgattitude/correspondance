import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  SpotLight,
  Text,
  Sky,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import type { Mesh } from 'three';

const canvasStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  background: 'black',
};

softShadows();

const TextPane = () => {
  const textRef = useRef<Mesh>();
  useFrame(() => {
    if (textRef.current !== undefined) {
      //textRef.current.rotation.x = textRef.current.rotation.y += 0.0001;
      //textRef.current.rotation.y = textRef.current.rotation.x += 0.0001;
      //textRef.current.rotation.z = textRef.current.rotation.y += 0.005;
    }
  });
  return (
    <Text
      ref={textRef}
      color={'#c929eb'}
      position={[0, 6, -5]}
      rotation={[0, 0.0001, 0.1]}
      fontSize={10}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.09}
      textAlign={'left'}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.9}
      outlineColor="#ffffff">
      qksdf h skjqdhf sdf kjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh
      sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh
      sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh
      sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh sdfkjh
    </Text>
  );
};

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas style={canvasStyle} mode="concurrent" shadows={false}>
      <ambientLight intensity={0.03} />
      <directionalLight color={'rgb(255,255,255)'} position={[0, 5, 5]} />
      <Index />

      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
        <meshBasicMaterial color="black" wireframe attach="material" />
      </Plane>
      {/*<axesHelper />*/}
      <OrbitControls
        maxPolarAngle={90}
        minPolarAngle={1}
        enablePan={false}
        enableRotate={true}
        enableZoom={true}
        maxZoom={0.1}
        minZoom={0.01}
      />
    </Canvas>
  );
};

const Index = () => {
  const meshRef = useRef<Mesh>();

  useFrame(() => {
    if (meshRef.current !== undefined) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.0001;
    }
  });

  const [video] = useState(() => {
    const vid = document.createElement('video');
    //vid.src = 'https://soluble.io/studioworks/mhr/assets/paola-video-bg.mp4';
    //vid.src = '/videos/paola-video-bg.m4v';
    //vid.src = '/videos/red.mp4';
    //vid.src = '/videos/VID_20211118_124710.mp4';
    vid.src = '/videos/lola.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.playbackRate = 1;
    vid.muted = true;
    return vid;
  });
  useEffect(() => void video.play(), [video]);
  return (
    <>
      {/*
      <DepthBuffer ref={setDepth} />
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[3, 2, 0]}
        intensity={0.5}
        angle={0.5}
        color="#ff005b"
        castShadow
      />
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[-3, 2, 0]}
        intensity={0.5}
        angle={0.5}
        color="#0EEC82"
        castShadow
      />
*/}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 1]} />
        <MeshWobbleMaterial
          doubleSide={true}
          color={'white'}
          speed={0.8}
          wireframe={false}
          wireframeLinejoin={'10'}
          stencilWrite={true}>
          <videoTexture attach="map" args={[video]} />
        </MeshWobbleMaterial>
      </mesh>
      <mesh scale={2}>
        <planeBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
      <Sky
        distance={300}
        turbidity={100}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        //inclination={inclination}
        azimuth={0.25}
      />
      {/*
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <sphereGeometry args={[2, 2]} />
        <MeshWobbleMaterial color={'white'} speed={0.8}>
          <videoTexture attach="map" args={[video]} />
        </MeshWobbleMaterial>
      </mesh>
      */}
    </>
  );

  /**
   *       <meshBasicMaterial>
   <videoTexture attach="map" args={[video]} />
   </meshBasicMaterial>

   */
};

export default function VideoRoute() {
  // NOT the right way to do it...
  // const [inclination, setInclination] = useState(0);
  //  useFrame(() => {
  //setInclination((a) => a + 0.002);
  //  });
  return (
    <>
      <ThreeCanvas />
    </>
  );
}
