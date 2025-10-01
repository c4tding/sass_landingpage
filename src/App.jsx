import Faq from "./sections/Faq";
import Feature from "./sections/Feature";
import Header from "./sections/Header";
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feature />
      <Pricing />
      <Faq />
    </main>
  );
};

export default App;
