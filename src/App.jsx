import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home, Avatar } from "./pages";
import { Navbar, Sidebar } from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
}
