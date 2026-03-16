import { Canvas } from "@react-three/fiber"
import { CameraControls, OrbitControls } from "@react-three/drei" // 1. Import the controls
import { useRef, useState } from "react"
import GeoJsonLayer from "./geojson-line"
import fieldData from "../assets/inverterJson.json"
import { Button } from "./ui/button"
import { Vector3 } from "three"
import { Physics, RigidBody } from "@react-three/rapier"
import { ExcavatorModel } from "./excavator-model"

function FieldBox({ width, height, depth, setBoxO, fieldCenter }) {
  return (
    <mesh
      onClick={(e) => {
        const {
          point: { x, z },
        } = e
        setBoxO([
          fieldCenter[0] + width / 2 + x,
          fieldCenter[1] + height / 2,
          fieldCenter[2] + z - depth / 3,
        ])
      }}
    >
      <boxGeometry args={[width + 20, height, depth + 20]} />
      <meshStandardMaterial color="royalblue" transparent opacity={0.3} />
    </mesh>
  )
}

function MovementInput({ title, movement, setMovement }) {
  return (
    <>
      <p className="capitalize">{title}</p>
      <input
        type="range"
        min={-Math.PI}
        max={Math.PI}
        step={0.01}
        onChange={(e) =>
          setMovement((m) => ({ ...m, [title]: parseFloat(e.target.value) }))
        }
        // onChange={(e) => setBoom(parseFloat(e.target.value))}
        name={title}
        value={movement[title]}
      />
    </>
  )
}

const TreeDemo = () => {
  const [movement, setMovement] = useState({
    base: 0,
    boom: 1.5,
    stick: 0,
    bucket: 0,
  })
  const [message, setMessage] = useState("")
  const [index, setIndex] = useState(0)
  const controllerRef = useRef(null)
  const [boxO, setBoxO] = useState([0, 0, 0])
  const [sceneOffset, setSceneOffset] = useState([0, 0, 0])
  const usefulData = fieldData.features.filter(
    (d) => d.geometry.coordinates[0][2] !== 0
  )

  const fieldEdges = {
    min: {
      x:
        Math.min(...usefulData.map((d) => d.geometry.coordinates[0][0])) -
        2410000,
      y: Math.min(...usefulData.map((d) => d.geometry.coordinates[0][2])),
      z:
        Math.min(...usefulData.map((d) => d.geometry.coordinates[0][1])) -
        300000,
    },
    max: {
      x:
        Math.max(...usefulData.map((d) => d.geometry.coordinates[0][0])) -
        2410000,
      y: Math.max(...usefulData.map((d) => d.geometry.coordinates[0][2])),
      z:
        Math.max(...usefulData.map((d) => d.geometry.coordinates[0][1])) -
        300000,
    },
  }

  const fieldCenter = [
    (fieldEdges.min.x + fieldEdges.max.x) / 2,
    (fieldEdges.min.y + fieldEdges.max.y) / 2,
    (fieldEdges.min.z + fieldEdges.max.z) / 2,
  ]

  const fieldSize = {
    width: fieldEdges.max.x - fieldEdges.min.x,
    height: fieldEdges.max.y - fieldEdges.min.y,
    depth: fieldEdges.max.z - fieldEdges.min.z,
  }

  // useEffect(() => {
  //   setBoxO([fieldCenter[0], 1, fieldCenter[2]]);
  // }, [fieldCenter[0], fieldCenter[1], fieldCenter[2]]);

  const handleCollision = (event) => {
    console.log("onCollisionEnter", event)
    setMessage("Collision event fired")
  }

  const handleIntersection = (event) => {
    console.log("onIntersectionEnter", event)
    setMessage("Intersection event fired")
  }

  const updatePos = () => {
    const data = usefulData[index]
    const [xi, yi, zi] = data?.geometry?.coordinates[0] || [0, 0, 0]
    const [xo, yo, zo] = data?.geometry?.coordinates[1] || [0, 0, 0]
    setSceneOffset([-xi + 2410000, -zi, -yi + 300000])
    setMessage(
      JSON.stringify({ index, coordss: [xi, yi, zi, xo, yo, zo] }, null, 2)
    )
    // @ts-expect-error no ts values

    controllerRef.current?.setLookAt(0, 5, 10, 0, 0, 0, true)
  }

  const handleButton = () => {
    setIndex((i) => (i < usefulData.length - 1 ? i + 1 : 0))
    updatePos()
  }

  return (
    <div className="h-screen bg-gray-900 font-bold text-gray-300">
      <div className="absolute z-10 p-4">
        <MovementInput
          title="boom"
          movement={movement}
          setMovement={setMovement}
        />
        <MovementInput
          title="stick"
          movement={movement}
          setMovement={setMovement}
        />
        <MovementInput
          title="bucket"
          movement={movement}
          setMovement={setMovement}
        />
        <MovementInput
          title="base"
          movement={movement}
          setMovement={setMovement}
        />

        <br />
        <Button onClick={handleButton}>Inverter</Button>
        {/* <Button onClick={handle10xButton}>+10</Button> */}
        <pre className="text-xs">{message}</pre>
      </div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <CameraControls ref={controllerRef} />
        <pointLight
          position={[+100, +100, +100]}
          decay={0}
          intensity={Math.PI}
        />
        <OrbitControls makeDefault />
        <group position={new Vector3(...sceneOffset)}>
          <axesHelper />
          <GeoJsonLayer data={{ features: usefulData }} lineWidth={2} />
          <Physics colliders="cuboid">
            <ExcavatorModel movement={movement} position={boxO} />
            {/* <Box origin={boxO} movement={movement} /> */}
            <RigidBody
              position={new Vector3(...fieldCenter)}
              gravityScale={0}
              type="fixed"
              sensor
              colliders="cuboid"
              onIntersectionEnter={handleIntersection}
              onCollisionEnter={handleCollision}
            >
              <FieldBox
                width={fieldSize.width}
                height={fieldSize.height}
                depth={fieldSize.depth}
                setBoxO={setBoxO}
                fieldCenter={fieldCenter}
              />
            </RigidBody>
          </Physics>
        </group>
      </Canvas>
    </div>
  )
}

export default TreeDemo
