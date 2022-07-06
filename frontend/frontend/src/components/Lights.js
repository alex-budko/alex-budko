
export default function Lights() {
    return (
        <>
            <spotLight
                castShadow
                color={[0.988, 0.956, 0.290]} 
                angle={0.7} 
                intensity={2} 
                penumbra={0.5} 
                position={[5, 5, 0]}
                shadowBias={-0.0001}
            />

            <spotLight
                castShadow
                color={[0.6, 0.035, 0.784]} 
                angle={0.7} 
                intensity={2} 
                penumbra={0.5} 
                position={[-5, 5, 0]}
                shadowBias={-0.0001}
            />
        </>
    )
}
