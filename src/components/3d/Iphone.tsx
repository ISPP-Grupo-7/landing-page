import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Object3D, Mesh } from 'three';

export function Iphone() {
  const { scene } = useGLTF('/iphone_15_pro_max.glb');

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive 
      object={scene} 
      scale={1.5} 
      position={[0, -1, 0]} 
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
} 