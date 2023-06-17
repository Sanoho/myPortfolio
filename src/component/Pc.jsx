/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 pc.gltf --transform
Author: maxdragonn (https://sketchfab.com/maxdragon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ibm-3278-terminal-b0470478089a4462afb4d5c4dd827b22
Title: IBM 3278 terminal
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/pc-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.ibm_3278_0.geometry}
        material={materials.ibm_3278}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.208}
      />
      <mesh
        geometry={nodes.ibm_3278_1.geometry}
        material={materials.display}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.208}
      />
      <mesh
        geometry={nodes.ibm_3278_2.geometry}
        material={materials.ibm_3278_keyboard}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.208}
      />
    </group>
  );
}

useGLTF.preload("/pc-transformed.glb");
