import { useBox, useSphere } from '@react-three/cannon'
import { useEffect, useState } from 'react'

function Cube(props) {
    const [ref] = useBox(() => ({ mass: 1, rotation: [0.4, 0.2, 0.5], ...props }))
    return (
      <mesh receiveShadow castShadow ref={ref}>
        <boxGeometry />
        <meshStandardMaterial roughness={.6} metalness={.8} color="red" />
      </mesh>
    )
}

function Ball(props) {
    const [ref] = useSphere(() => ({ mass: 2, rotation: [0.4, 0.2, 0.5], ...props }))
    return (
      <mesh receiveShadow castShadow ref={ref}>
        <sphereGeometry />
        <meshStandardMaterial roughness={.6} metalness={.8} color="pink" />
      </mesh>
    )
}

export default function DropSpawner() {
    const [cubes, setCubes] = useState([])
    const [balls, setBalls] = useState([])

    useEffect(()=> {
        setCubes([])
        setBalls([])
        let randomNum = (Math.floor(Math.random() * 5)) + 10
        console.log(randomNum)
        for (let i = 0; i < randomNum; i++) {
            console.log('here')
            setCubes(cubes => 
                ([...cubes,
                    <Cube key={i} position={[Math.floor(Math.random() * 10) - 5, Math.floor(Math.random() * 5) + 10, Math.floor(Math.random() * -10) - 3]} />
                ])
            )
            setBalls(balls => 
                ([...balls,
                    <Ball key={i} position={[Math.floor(Math.random() * 10) - 5, Math.floor(Math.random() * 5) + 10, Math.floor(Math.random() * -10) - 3]} />
                ])
            )
        }
    }, [])

  return (
    <>
        {cubes.map((cube)=> {
            return cube;
        })}
        {balls.map((ball)=> {
            return ball;
        })}
    </>
  )
}
