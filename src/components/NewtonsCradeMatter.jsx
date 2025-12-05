import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function NewtonsCradleMatter() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Constraint,
      Body,
      Mouse,
      MouseConstraint,
      Query,
      Events,
    } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    const container = sceneRef.current;
    const width = 750;
    const height = 520;

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 2,
      },
    });

    // ----- CENTERED LAYOUT -----
    const ballRadius = 22;
    const numBalls = 5;
    const spacing = ballRadius * 2.0;

    // vertical centering: anchor roughly at 1/4 height, strings reach mid
    const anchorY = height * 0.5;      // 0.25 * 520 ≈ 130
    const stringLength = height * 0.25; // 0.25 * 520 ≈ 130
    const totalWidth = (numBalls - 1) * spacing;

    // center group horizontally
    const startX = width / 2 - totalWidth / 2;

    const ballColors = ['#0B3B75', '#F3F0D3', '#FF6A00', '#F3F0D3', '#FF6A00'];

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

    // initial pull (kept modest so it stays inside)
    Body.setPosition(balls[0], {
      x: balls[0].position.x - 45,
      y: balls[0].position.y - 15,
    });
    Body.setVelocity(balls[0], { x: 0, y: 0 });

    // --- Mouse interaction (first and last ball) ---
    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    const allowed = [balls[0], balls[balls.length - 1]];

    Events.on(mouseConstraint, 'mousedown', () => {
      const hit = Query.point(allowed, mouse.position);
      console.log('clicked');
      if (hit.length === 0) {
        mouseConstraint.body = null;
      }
    });

    Events.on(mouseConstraint, 'mouseup', () => {
      if (mouseConstraint.body) {
        console.log('Released because left mouse button was lifted');
        mouseConstraint.body = null;
        mouseConstraint.constraint.pointA = { x: 0, y: 0 };
        mouseConstraint.constraint.pointB = { x: 0, y: 0 };
      }
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    const canvas = render.canvas;
    const handleLeave = () => {
      if (mouseConstraint.body) {
         console.log('Released because mouse left the canvas while holding a ball');
        mouseConstraint.body = null;
        mouseConstraint.constraint.pointA = { x: 0, y: 0 };
        mouseConstraint.constraint.pointB = { x: 0, y: 0 };
      }
    };
    canvas.addEventListener('mouseleave', handleLeave);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      canvas.removeEventListener('mouseleave', handleLeave);
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
        width: '750px',
        height: '520px',
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid #FF6A00',
        boxSizing: 'border-box',
      }}
    />
  );
}
