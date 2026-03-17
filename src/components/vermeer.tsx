import { RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { Vector3 } from "three"

// useGLTF.preload("/Vermeer T755III Pipeline Trencher.glb")

export function Vermeer({ position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/Vermeer T755III Pipeline Trencher.glb")
  const vermeer = useRef(null)

  useEffect(() => {
    if (!vermeer.current) return
    const next = new Vector3(...position)
    // @ts-expect-error no ts values
    vermeer.current.setNextKinematicTranslation(next)
  }, [position])

  return (
    <RigidBody ref={vermeer} type="kinematicPosition" colliders="cuboid">
      <group {...props} dispose={null}>
        <group position={[0.837, 2.098, 1.672]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials["Yellow Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.Rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["Matte Black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials["Matte White"]}
          />
        </group>
        <group position={[0.366, 2.142, 1.036]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials["Yellow Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials.Rubber}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Cabin_Stairs.geometry}
          material={materials["Metal Dark"]}
          position={[0.376, 0.714, 1.479]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Cabin_Glass.geometry}
          material={materials.Glass}
          position={[-0.265, 2.22, 0.977]}
          scale={0.01}
        />
        <group position={[0.354, 1.609, 1.213]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials["Matte Black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials["Matte Gray"]}
          />
        </group>
        <group position={[0.354, 1.967, 0.637]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005.geometry}
            material={materials["Matte Gray"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005_1.geometry}
            material={materials.Screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Cabin_Control_Rotate.geometry}
          material={materials["Matte Gray"]}
          position={[0.649, 1.974, 0.686]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_02.geometry}
          material={materials["Metal Dark"]}
          position={[1.962, 0.455, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_01.geometry}
          material={materials["Metal Dark"]}
          position={[-0.064, 0.399, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_03.geometry}
          material={materials["Metal Dark"]}
          position={[3.52, 0.387, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_06.geometry}
          material={materials["Metal Dark"]}
          position={[1.19, 0.367, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_Motion_3.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_Motion_2.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_Motion_4.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_Motion_1.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_04.geometry}
          material={materials["Metal Dark"]}
          position={[2.54, 0.367, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Right_Wheel_05.geometry}
          material={materials["Metal Dark"]}
          position={[1.865, 0.367, 0.596]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_03.geometry}
          material={materials["Metal Dark"]}
          position={[3.52, 0.387, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_06.geometry}
          material={materials["Metal Dark"]}
          position={[1.19, 0.367, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_01.geometry}
          material={materials["Metal Dark"]}
          position={[-0.064, 0.399, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_02.geometry}
          material={materials["Metal Dark"]}
          position={[1.962, 0.455, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_Motion_3.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_Motion_1.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_Motion_2.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_Motion_4.geometry}
          material={materials["Metal Dark"]}
          position={[1.729, 0.388, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_04.geometry}
          material={materials["Metal Dark"]}
          position={[2.54, 0.367, -1.456]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Left_Wheel_05.geometry}
          material={materials["Metal Dark"]}
          position={[1.865, 0.367, -1.456]}
          scale={0.01}
        />
        <group position={[-0.656, 0.872, -0.43]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh027.geometry}
            material={materials["Metal Dark"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh027_1.geometry}
            material={materials.Steel}
          />
        </group>
        <group position={[-0.177, 1.537, -0.43]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh028.geometry}
            material={materials["Yellow Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh028_1.geometry}
            material={materials["Matte Black"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Part_2.geometry}
          material={materials["Metal Dark"]}
          position={[-3.681, 1.248, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Part_6.geometry}
          material={materials["Metal Dark"]}
          position={[-1.813, 1.412, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Part_3.geometry}
          material={materials["Metal Dark"]}
          position={[0.369, 1.498, -0.627]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_13.geometry}
          material={materials["Metal Dark"]}
          position={[-3.851, 1.771, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_1.geometry}
          material={materials["Metal Dark"]}
          position={[-4.208, 1.09, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_2.geometry}
          material={materials["Metal Dark"]}
          position={[-3.703, 0.698, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_12.geometry}
          material={materials["Metal Dark"]}
          position={[-3.005, 1.87, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_3.geometry}
          material={materials["Metal Dark"]}
          position={[-2.853, 0.762, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_4.geometry}
          material={materials["Metal Dark"]}
          position={[-2.004, 0.838, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_5.geometry}
          material={materials["Metal Dark"]}
          position={[-1.157, 0.928, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_11.geometry}
          material={materials["Metal Dark"]}
          position={[-2.157, 1.953, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_6.geometry}
          material={materials["Metal Dark"]}
          position={[-0.313, 1.042, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_7.geometry}
          material={materials["Metal Dark"]}
          position={[0.521, 1.208, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_8.geometry}
          material={materials["Metal Dark"]}
          position={[0.389, 1.827, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_9.geometry}
          material={materials["Metal Dark"]}
          position={[-0.458, 1.927, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Motion_10.geometry}
          material={materials["Metal Dark"]}
          position={[-1.306, 1.999, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Part_4.geometry}
          material={materials["Metal Dark"]}
          position={[-1.033, 1.886, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Main_Hand_Part_5.geometry}
          material={materials["Metal Dark"]}
          position={[-1.66, 1.894, -0.43]}
          scale={0.01}
        />
        <group position={[1.471, 1.464, -0.44]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh047.geometry}
            material={materials["Yellow Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_1.geometry}
            material={materials["Matte Black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_2.geometry}
            material={materials.Steel}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Element_01.geometry}
          material={materials["Yellow Paint"]}
          position={[2.067, 2.519, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Element_Wire.geometry}
          material={materials["Matte Black"]}
          position={[1.091, 2.097, -0.698]}
          scale={0.01}
        />
        <group position={[4.506, 0.752, -0.43]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh050.geometry}
            material={materials["Metal Dark"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh050_1.geometry}
            material={materials["Matte White"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_8.geometry}
          material={materials["Yellow Paint"]}
          position={[3.047, 1.404, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_6.geometry}
          material={materials["Yellow Paint"]}
          position={[4.112, 1.893, 0.305]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_7.geometry}
          material={materials["Yellow Paint"]}
          position={[3.132, 1.893, 0.305]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_1.geometry}
          material={materials["Metal Dark"]}
          position={[3.356, 2.349, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_5.geometry}
          material={materials["Yellow Paint"]}
          position={[4.112, 1.893, -1.165]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_4.geometry}
          material={materials["Yellow Paint"]}
          position={[3.132, 1.893, -1.165]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vermeer_T755III_Back_Part_3.geometry}
          material={materials["Yellow Paint"]}
          position={[3.418, 2.31, -0.378]}
          scale={0.01}
        />
        <group position={[3.55, 1.213, -0.43]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh058.geometry}
            material={materials["Yellow Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh058_1.geometry}
            material={materials.Rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh058_2.geometry}
            material={materials["Matte Black"]}
          />
        </group>
      </group>
    </RigidBody>
  )
}
