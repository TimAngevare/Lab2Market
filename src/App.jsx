import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyValidation from './components/sections/WhyValidation';
import Difference from './components/sections/Difference';
import VisionMission from './components/sections/VisionMission';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyValidation />
      <Difference />
      <VisionMission />
      <Process />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
