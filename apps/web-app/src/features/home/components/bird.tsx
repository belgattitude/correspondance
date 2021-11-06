import { useAnimations, useGLTF, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh;
    //Object_0: THREE.Object3D;
  };
  materials: {
    Material_0_COLOR_0: THREE.MeshStandardMaterial;
    //Material_0_COLOR_0: THREE.Material;
  };
};

type BirdProps = JSX.IntrinsicElements['group'] & {
  speed: number;
  factor: number;
  url: string;
  children?: never;
};

type ActionName = 'KeyAction';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export const Bird: React.FC<BirdProps> = (props) => {
  const { speed, factor, url, ...restProps } = props;
  const { nodes, animations, materials } = useGLTF(
    url
  ) as unknown as GLTFResult;
  //const { ref, mixer } = useAnimations<GLTFActions & AnimationClip>(animations);
  const { ref, mixer } = useAnimations(animations);
  useEffect(() => {
    if (ref.current) {
      void mixer.clipAction(animations[0], ref.current).play();
    }
  }, [mixer, animations, ref]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y +=
        Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
      mixer.update(delta * speed);
    }
  });

  return (
    <group ref={ref}>
      <scene name="Scene" {...(restProps as any)}>
        <Text
          ref={ref}
          fontSize={12}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0}
          strokeWidth={'2.5%'}
          strokeColor="#ffffff">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
          EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD
          MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
          ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN
          REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
          PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN
          CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
        </Text>
        <mesh
          name="Object_0"
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}>
          <bufferGeometry attach="geometry" {...nodes.Object_0.geometry} />
          <meshStandardMaterial
            attach="material"
            //{...nodes.Object_0.material}
            {...materials.Material_0_COLOR_0}
            name="Material_0_COLOR_0"
          />
        </mesh>
      </scene>
    </group>
  );
};
