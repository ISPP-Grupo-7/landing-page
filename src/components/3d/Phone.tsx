import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useToast } from '@/hooks/use-toast';

export function Phone() {
  const phoneRef = useRef<THREE.Group>(null);
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [isDiscovered, setIsDiscovered] = useState(false);

  useFrame(() => {
    if (!phoneRef.current) return;
    
    // Rotación suave
    const targetRotation = isDiscovered ? 0 : -Math.PI / 2;
    phoneRef.current.rotation.x += (targetRotation - phoneRef.current.rotation.x) * 0.05;
  });

  const handleClick = () => {
    if (!isDiscovered) {
      setIsDiscovered(true);
      console.log("¡Has descubierto Murcia!");
      //toast("¡Has descubierto Murcia!");
    }
  };

  return (
    <group
      ref={phoneRef}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Cuerpo del teléfono */}
      <mesh>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color={isHovered ? "#646cff" : "#444"} />
      </mesh>

      {/* Pantalla */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[0.9, 1.8]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>

      {/* Texto de descubrimiento */}
      {isDiscovered && (
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          ¡Murcia descubierta!
        </Text>
      )}
    </group>
  );
} 