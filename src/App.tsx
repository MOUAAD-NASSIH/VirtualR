import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
      </div>
    </>
  );
}

export default App;
