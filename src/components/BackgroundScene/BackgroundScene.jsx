import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export function BackgroundScene() {
    const pointsRef = useRef();
    const { pointer } = useThree(); // normalized mouse in [-1, 1]

    // 200 random points (fixed once)
    const count = 200;
    const basePositions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3 + 0] = (Math.random() - 0.5) * 40;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 25;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return arr;
    }, []);

    // mutable copy used for animation
    const positions = useMemo(() => basePositions.slice(), [basePositions]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const t = state.clock.getElapsedTime();
        const posAttr = pointsRef.current.geometry.attributes.position;

        // your original slow rotation so things move a bit
        pointsRef.current.rotation.y = t * 0.1;

        // map pointer [-1,1] into same space as particles
        const mx = pointer.x * 20;    // roughly ±20 like x spread
        const my = pointer.y * 12.5;  // roughly ±12.5 like y spread
        const R = 6;                  // radius of influence

        for (let i = 0; i < count; i++) {
            const idx = i * 3;

            const ox = basePositions[idx];
            const oy = basePositions[idx + 1];
            const oz = basePositions[idx + 2];

            // start from original positions (no wobble; just rotation + push)
            let nx = ox;
            let ny = oy;

            // distance to cursor in same coordinate system
            const dx = nx - mx;
            const dy = ny - my;
            const dist = Math.hypot(dx, dy);

            if (dist < R) {
                const strength = (R - dist) / R;  // 0..1
                const push = 2.5 * strength;      // push amount
                const ux = dx / (dist || 1);
                const uy = dy / (dist || 1);
                nx += ux * push;
                ny += uy * push;
            }

            positions[idx] = nx;
            positions[idx + 1] = ny;
            positions[idx + 2] = oz;

            posAttr.array[idx] = nx;
            posAttr.array[idx + 1] = ny;
            posAttr.array[idx + 2] = oz;
        }

        posAttr.needsUpdate = true;
    });

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
