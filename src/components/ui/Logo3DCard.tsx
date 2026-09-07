"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Logo3DCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x275e95, 4, 50);
    pointLight1.position.set(3, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 2.5, 50);
    pointLight2.position.set(-3, -2, 4);
    scene.add(pointLight2);

    const rimLight = new THREE.PointLight(0xffffff, 1.5, 30);
    rimLight.position.set(0, 0, -4);
    scene.add(rimLight);

    // Logo group
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Load logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load("/Logo.webp");
    logoTexture.colorSpace = THREE.SRGBColorSpace;

    // Front face — logo on a rounded box shape using BoxGeometry
    const boxGeo = new THREE.BoxGeometry(2.2, 2.2, 0.25, 4, 4, 1);

    // Front material with logo
    const frontMaterial = new THREE.MeshPhysicalMaterial({
      map: logoTexture,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transparent: true,
    });

    // Side/back material — glossy dark navy
    const sideMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a3a5c,
      roughness: 0.2,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    // Back material — subtle gradient
    const backMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f2940,
      roughness: 0.3,
      metalness: 0.4,
      clearcoat: 0.6,
    });

    // Apply materials: [+x, -x, +y, -y, +z (front), -z (back)]
    const logoBox = new THREE.Mesh(boxGeo, [
      sideMaterial, sideMaterial,
      sideMaterial, sideMaterial,
      frontMaterial, backMaterial,
    ]);
    logoGroup.add(logoBox);

    // Outer glow ring — orbiting torus
    const torusGeo = new THREE.TorusGeometry(1.35, 0.03, 16, 100);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x275e95,
      emissive: 0x275e95,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.7,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2;
    logoGroup.add(torus);

    // Secondary ring
    const torusGeo2 = new THREE.TorusGeometry(1.5, 0.02, 16, 80);
    const torusMat2 = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.5,
    });
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
    torus2.rotation.x = Math.PI / 3;
    torus2.rotation.y = Math.PI / 6;
    logoGroup.add(torus2);

    // Particle field around logo
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.6 + Math.random() * 0.8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x275e95,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    logoGroup.add(particles);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Touch support
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
      }
    };
    container.addEventListener("touchmove", handleTouch, { passive: true });

    // Animation
    const timer = new THREE.Timer();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      timer.update();
      const elapsed = timer.getElapsed();

      // Smooth mouse follow
      targetRotation.y = mouse.x * 0.5;
      targetRotation.x = mouse.y * 0.3;
      logoGroup.rotation.y += (targetRotation.y - logoGroup.rotation.y) * 0.04;
      logoGroup.rotation.x += (targetRotation.x - logoGroup.rotation.x) * 0.04;

      // Idle floating
      logoGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;

      // Logo box subtle breathing
      const breathe = 1 + Math.sin(elapsed * 1.2) * 0.02;
      logoBox.scale.set(breathe, breathe, breathe);

      // Rotate rings
      torus.rotation.z = elapsed * 0.3;
      torus2.rotation.z = -elapsed * 0.2;

      // Rotate particles
      particles.rotation.y = elapsed * 0.08;
      particles.rotation.x = elapsed * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth || 300;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      boxGeo.dispose();
      frontMaterial.dispose();
      sideMaterial.dispose();
      backMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      torusGeo2.dispose();
      torusMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      logoTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[280px] cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Zeki Studio Logo"
    />
  );
}
