import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { RandomUtils } from '@your-org/core-lib';
import { Suspense } from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { Message } from '@/features/home/blocks/message';
import { Bird } from '@/features/home/components/bird';
import { messages } from '@/features/home/data/messages';

const canvasStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: -1,
};

export const BirdsCanvas: React.FC = () => {
  return (
    <Canvas style={canvasStyle} camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <OrbitControls />
      <Suspense fallback={null}>
        {new Array(6).fill(null).map((_, i) => {
          const x =
            (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
          const y = -10 + Math.random() * 20;
          const z = -5 + Math.random() * 10;
          const bird = ['stork', 'parrot', 'flamingo'][
            Math.round(Math.random() * 2)
          ];
          const speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5;
          const factor =
            bird === 'stork'
              ? 0.5 + Math.random()
              : bird === 'flamingo'
              ? 0.25 + Math.random()
              : 1 + Math.random() - 0.5;

          return (
            <Bird
              key={i}
              position={[x, y, z]}
              rotation={[0, x > 0 ? Math.PI : 0, 0]}
              speed={speed}
              factor={factor}
              url={`/glb/${bird}.glb`}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
};

const msg = messages[RandomUtils.getRandomInt(0, messages.length - 1)];

const BirdPage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <BirdsCanvas />
        <Message message={msg} />
      </MainLayout>
    </>
  );
};

export default function BirdsRoute() {
  return (
    <>
      <BirdPage />
    </>
  );
}
