import { useState } from "react";
import "./App.css";
import BackGround from "./components/BackGround";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const text = ["Hello World", "Hello World 2", "Hello World 3"];
const images = ["/download.jpg", "/download1.jpg", "/download.jpg", "/download1.jpg"];

function App() {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % images.length);
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <BackGround page={page}/>
      <Navbar />
      <Hero
        handleNext={handleNext}
        handlePrev={handlePrev}
        page={page}
      />
    </div>
  );
}

export default App;
