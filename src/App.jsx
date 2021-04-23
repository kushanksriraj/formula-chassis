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
  Input
} from "./pages";
import { Navbar, Sidebar } from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <div className="wrapper">
        {/* Sort the routes and css files lexicographically */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/text-utils" element={<TextUtils />} />
          <Route path="/toast" element={<Toast />} />
          <Route path="/input" element={<Input />} />

        </Routes>
      </div>
    </div>
  );
}
