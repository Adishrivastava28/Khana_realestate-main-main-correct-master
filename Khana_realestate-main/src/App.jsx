import React from 'react'
import Hero from './Hero.jsx'
import Contact from './components/Contact-Us/Contact.jsx'
import Abt from './components/Abt'
import Logoslider from './components/logoSlider/Logoslider'
import Loc from './components/location/Loc'
import Carousel from './Carousel.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Philosophy from './components/Philosophy/Philosophy.jsx'
import Leadership from './components/Leadership/Leadership.jsx'
import Sections from './components/Philosophy/Sections.jsx'
import Checking from './components/addproperty/checking.jsx'
import ScrollButtons from './components/Philosophy/ScrollButton.jsx'
import RoutesAll from './RoutesAll.jsx'
import SubmitProperty from './components/addproperty/SubmitProperty.jsx'
import FinalPhilosophy from './components/Philosophy/FinalPhilosophy.jsx'
import FinalCareer from './components/Career/FinalCareer.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from "./components/Property Page/Header.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoutesAll></RoutesAll>}></Route>
        <Route
          path="/philosophy"
          element={<FinalPhilosophy></FinalPhilosophy>}
        ></Route>
        <Route path="/career" element={<FinalCareer></FinalCareer>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/team" element={<Leadership></Leadership>}></Route>
        <Route
          path="/addproperty"
          element={<SubmitProperty></SubmitProperty>}
        ></Route>
        <Route path="/project/:id" element={<Header />} />

        {/*   <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24" id="hero">
        <Hero vidsrc="src\assets\Hero.mp4" />
      </div>
      <div id="aboutus">
        <Abt />
      </div>
      <div id="logoslider">
        <Logoslider />
      </div>
      <div><Loc></Loc></div>
      <div >
    <Carousel></Carousel>
      </div> */}
        {/*   <div>
        <Philosophy></Philosophy>
      </div>
      <div><Sections></Sections></div> */}
        {/* <Contact></Contact> */}
      </Routes>{" "}
    </Router>
  );
}

export default App

// import React from 'react'
// import SubmitProperty from './components/addproperty/SubmitProperty'

// function App() {
//   return (
//     <div>
//       <SubmitProperty/>
//     </div>
//   )
// }

// export default App


// import React from 'react';
// import Header from './components/Property Page/Header';
// import PropertyDetails from './components/Property Page/PropertyDetails';
// import Specification from './components/Property Page/Specification';
// import Location from './components/Property Page/Location';
// import Footer from './components/Property Page/Footer';
// import './App.css';

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <PropertyDetails />
//       <Specification />
//       <Location />
//       <Footer />
//     </div>
//   );
// };

// export default App;
