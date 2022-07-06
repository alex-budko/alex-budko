import {Box} from "@react-three/drei"

export default function MyObject() {
  return (
    <Box position={[0, .5, 0]} receiveShadow castShadow args={[1, 1, 1]} smoothness={4}>
        <meshStandardMaterial
            color={"yellow"}
        />
    </Box>
  )
}
