import { Text3D } from '@react-three/drei';
import Roboto from '../fonts/Roboto.json';


export default function TextMesh() {
  return (
    <Text3D
        position={[-2, 1.3, 0]}
        size={.5}
        font={Roboto}
    >
        ALEX BUDKO
        <meshNormalMaterial />
    </Text3D>
  );
}