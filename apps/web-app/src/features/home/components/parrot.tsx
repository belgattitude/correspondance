import { useGLTF, useAnimations } from '@react-three/drei';
import React, { useRef } from 'react';
import type * as THREE from 'three';

import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh;
  };
  materials: {
    Material_0_COLOR_0: THREE.MeshStandardMaterial;
  };
};

type ActionName = 'KeyAction';
type GLTFActions = [ActionName, THREE.AnimationAction][];

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    '/glb/parrot.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Object_0"
        geometry={nodes.Object_0.geometry}
        material={materials.Material_0_COLOR_0}
        morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
        morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(
  '/../home/sebastien/github/correspondance/apps/web-app/public/glb/parrot.glb'
);
