import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

export type ObjectMap = {
  nodes: { [name: string]: THREE.Object3D };
  materials: { [name: string]: THREE.Material };
};

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
