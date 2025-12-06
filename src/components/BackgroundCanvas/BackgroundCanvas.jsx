import { Canvas } from "@react-three/fiber";
import { BackgroundScene } from "../BackgroundScene/BackgroundScene";

export default function BackgroundCanvas() {
    return (
        <Canvas
            className="background-canvas"
            camera={{ position: [0, 0, 25], fov: 60 }}
            gl={{ antialias: true, alpha: false }}
        >
            <BackgroundScene />
        </Canvas>
    );
}
