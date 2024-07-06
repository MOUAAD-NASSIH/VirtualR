import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 px-6">
        <Hero />
      </div>
    </>
  );
}

export default App;
