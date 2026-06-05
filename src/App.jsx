import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Architecture from "./components/Architecture";
import RackOverview from "./components/RackOverview";
import CallFlow from "./components/CallFlow";
import PBXComparison from "./components/PBXComparison";
import Protocols from "./components/Protocols";
import PhoneRegistration from "./components/PhoneRegistration";
import DialPlan from "./components/DialPlan";
import CodecQoS from "./components/CodecQoS";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import CMS from "./components/CMS";
import ClassOfService from "./components/ClassOfService";
import Troubleshooting from "./components/Troubleshooting";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Architecture />
      <RackOverview />
      <CallFlow />
      <CMS/>
      <PBXComparison />
      <Advantages />
      <Protocols />
      <PhoneRegistration/>
      <DialPlan />
      <CodecQoS />
      <ClassOfService />
      <Troubleshooting />
      <Footer />
    </>
  );
}

export default App;