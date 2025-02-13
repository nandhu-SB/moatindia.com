import "./App.css";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import PgFOF from "./Components/PgFOF";
import Fullteam from "./Components/Fullteam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemberDetail from "./Components/MemberDetail";
import InvestmentPhilosohpy from "./Components/InvestmentPhilosohpy";
import ContactUs from "./Components/ContactUs";
import Information from "./Components/Information";
import Disclaimer from "./Components/Disclaimer";
import FAQ from "./Components/FAQ";
import FeeCalculationTool from "./Components/FeeCalculation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Fullteam" element={<Fullteam />} />
          <Route exact path="/member/:id" element={<MemberDetail />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Information" element={<Information />} />
          <Route exact path="/Disclaimer" element={<Disclaimer />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route
            exact
            path="/FeeCalculation"
            element={<FeeCalculationTool />}
          />
          <Route
            path="/InvestmentPhilosophy"
            element={<InvestmentPhilosohpy />}
          />

          <Route exact path="*" element={<PgFOF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
