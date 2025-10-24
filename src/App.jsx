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
import ScrollToTop from "./Components/ScrollToTop";
import RiskFactors from "./Components/RiskFactors";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Communique1 from "./Components/Communique1";
import Communique2 from "./Components/Communique2";
import Communique3 from "./Components/Communique3";
import NewsLetter from "./Components/newsLetter";
import SchemesNavigator from "./Components/SchemesNavigator";
import EmergingMoat from "./Components/EmergingMoat";
import SpecialOpportunities from "./Components/SpecialOpportunities";
import ModerateCompounders from "./Components/ModerateCompounders";
import UpperCrustWealthFund from "./Components/UppercrustWF";
import UpperCrustGrowthFund from "./Components/UpperCrustGrowthFund";
import UpperCrustProsperityFund from "./Components/UpperCrustProsperityFund";
import Communique4 from "./Components/Communique4";
import DirectOnboarding from "./Components/DirectOnboarding";
import BusinessOpportunitiy from "./Components/BusinessOpportunitiy";
import BusinessOpportunityContact from "./Components/BusinessOpportunityContact";


function App() {
  return (
    <>
      <BrowserRouter>
      
        <ScrollToTop />
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
          <Route exact path="/RiskFactors" element={<RiskFactors />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/Communique1" element={<Communique1 />} />
          <Route exact path="/Communique2" element={<Communique2 />} />
          <Route exact path="/Communique3" element={<Communique3 />} />
          <Route exact path="/Communique4" element={<Communique4 />} />
          <Route exact path="/NewsLetter" element={<NewsLetter />} />
          <Route exact path="/EmergingMoat" element={<EmergingMoat />} />
          <Route exact path="/DirectOnboarding" element={<DirectOnboarding/>}/>
          <Route exact path="/BusinessOpportunity" element={<BusinessOpportunitiy/>}/>
          <Route exact path="/BusinessOpportunityContact" element={<BusinessOpportunityContact/>}/>
          

          
          <Route
            exact
            path="/SpecialOpportunities"
            element={<SpecialOpportunities />}
          />
          <Route
            exact
            path="/ModerateCompounders"
            element={<ModerateCompounders />}
          />
          <Route exact path="/Schemes" element={<SchemesNavigator />} />
          <Route
            exact
            path="/FeeCalculation"
            element={<FeeCalculationTool />}
          />
          <Route
            path="/InvestmentPhilosophy"
            element={<InvestmentPhilosohpy />}
          />
          '
          <Route
            exact
            path="/UpperCrustWealthFund"
            element={<UpperCrustWealthFund />}
          />
          <Route
            exact
            path="/UpperCrustGrowthFund"
            element={<UpperCrustGrowthFund />}
          />
          <Route
            exact
            path="/UpperCrustProsperityFund"
            element={<UpperCrustProsperityFund />}
          />
          <Route exact path="*" element={<PgFOF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
