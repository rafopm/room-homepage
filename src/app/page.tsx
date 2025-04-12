
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="md:h-screen lg:h-full">
      <Hero />
      <About />
    </div>
  );
}
