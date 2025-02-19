import { Canvas } from '@react-three/fiber';

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export function PhoneScene() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
} 