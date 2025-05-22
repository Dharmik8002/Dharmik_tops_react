import React from "react";
import "./App.css";
import Home from "./website/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import Events from "./website/pages/Events";
import Menu from "./website/pages/Menu";
import Booking from "./website/pages/Booking";
import Blog from "./website/pages/Blog";
import Team from "./website/pages/Team";
import Testimonial from "./website/pages/Testimonial";
import NoteFound from "./website/pages/NoteFound";
import Contact from "./website/pages/Contact";
import Dashboard from "./Admin/pages/Dashboard";
import AddUser from "./Admin/pages/AddUser";
import EditUser from "./Admin/pages/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoteFound />} />

          {/* Admin side */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
