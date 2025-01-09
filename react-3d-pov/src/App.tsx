import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Bathroom = ({ theme }: { theme: string }) => {
  const themeColors = {
    light: {
      wall: "lightblue",
      floor: "gray",
      sink: "white",
      tileLine: "black",
      mirror: "blue",
      mat: "#4169E1",
    },
    dark: {
      wall: "gray",
      floor: "darkgray",
      sink: "silver",
      tileLine: "white",
      mirror: "black",
      mat: "#2F4F4F",
    },
    beach: {
      wall: "skyblue",
      floor: "sand",
      sink: "lightgreen",
      tileLine: "gold",
      mirror: "lightblue",
      mat: "#87CEEB",
    },
    modern: {
      wall: "white",
      floor: "lightgray",
      sink: "black",
      tileLine: "gray",
      mirror: "silver",
      mat: "#A9A9A9",
    },
    vintage: {
      wall: "#D1C6B1",
      floor: "#C3B299",
      sink: "#F3E5AB",
      tileLine: "#A68C45",
      mirror: "#B78C56",
      mat: "#DEB887",
    },
    forest: {
      wall: "#2E8B57",
      floor: "#556B2F",
      sink: "#8B4513",
      tileLine: "#D2B48C",
      mirror: "#228B22",
      mat: "#8FBC8F",
    },
    sunset: {
      wall: "#FF7F50",
      floor: "#FFD700",
      sink: "#FF6347",
      tileLine: "#FF4500",
      mirror: "#FF8C00",
      mat: "#FFA07A",
    },
  };

  const currentTheme = themeColors[theme as keyof typeof themeColors] || themeColors.light;

  return (
    <>
      {/* Original Elements */}
      {/* Walls */}
      <mesh position={[0, 1.5, -5]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color={currentTheme.wall} />
      </mesh>
      <mesh position={[5, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color={currentTheme.wall} />
      </mesh>
      <mesh position={[-5, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color={currentTheme.wall} />
      </mesh>
      <mesh position={[0, 1.5, 5]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color={currentTheme.wall} />
      </mesh>

      {/* Floor with tiles */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={currentTheme.floor} />
      </mesh>
      {/* Tile lines */}
      <gridHelper args={[10, 20, currentTheme.tileLine, currentTheme.tileLine]} position={[0, 0.01, 0]} />

      {/* Existing Items */}
      {/* Sink */}
      <mesh position={[0, 1.2, -4]}>
        <boxGeometry args={[1, 0.5, 0.5]} />
        <meshStandardMaterial color={currentTheme.sink} />
      </mesh>
      <mesh position={[0, 0.7, -4]}>
        <cylinderGeometry args={[0.25, 0.25, 0.6, 32]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Toilet */}
      <mesh position={[3, 0.6, -4]}>
        <cylinderGeometry args={[0.5, 0.5, 0.6, 32]} />
        <meshStandardMaterial color={currentTheme.sink} />
      </mesh>
      <mesh position={[3, 1.2, -4]}>
        <boxGeometry args={[0.6, 0.4, 0.6]} />
        <meshStandardMaterial color={currentTheme.sink} />
      </mesh>

      {/* Mirror */}
      <mesh position={[0, 2, -4.05]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial color={currentTheme.mirror} metalness={1} roughness={0.05} />
      </mesh>

      {/* Window */}
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="#eee" transparent opacity={0.5} metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position={[-4.01, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="black" wireframe />
      </mesh>

      {/* Previous Additions */}
      {/* Towel Rack */}
      <mesh position={[4, 1.8, -4.8]}>
        <boxGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[4, 1.6, -4.4]}>
        <boxGeometry args={[0.1, 0.8, 0.3]} />
        <meshStandardMaterial color={currentTheme.wall} roughness={0.8} />
      </mesh>

      {/* Plant */}
      <mesh position={[-4.5, 0.4, -4.5]}>
        <cylinderGeometry args={[0.3, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <group position={[-4.5, 0.7, -4.5]}>
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[
            Math.sin(i * Math.PI * 0.4) * 0.2,
            Math.random() * 0.3,
            Math.cos(i * Math.PI * 0.4) * 0.2
          ]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
        ))}
      </group>

      {/* Shelf with Items */}
      <mesh position={[-3, 2, -4.8]}>
        <boxGeometry args={[2, 0.05, 0.4]} />
        <meshStandardMaterial color={currentTheme.tileLine} metalness={0.5} />
      </mesh>
      <mesh position={[-3.5, 2.15, -4.6]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      <mesh position={[-3, 2.15, -4.6]}>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#4682B4" />
      </mesh>
      <mesh position={[-2.5, 2.15, -4.6]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FF69B4" />
      </mesh>

      {/* Bathtub */}
      <group position={[-3.5, 0.4, 3]}>
        {/* Tub Base */}
        <mesh>
          <boxGeometry args={[2.5, 0.8, 1.8]} />
          <meshStandardMaterial color={currentTheme.sink} />
        </mesh>
        {/* Tub Interior */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[2.3, 0.7, 1.6]} />
          <meshStandardMaterial color={currentTheme.sink} metalness={0.2} roughness={0.3} />
        </mesh>
        {/* Faucet */}
        <mesh position={[-1, 0.8, -0.7]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
          <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-1, 0.9, -0.6]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
          <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Bathroom Mat */}
      <mesh position={[0, 0.02, -3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color={currentTheme.mat} roughness={0.8} />
      </mesh>

      {/* Toilet Paper Holder with Roll */}
      <group position={[3.5, 1.2, -3.8]}>
        {/* Holder */}
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
          <meshStandardMaterial color="silver" metalness={0.8} />
        </mesh>
        {/* Paper Roll */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.25, 16]} />
          <meshStandardMaterial color="white" roughness={0.5} />
        </mesh>
      </group>

      {/* Soap Dispenser */}
      <group position={[0.5, 1.45, -4]}>
        {/* Dispenser Body */}
        <mesh>
          <boxGeometry args={[0.15, 0.25, 0.15]} />
          <meshStandardMaterial color="#B8B8B8" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Pump Top */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="silver" metalness={0.8} />
        </mesh>
      </group>

      {/* NEW ADDITIONS */}
      {/* 1. Shower Caddy with Shampoo Bottles */}
      <group position={[-2.2, 1.5, 3.8]}>
        {/* Caddy Frame */}
        <mesh>
          <boxGeometry args={[0.5, 0.05, 0.3]} />
          <meshStandardMaterial color="silver" metalness={0.6} />
        </mesh>
        {/* Shampoo Bottles */}
        <mesh position={[-0.15, 0.2, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
          <meshStandardMaterial color="#FF69B4" />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.25, 8]} />
          <meshStandardMaterial color="#4682B4" />
        </mesh>
        <mesh position={[0.15, 0.2, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.28, 8]} />
          <meshStandardMaterial color="#90EE90" />
        </mesh>
      </group>

      {/* 2. Wall Clock */}
      <group position={[3, 2.3, -4.05]}>
        {/* Clock Face */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Clock Hands */}
        <mesh position={[0, 0, 0.03]} rotation={[0, 0, Math.PI / 3]}>
          <boxGeometry args={[0.2, 0.02, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, 0, 0.03]} rotation={[0, 0, Math.PI / 1.5]}>
          <boxGeometry args={[0.15, 0.02, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

      {/* 3. Trash Bin */}
      <group position={[1, 0.4, -4]}>
        {/* Bin Body */}
        <mesh>
          <cylinderGeometry args={[0.2, 0.15, 0.8, 16]} />
          <meshStandardMaterial color="#A9A9A9" metalness={0.3} />
        </mesh>
        {/* Bin Rim */}
        <mesh position={[0, 0.41, 0]}>
          <torusGeometry args={[0.2, 0.02, 16, 32]} />
          <meshStandardMaterial color="#808080" metalness={0.5} />
        </mesh>
      </group>

      {/* 4. Hanging Air Plant Terrarium */}
      <group position={[-4, 2.5, -4]}>
        {/* Glass Globe */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={0.6} />
        </mesh>
     {/* Air Plant */}
     <group position={[0, 0, 0]}>
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[
              Math.sin(i * Math.PI * 0.5) * 0.08,
              Math.cos(i * Math.PI * 0.5) * 0.08 - 0.02,
              Math.sin(i * Math.PI * 0.25) * 0.08
            ]}>
              <cylinderGeometry args={[0.01, 0.005, 0.1, 8]} />
              <meshStandardMaterial color="#556B2F" />
            </mesh>
          ))}
        </group>
        {/* Hanging Wire */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4, 8]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      </group>
    </>
  );
};

const ThemePicker = ({ setTheme }: { setTheme: (theme: string) => void }) => {
  return (
    <div className="fixed top-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg z-50">
      <label htmlFor="theme" className="text-gray-800 mr-2 font-medium">
        Theme:
      </label>
      <select
        id="theme"
        onChange={(e) => setTheme(e.target.value)}
        defaultValue="light"
        className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="beach">Beach</option>
        <option value="modern">Modern</option>
        <option value="vintage">Vintage</option>
        <option value="forest">Forest</option>
        <option value="sunset">Sunset</option>
      </select>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      position: "fixed",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      <ThemePicker setTheme={setTheme} />
      <Canvas
        camera={{ position: [0, 5, 10] }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />
        <spotLight position={[-5, 5, 5]} angle={Math.PI / 6} intensity={0.5} castShadow />
        
        {/* Bright overhead light */}
        <spotLight position={[0, 5, 0]} angle={Math.PI / 6} intensity={1} color="white" />
        
        {/* Bathroom Scene */}
        <Bathroom theme={theme} />
        
        {/* Controls */}
        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>
    </div>
  );
};

export default App;