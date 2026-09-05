"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x275e95, 3.5, 50);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 2.8, 50);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // 3. Central 3D Geometries (Dual Engineering Nodes)
    const group = new THREE.Group();
    scene.add(group);

    // Node 1: Primary Wireframe Icosahedron (Web Architecture & Cloud Core)
    const icoGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const icoWireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x275e95,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x1f4e7d,
      emissiveIntensity: 0.25,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoWireframeMaterial);
    group.add(icoMesh);

    // Node 2: Inner Faceted Core with gentle glow
    const coreGeometry = new THREE.OctahedronGeometry(0.75, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.6,
      thickness: 0.5,
      emissive: 0x275e95,
      emissiveIntensity: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // Node 3: Orbital Torus Ring (Mobile & Algorithms)
    const torusGeometry = new THREE.TorusGeometry(1.9, 0.035, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x059669,
      emissiveIntensity: 0.4,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    group.add(torusMesh);

    // Node 4: Surrounding Data Points / Particles
    const particlesCount = 48;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 2.2 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);

    // 4. Mouse Tracking & Smooth Easing
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      mouseX = (e.clientX / windowWidth - 0.5) * 2;
      mouseY = (e.clientY / windowHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Autonomous gentle idle rotation
      icoMesh.rotation.y = elapsedTime * 0.35;
      icoMesh.rotation.x = elapsedTime * 0.2;

      coreMesh.rotation.y = -elapsedTime * 0.5;
      coreMesh.rotation.z = elapsedTime * 0.3;

      torusMesh.rotation.z = elapsedTime * 0.25;
      torusMesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.3;

      particlesMesh.rotation.y = elapsedTime * 0.1;

      // Cursor interaction damping
      targetRotationY = mouseX * 0.65;
      targetRotationX = -mouseY * 0.5;

      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      // Gentle floating oscillation
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      icoGeometry.dispose();
      icoWireframeMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center pointer-events-none select-none drop-shadow-[0_12px_32px_rgba(39,94,149,0.18)]"
      aria-hidden="true"
    />
  );
}
