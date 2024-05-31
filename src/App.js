import './App.css';
import Navbar from './Component/Navbar/navbar';
import HeroSlider from './Component/Hero/hero';
import SearchHospital from './Component/Search/searchhospital';
import FAQs from './Component/FAQS/faqs';
import HeroServices from './Component/Service/service';
import Offers from './Component/Offere/offer';
import Specialization from './Component/Specialisation/specialisatiion';
import Specialists from './Component/Specialist/specialist';
import PatientCaring from './Component/Patientcare/patientcare';
import Blogs from './Component/Blog/blog';
import OurFamilies from './Component/OurFamily/ourfamily';
import DownloadApp from './Component/DownloadOurApp/downloadapp';
import Footer from "./Component/Footer/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <HeroSlider />
              <SearchHospital/>
              <HeroServices/>
              <Offers/>
              <Specialization/>
              <Specialists/>
              <PatientCaring/>
              <Blogs/>
              <OurFamilies/>
              <DownloadApp/>
              <FAQs/>
              <Footer/>
            </>
          }/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
