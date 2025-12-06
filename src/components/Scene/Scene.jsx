import { Canvas } from '@react-three/fiber';
import { ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { motion } from 'framer-motion';


function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
        >
            <color attach="background" args={['#000011']} />
            <fog attach="fog" args={['#000011', 1, 100]} />
            <ScrollControls pages={5}>
                <ambientLight intensity={0.3} />
                <ParticleRings />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.1} mipmapBlur />
                </EffectComposer>
            </ScrollControls>
        </Canvas>
    );
}
