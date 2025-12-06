import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import starImage from "../../assets/star.svg"

export function BackgroundScene() {
    const pointsRef = useRef();
    const mouse = useRef({ x: 0, y: 0 });
    const texture = useMemo(
        () => new THREE.TextureLoader().load(starImage),
        []
    );

    // 200 random points
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
    const positions = useMemo(() => basePositions.slice(), [basePositions]);

    // listen on the whole window
    useEffect(() => {
        function handleMove(e) {
            const xNorm = e.clientX / window.innerWidth;   // 0..1
            const yNorm = e.clientY / window.innerHeight;  // 0..1
            mouse.current.x = (xNorm - 0.5) * 40;          // match ±20
            mouse.current.y = (0.5 - yNorm) * 25;          // match ±12.5
        }
        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const t = state.clock.getElapsedTime();
        const posAttr = pointsRef.current.geometry.attributes.position;

        pointsRef.current.rotation.y = t * 0.1;

        const mx = mouse.current.x;
        const my = mouse.current.y;
        const R = 10;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;

            const ox = basePositions[idx];
            const oy = basePositions[idx + 1];
            const oz = basePositions[idx + 2];

            let nx = ox;
            let ny = oy;

            const dx = nx - mx;
            const dy = ny - my;
            const dist = Math.hypot(dx, dy);

            if (dist < R) {
                const strength = (R - dist) / R;
                const push = 6.0 * strength;
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
                    size={0.25}
                    map={texture}
                    color="#f97316"
                    transparent
                    alphaTest={0.2}
                />
            </points>
        </>
    );
}
