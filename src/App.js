import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Roster from "./pages/Roster";
import PastPresidents from "./pages/PastPresidents";
import MajorDonors from "./pages/MajorDonors";
import SignatureProjects from "./pages/SignatureProjects";
import GlobalGrant from "./pages/GlobalGrant";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import CarouselScreen from "./pages/CarouselScreen";
import ContactUsForm from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roster-of-members" element={<Roster />} />
            <Route path="/past-presidents" element={<PastPresidents />} />
            <Route path="/major-donors" element={<MajorDonors />} />
            <Route path="/signature-projects" element={<SignatureProjects />} />
            <Route path="/global-grant-projects" element={<GlobalGrant />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/screen" element={<CarouselScreen />} />
            <Route path="/contact-us" element={<ContactUsForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
