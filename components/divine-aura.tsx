"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DivineAura() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Clear any existing duplicated canvases from React Strict Mode
    mountRef.current.innerHTML = '';

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.02); // More subtle fog

    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 24); // Pulled further back to show COMPLETE figure

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 2. Majestic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffedd5, 2);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0xf59e0b, 15, 30);
    scene.add(pointLight);

    // 3. MASTER GROUP FOR ALL ELEMENTS
    const spiritualAura = new THREE.Group();
    scene.add(spiritualAura);

    // --- A. CENTRAL CORE (Bindu) ---
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.5,
      metalness: 1,
      roughness: 0,
    });
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), coreMat);
    spiritualAura.add(core);

    // Core Glow (Aura)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xfb923c,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 32), glowMat);
    spiritualAura.add(glow);

    // --- B. DIVINE LOTUS PETALS (Mandala) ---
    const lotusGroup = new THREE.Group();
    const petalCount = 12;
    const petalGeo = new THREE.TorusGeometry(3.5, 0.05, 16, 50);
    const petalMat = new THREE.MeshStandardMaterial({
      color: 0xfde68a,
      emissive: 0xd97706,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.9
    });

    for (let i = 0; i < petalCount; i++) {
      const petal = new THREE.Mesh(petalGeo, petalMat);
      // Scale to make an oval (petal shape)
      petal.scale.set(0.3, 1, 1);
      // Rotate spread outwards
      petal.rotation.z = (Math.PI / (petalCount/2)) * i;
      lotusGroup.add(petal);
    }
    spiritualAura.add(lotusGroup);

    // --- C. OUTER CHAKRA RINGS (Sudarshan Rings) ---
    const ringGroup = new THREE.Group();
    const thickRingMat = new THREE.MeshStandardMaterial({
      color: 0xffb703,
      emissive: 0xf59e0b,
      emissiveIntensity: 1,
      metalness: 0.8,
      roughness: 0.2
    });
    
    // Inner spinning ring
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(5, 0.1, 16, 100), thickRingMat);
    ringGroup.add(innerRing);
    
    // Outer spinning ring with dashes/teeth effect
    const outerRingGeo = new THREE.TorusGeometry(6, 0.08, 16, 80, Math.PI * 2);
    const outerRing = new THREE.Mesh(outerRingGeo, new THREE.MeshStandardMaterial({
      color: 0xffedd5, emissive: 0xfbbf24, emissiveIntensity: 1.5, wireframe: true
    }));
    ringGroup.add(outerRing);
    
    spiritualAura.add(ringGroup);

    // --- D. NAVAGRAHA ORBITING SPHERES (9 Planets / Divinities) ---
    const orbitGroup = new THREE.Group();
    const planets: THREE.Mesh[] = [];
    const planetCount = 9;
    
    for(let i=0; i < planetCount; i++) {
        const planet = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({ 
                color: 0xffffff, 
                emissive: 0xfcd34d, 
                emissiveIntensity: 2,
                transparent: true,
                opacity: 0.9
            })
        );
        const angle = (Math.PI * 2 / planetCount) * i;
        const radius = 7.5;
        planet.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        planets.push(planet);
        orbitGroup.add(planet);
    }
    
    // Tilt the orbit
    orbitGroup.rotation.x = Math.PI / 3;
    orbitGroup.rotation.y = Math.PI / 6;
    spiritualAura.add(orbitGroup);

    // --- E. CELESTIAL DUST (Particles) ---
    const particleCount = 1500;
    const posArray = new Float32Array(particleCount * 3);
    for(let i=0; i < particleCount * 3; i++) {
        // Spread particles in a wide 3D space
        posArray[i] = (Math.random() - 0.5) * 25;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffedd5,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --- MOUSE PARALLAX SETUP ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX) * 0.0005;
        mouseY = (event.clientY - windowHalfY) * 0.0005;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // 1. Core Pulsing (breathing effect)
      const pulse = 1 + Math.sin(elapsedTime * 4) * 0.1; // Faster pulse
      core.scale.set(pulse, pulse, pulse);
      glow.scale.set(pulse * 1.15, pulse * 1.15, pulse * 1.15);

      // 2. Lotus Petals rotating gracefully like a flower
      lotusGroup.rotation.z -= 0.015; // Faster steady rotation
      // Majestic 3D flip movement
      lotusGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;
      lotusGroup.rotation.y = Math.cos(elapsedTime * 0.4) * 0.3;

      // 3. Chakra Rings spinning (continuous high-speed rotation)
      innerRing.rotation.z -= 0.04;
      outerRing.rotation.z += 0.06;
      ringGroup.rotation.x = Math.PI / 4 + Math.sin(elapsedTime * 0.8) * 0.15;
      ringGroup.rotation.y = Math.cos(elapsedTime * 0.6) * 0.15;

      // 4. Navagrahas orbiting the center constantly
      orbitGroup.rotation.z -= 0.02;
      // Make each planet throb individually
      planets.forEach((p, i) => {
         const s = 1 + Math.sin(elapsedTime * 3 + i) * 0.2;
         p.scale.set(s,s,s);
      });

      // 5. Celestial Dust slowly rotating
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.z = elapsedTime * 0.01;

      // 6. Smooth Mouse Parallax
      targetX = mouseX;
      targetY = mouseY;
      spiritualAura.rotation.y += 0.05 * (targetX - spiritualAura.rotation.y);
      spiritualAura.rotation.x += 0.05 * (targetY - spiritualAura.rotation.x);

      // Master hover floating effect
      spiritualAura.position.y = Math.sin(elapsedTime * 1) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[600px] md:h-[800px] relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#020617] via-slate-950 to-[#020617] border border-amber-500/10 shadow-[0_0_50px_rgba(245,158,11,0.05)]">
      
      <div className="absolute top-12 left-0 right-0 z-10 text-center pointer-events-none px-4">
         <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-orange-500 mb-4 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
           The Eternal Lotus & Sudarshan
         </h2>
         <p className="text-amber-200/60 font-light tracking-wide max-w-lg mx-auto text-sm md:text-base">
           Witness the cosmic rotation. Hover to interact with the sacred geometry of the divine Lotus and Navagraha orbits.
         </p>
      </div>

      <div ref={mountRef} className="w-full h-full cursor-pointer mix-blend-screen" />
      
      {/* Fog vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(2,6,23,1)]" />
    </div>
  );
}
