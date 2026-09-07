"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function PortfolioHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x275e95, 4, 50);
    pointLight1.position.set(5, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 2.5, 50);
    pointLight2.position.set(-4, -2, 4);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x8b5cf6, 1.5, 50);
    pointLight3.position.set(0, 5, -3);
    scene.add(pointLight3);

    // Main group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Outer wireframe Dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(1.6, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0x275e95,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x1f4e7d,
      emissiveIntensity: 0.2,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    group.add(dodecaMesh);

    // 2. Inner glowing sphere
    const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x60a5fa,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 0.8,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.5,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphereMesh);

    // 3. Orbital ring 1
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x059669,
      emissiveIntensity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.8;
    ring1.rotation.z = Math.PI / 6;
    group.add(ring1);

    // 4. Orbital ring 2 (perpendicular)
    const ring2Geo = new THREE.TorusGeometry(1.7, 0.02, 16, 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 1.5;
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 5. Surrounding particles
    const particlesCount = 60;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 2.3 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    group.add(particlesMesh);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation
    let animationFrameId: number;
    const timer = new THREE.Timer();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      timer.update();
      const t = timer.getElapsed();

      // Idle rotations
      dodecaMesh.rotation.y = t * 0.25;
      dodecaMesh.rotation.x = t * 0.15;

      sphereMesh.rotation.y = -t * 0.4;

      ring1.rotation.z = Math.PI / 6 + t * 0.2;
      ring2.rotation.z = t * 0.15;

      particlesMesh.rotation.y = t * 0.08;
      particlesMesh.rotation.x = t * 0.04;

      // Cursor interaction
      const targetY = mouseX * 0.5;
      const targetX = -mouseY * 0.4;
      group.rotation.y += (targetY - group.rotation.y) * 0.04;
      group.rotation.x += (targetX - group.rotation.x) * 0.04;

      // Floating
      group.position.y = Math.sin(t * 1.2) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      dodecaGeo.dispose();
      dodecaMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto flex items-center justify-center pointer-events-none select-none drop-shadow-[0_12px_32px_rgba(39,94,149,0.15)]"
      aria-hidden="true"
    />
  );
}
