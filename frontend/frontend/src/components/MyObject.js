import {Box} from "@react-three/drei"
import { useBox } from '@react-three/cannon'
import { useDrag } from "@use-gesture/react"
import { useThree } from "@react-three/fiber"

export default function MyObject() {
    const boxRef = useBox(() => ({ mass: 1, position: [0, .5, 0]}))
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    function moveXY(mx, my) {
        boxRef.current.rotation.set(my / aspect, mx / aspect, 0)
        boxRef.current.position.set(mx / aspect, -my / aspect, 0)
    }

    const bind = useDrag(({ movement: [mx, my] }) => moveXY(mx, my))

    return (
        <Box 
            {...bind()} 
            receiveShadow 
            castShadow 
            ref={boxRef}
            args={[1, 1, 1]} 
            smoothness={4}>
            <meshStandardMaterial
                color={"yellow"}
            />
        </Box>
    )
}
