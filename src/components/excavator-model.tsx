import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"

export function ExcavatorModel({
  movement = { stick: 0, boom: 0, base: 0, bucket: 0 },
  position = [0, 0, 0],
  ...props
}) {
  const { nodes } = useGLTF("/Excavator Simple.glb")
  const excavator = useRef(null)

  useEffect(() => {
    if (!excavator.current) return
    const next = new Vector3(...position)
    // @ts-expect-error no ts values
    excavator.current.setNextKinematicTranslation(next)
  }, [position])

  useEffect(() => {
    if (!excavator.current) return
    if (nodes.Stick) {
      nodes.Stick.rotation.x = movement.stick
    }
    if (nodes.Boom0) {
      nodes.Boom0.rotation.x = movement.boom
    }
    if (nodes.Bucket) {
      nodes.Bucket.rotation.x = movement.bucket
    }
    if (nodes.Bone) {
      nodes.Bone.rotation.z = movement.base
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movement])

  return (
    <RigidBody ref={excavator} type="kinematicPosition" colliders="cuboid">
      <group {...props} dispose={null}>
        <group>
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload("/Excavator Simple.glb")
