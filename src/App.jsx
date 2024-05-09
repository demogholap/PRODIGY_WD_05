import Header from "./components/Header";
import Hero from "./components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <div className=" relative w-screen h-screen">
        <Header />
        <Hero />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none select-none cursor-none">
        <Canvas style={{pointerEvents: 'none !important' }}>
          <Stars radius={50} count={500} factor={4} fade speed={1} />
        </Canvas>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
