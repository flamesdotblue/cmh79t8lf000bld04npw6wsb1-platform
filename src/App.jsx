import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
}

export default App;
