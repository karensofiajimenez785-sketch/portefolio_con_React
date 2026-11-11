import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { NotFound } from "./components/NotFound";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}