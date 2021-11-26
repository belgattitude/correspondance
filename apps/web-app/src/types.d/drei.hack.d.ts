import * as drei from '@react-three/drei';

declare module '@react-three/drei' {
  // see https://github.com/pmndrs/drei/issues/553
  export declare const MeshWobbleMaterial: React.ForwardRefExoticComponent<
    Pick<
      | (Omit<
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          import('@react-three/fiber').Node<
            MeshPhysicalMaterial,
            [MeshPhysicalMaterialParameters]
          >,
          'color' | undefined
        > & {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          color?: import('@react-three/fiber').Color | undefined;
        } & {
          time?: number | undefined;
          distort?: number | undefined;
          radius?: number | undefined;
        } & {
          speed?: number | undefined;
          factor?: number | undefined;
        } & 'visible')
      | 'attach'
      | 'attachArray'
      | 'attachObject'
      | 'args'
      | 'children'
      | 'key'
      | 'onUpdate'
      | 'dispose'
      | 'type'
      | 'id'
      | 'uuid'
      | 'name'
      | 'userData'
      | 'toJSON'
      | 'clone'
      | 'copy'
      | 'addEventListener'
      | 'hasEventListener'
      | 'removeEventListener'
      | 'dispatchEvent'
      | 'color'
      | 'map'
      | 'time'
      | 'transparent'
      | 'fog'
      | 'opacity'
      | 'speed'
      | 'alphaTest'
      | 'alphaToCoverage'
      | 'blendDst'
      | 'blendDstAlpha'
      | 'blendEquation'
      | 'blendEquationAlpha'
      | 'blending'
      | 'blendSrc'
      | 'blendSrcAlpha'
      | 'clipIntersection'
      | 'clippingPlanes'
      | 'clipShadows'
      | 'colorWrite'
      | 'defines'
      | 'depthFunc'
      | 'depthTest'
      | 'depthWrite'
      | 'stencilWrite'
      | 'stencilFunc'
      | 'stencilRef'
      | 'stencilWriteMask'
      | 'stencilFuncMask'
      | 'stencilFail'
      | 'stencilZFail'
      | 'stencilZPass'
      | 'isMaterial'
      | 'needsUpdate'
      | 'polygonOffset'
      | 'polygonOffsetFactor'
      | 'polygonOffsetUnits'
      | 'precision'
      | 'premultipliedAlpha'
      | 'dithering'
      | 'side'
      | 'shadowSide'
      | 'toneMapped'
      | 'vertexColors'
      | 'version'
      | 'onBeforeCompile'
      | 'customProgramCacheKey'
      | 'setValues'
      | 'roughness'
      | 'metalness'
      | 'lightMap'
      | 'lightMapIntensity'
      | 'aoMap'
      | 'aoMapIntensity'
      | 'emissive'
      | 'emissiveIntensity'
      | 'emissiveMap'
      | 'bumpMap'
      | 'bumpScale'
      | 'normalMap'
      | 'normalMapType'
      | 'normalScale'
      | 'displacementMap'
      | 'displacementScale'
      | 'displacementBias'
      | 'roughnessMap'
      | 'metalnessMap'
      | 'alphaMap'
      | 'envMap'
      | 'envMapIntensity'
      | 'refractionRatio'
      | 'wireframe'
      | 'wireframeLinewidth'
      | 'wireframeLinecap'
      | 'wireframeLinejoin'
      | 'skinning'
      | 'vertexTangents'
      | 'morphTargets'
      | 'morphNormals'
      | 'flatShading'
      | 'isMeshStandardMaterial'
      | 'reflectivity'
      | 'clearcoat'
      | 'clearcoatMap'
      | 'clearcoatRoughness'
      | 'clearcoatRoughnessMap'
      | 'clearcoatNormalScale'
      | 'clearcoatNormalMap'
      | 'ior'
      | 'sheen'
      | 'transmission'
      | 'transmissionMap'
      | 'radius'
      | 'distort'
      | 'factor'
    > &
      React.RefAttributes<unknown>
  >;

  export declare const MeshDistortMaterial: React.ForwardRefExoticComponent<
    Pick<
      | (Omit<
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          import('@react-three/fiber').Node<
            MeshPhysicalMaterial,
            [MeshPhysicalMaterialParameters]
          >,
          'color' | undefined
        > & {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          color?: import('@react-three/fiber').Color | undefined;
        } & {
          time?: number | undefined;
          distort?: number | undefined;
          radius?: number | undefined;
        } & {
          speed?: number | undefined;
          factor?: number | undefined;
        } & 'visible')
      | 'attach'
      | 'attachArray'
      | 'attachObject'
      | 'args'
      | 'children'
      | 'key'
      | 'onUpdate'
      | 'dispose'
      | 'type'
      | 'id'
      | 'uuid'
      | 'name'
      | 'userData'
      | 'toJSON'
      | 'clone'
      | 'copy'
      | 'addEventListener'
      | 'hasEventListener'
      | 'removeEventListener'
      | 'dispatchEvent'
      | 'color'
      | 'map'
      | 'time'
      | 'transparent'
      | 'fog'
      | 'opacity'
      | 'speed'
      | 'alphaTest'
      | 'alphaToCoverage'
      | 'blendDst'
      | 'blendDstAlpha'
      | 'blendEquation'
      | 'blendEquationAlpha'
      | 'blending'
      | 'blendSrc'
      | 'blendSrcAlpha'
      | 'clipIntersection'
      | 'clippingPlanes'
      | 'clipShadows'
      | 'colorWrite'
      | 'defines'
      | 'depthFunc'
      | 'depthTest'
      | 'depthWrite'
      | 'stencilWrite'
      | 'stencilFunc'
      | 'stencilRef'
      | 'stencilWriteMask'
      | 'stencilFuncMask'
      | 'stencilFail'
      | 'stencilZFail'
      | 'stencilZPass'
      | 'isMaterial'
      | 'needsUpdate'
      | 'polygonOffset'
      | 'polygonOffsetFactor'
      | 'polygonOffsetUnits'
      | 'precision'
      | 'premultipliedAlpha'
      | 'dithering'
      | 'side'
      | 'shadowSide'
      | 'toneMapped'
      | 'vertexColors'
      | 'version'
      | 'onBeforeCompile'
      | 'customProgramCacheKey'
      | 'setValues'
      | 'roughness'
      | 'metalness'
      | 'lightMap'
      | 'lightMapIntensity'
      | 'aoMap'
      | 'aoMapIntensity'
      | 'emissive'
      | 'emissiveIntensity'
      | 'emissiveMap'
      | 'bumpMap'
      | 'bumpScale'
      | 'normalMap'
      | 'normalMapType'
      | 'normalScale'
      | 'displacementMap'
      | 'displacementScale'
      | 'displacementBias'
      | 'roughnessMap'
      | 'metalnessMap'
      | 'alphaMap'
      | 'envMap'
      | 'envMapIntensity'
      | 'refractionRatio'
      | 'wireframe'
      | 'wireframeLinewidth'
      | 'wireframeLinecap'
      | 'wireframeLinejoin'
      | 'skinning'
      | 'vertexTangents'
      | 'morphTargets'
      | 'morphNormals'
      | 'flatShading'
      | 'isMeshStandardMaterial'
      | 'reflectivity'
      | 'clearcoat'
      | 'clearcoatMap'
      | 'clearcoatRoughness'
      | 'clearcoatRoughnessMap'
      | 'clearcoatNormalScale'
      | 'clearcoatNormalMap'
      | 'ior'
      | 'sheen'
      | 'transmission'
      | 'transmissionMap'
      | 'radius'
      | 'distort'
      | 'factor'
    > &
      React.RefAttributes<unknown>
  >;
}
