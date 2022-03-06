import { useGLTF, useAnimations } from '@react-three/drei';
import React, { useRef } from 'react';
import type * as THREE from 'three';
import type { MeshStandardMaterial, Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

interface ParrotGLTF extends GLTF {
  materials: {
    Material_0_COLOR_0: MeshStandardMaterial;
  };
  nodes: {
    Object_0: Mesh;
  };
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    '/glb/parrot.glb'
  ) as unknown as ParrotGLTF;
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
