import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home, Avatar, Badge } from "./pages";
import { Navbar, Sidebar } from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/badge" element={<Badge />} />
        </Routes>
      </div>
    </div>
  );
}
