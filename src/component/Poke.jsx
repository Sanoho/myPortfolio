/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 poke.gltf --transform
Author: Katerina Novakova (https://sketchfab.com/KaterinaNovakova)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-magikarp-aed89b4ee4f1421abc2b1613911d0ca8
Title: Pokemon - Magikarp
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/poke-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Magikarp_0.geometry}
        material={materials.magicarpBody}
        position={[-0.436, -0.241, -0.689]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Eye_0.geometry}
        material={materials.eyeWhite}
        position={[1.004, 0.747, 1.686]}
        rotation={[-1.72, -0.004, 0]}
        scale={0.873}
      />
      <mesh
        geometry={nodes.Eye_1.geometry}
        material={materials.eyeBlack}
        position={[1.004, 0.747, 1.686]}
        rotation={[-1.72, -0.004, 0]}
        scale={0.873}
      />
    </group>
  );
}

useGLTF.preload("/poke-transformed.glb");
