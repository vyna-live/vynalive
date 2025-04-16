import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)] ">
        <Navbar/>  
        <Hero />
    </main>
  );
}
