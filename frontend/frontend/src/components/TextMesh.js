import { Text3D } from '@react-three/drei';
import Roboto from '../fonts/Roboto.json';


export default function TextMesh() {
  return (
    <Text3D
        position={[-8, 1.5, 0]}
        size={2}
        color={'red'}
        font={Roboto}
    >
      ALEX BUDKO
      <meshNormalMaterial />
    </Text3D>
  );
}