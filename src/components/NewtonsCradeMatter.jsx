import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function NewtonsCradleMatter() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite, Constraint, Body } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    const container = sceneRef.current;
    const width = 260;   // fixed box width
    const height = 220;  // fixed box height

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 2,
      }
    });

    // ---- layout tuned for 260x220 ----
    const ballRadius = 22;
    const numBalls = 5;
    const spacing = ballRadius * 2.0;

    const anchorY = 30;          // top anchor row
    const stringLength = 90;     // string length
    const totalWidth = (numBalls - 1) * spacing;
    const startX = width / 2 - totalWidth / 2;

      const ballColors = [
      '#0B3B75', // dark blue
      '#F3F0D3', // dark blue
      '#FF6A00', // orange
      '#F3F0D3', // off white
      '#FF6A00'  // orange
    ];

    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      const x = startX + i * spacing;

      const ball = Bodies.circle(x, anchorY + stringLength, ballRadius, {
        restitution: 0.99,
        friction: 0,
        frictionAir: 0.000005,
        density: 0.002,
        inertia: Infinity,
        render: {
          fillStyle: ballColors[i],
          strokeStyle: 'transparent',
        },
      });

      const constraint = Constraint.create({
        pointA: { x, y: anchorY },
        bodyB: ball,
        length: stringLength,
        stiffness: 0.98,
        render: {
          strokeStyle: '#D3D3D3',
          lineWidth: 2,
        },
      });

      const topDot = Bodies.circle(x, anchorY, 3, {
        isStatic: true,
        render: {
          fillStyle: '#D3D3D3',
          strokeStyle: 'transparent',
        },
      });

      balls.push(ball);
      Composite.add(world, [ball, constraint, topDot]);
    }

    // small initial pull so ball stays inside
    Body.setPosition(balls[0], {
    x: balls[0].position.x - 55,  // was -45
    y: balls[0].position.y - 20,  // was -18
    });
    Body.setVelocity(balls[0], { x: 0, y: 0 });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Runner.stop(runner);
      Render.stop(render);
      render.canvas?.remove();
      Composite.clear(world);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        width: '260px',
        height: '220px',
        pointerEvents: 'none',
      }}
    />
  );
}

