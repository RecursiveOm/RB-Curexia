import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroOrbital3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 8, 22);
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 50);
    purpleLight.position.set(0, 5, 5);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 2.5, 40);
    cyanLight.position.set(-10, -5, 2);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight(0xec4899, 2.0, 40);
    pinkLight.position.set(10, -5, -2);
    scene.add(pinkLight);

    // Orbital Group
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // Central Core Sphere (RBCurexia Core)
    const coreGeo = new THREE.SphereGeometry(2.2, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x16082f,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.7,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbitGroup.add(coreMesh);

    // Glowing Core Wireframe Shell
    const shellGeo = new THREE.IcosahedronGeometry(2.5, 2);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0xd8b4fe,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    orbitGroup.add(shellMesh);

    // Orbital Rings
    const ringRadii = [6.2, 8.8, 11.2];
    const rings = [];
    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.BufferGeometry();
      const points = [];
      const segments = 90;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * r, 0, Math.sin(theta) * r));
      }
      ringGeo.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: idx === 0 ? 0x9333ea : idx === 1 ? 0x06b6d4 : 0xec4899,
        transparent: true,
        opacity: 0.35 + idx * 0.1
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      ringLine.rotation.x = Math.PI * 0.18 + idx * 0.12;
      ringLine.rotation.z = idx * 0.15;
      orbitGroup.add(ringLine);
      rings.push(ringLine);
    });

    // 4 Satellite Healthcare Nodes
    const nodeData = [
      { id: 'clinics', name: 'Panacea Clinics', color: 0x8b5cf6, radius: 6.2, speed: 0.45, angle: 0 },
      { id: 'hospital', name: 'CureNEST Hospital', color: 0x06b6d4, radius: 8.8, speed: 0.35, angle: Math.PI * 0.5 },
      { id: 'labs', name: 'Labonix Labs', color: 0x38bdf8, radius: 8.8, speed: 0.35, angle: Math.PI * 1.5 },
      { id: 'pharmacy', name: 'Pharmixo Pharmacy', color: 0xec4899, radius: 11.2, speed: 0.25, angle: Math.PI * 1.1 }
    ];

    const nodeMeshes = [];
    nodeData.forEach((item) => {
      const group = new THREE.Group();

      const nGeo = new THREE.SphereGeometry(0.72, 24, 24);
      const nMat = new THREE.MeshStandardMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.65,
        roughness: 0.2,
        metalness: 0.8
      });
      const mesh = new THREE.Mesh(nGeo, nMat);
      mesh.userData = item;
      group.add(mesh);

      // Node Halo
      const haloGeo = new THREE.RingGeometry(0.9, 1.15, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: item.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI * 0.5;
      group.add(halo);

      orbitGroup.add(group);
      nodeMeshes.push({ group, mesh, data: item });
    });

    // Ambient floating particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 36;
      positions[i + 1] = (Math.random() - 0.5) * 22;
      positions[i + 2] = (Math.random() - 0.5) * 36;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xddd6fe,
      size: 0.16,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetX = x * 0.4;
      targetY = y * 0.3;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      orbitGroup.rotation.y = prefersReducedMotion ? 0 : elapsed * 0.12 + mouseX * 0.8;
      orbitGroup.rotation.x = prefersReducedMotion ? 0 : 0.28 + mouseY * 0.6;

      shellMesh.rotation.y = -elapsed * 0.18;
      shellMesh.rotation.x = elapsed * 0.1;

      // Animate Nodes on Orbits
      nodeMeshes.forEach((item, i) => {
        const curAngle = item.data.angle + (prefersReducedMotion ? 0 : elapsed * item.data.speed);
        const x = Math.cos(curAngle) * item.data.radius;
        const z = Math.sin(curAngle) * item.data.radius;
        const y = Math.sin(curAngle * 2 + i) * 1.2;
        item.group.position.set(x, y, z);
      });

      // Ambient particle drift
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);

      // Cleanup GPU Resources
      coreGeo.dispose();
      coreMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      rings.forEach(r => {
        r.geometry.dispose();
        r.material.dispose();
      });
      nodeMeshes.forEach(n => {
        n.mesh.geometry.dispose();
        n.mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Node Legend overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-center gap-2 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-[10px] font-mono text-purple-200 backdrop-blur-md">
          ● Panacea (Clinics)
        </span>
        <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-200 backdrop-blur-md">
          ● CureNEST (Hospital IPD)
        </span>
        <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-[10px] font-mono text-sky-200 backdrop-blur-md">
          ● Labonix (Labs)
        </span>
        <span className="px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/30 text-[10px] font-mono text-pink-200 backdrop-blur-md">
          ● Pharmixo (Pharmacies)
        </span>
      </div>
    </div>
  );
}
