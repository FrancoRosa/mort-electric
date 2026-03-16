import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export function ExcavatorModel({ movement, position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/Excavator Simple.glb");
  const excavator = useRef(null);

  useEffect(() => {
    if (!excavator.current) return;
    const next = new Vector3(...position);
    excavator.current.setNextKinematicTranslation(next);
    // console.log(position);
  }, [position]);

  useEffect(() => {
    if (!excavator.current) return;
    if (nodes.Stick) {
      nodes.Stick.rotation.x = movement.stick;
    }
    if (nodes.Boom0) {
      nodes.Boom0.rotation.x = movement.boom;
    }
    if (nodes.Bucket) {
      nodes.Bucket.rotation.x = movement.bucket;
    }
    if (nodes.Bone) {
      nodes.Bone.rotation.z = movement.base;
    }
  }, [movement]);

  return (
    <RigidBody ref={excavator} type="kinematicPosition" colliders="cuboid">
      <group {...props} dispose={null}>
        <group>
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/Excavator Simple.glb");
