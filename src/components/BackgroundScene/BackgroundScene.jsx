import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function BackgroundScene() {
    const pointsRef = useRef();

    // simple animation so we can SEE it
    useFrame((state) => {
        if (!pointsRef.current) return;
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.1;
    });

    // 200 random points
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    return (
        <>
            <color attach="background" args={["#02020a"]} />
            <ambientLight intensity={0.6} />
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.4}
                    color="#f97316"
                    transparent
                    opacity={0.7}
                />
            </points>
        </>
    );
}
