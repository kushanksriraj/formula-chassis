import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Avatar,
  Badge,
  Button,
  TextUtils,
  Cards,
  Navigation,
  Banners,
  Toast,
  Input,
  List,
  Modal,
} from "./pages";
import { Navbar, Sidebar } from "./components";
import { useState } from "react";

export default function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="App">
      <Navbar setShowSideBar={setShowSideBar} />
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className={showSideBar ? "wrapper shade" : "wrapper"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/input" element={<Input />} />
          <Route path="/list" element={<List />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/text-utils" element={<TextUtils />} />
          <Route path="/toast" element={<Toast />} />

          {/* Make a 404 page. */}
        </Routes>
      </div>
    </div>
  );
}

/**
 * Todos
 * home page
 * navbar
 * image component
 * add slider and search box in input
 * your initials, name, github and linkedin
 */
