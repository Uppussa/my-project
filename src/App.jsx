

import Brands from './components/Brands';
import Footer from './components/fOOTER.JSX';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

export default function App() {


  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      {/* Header */}
      <Header /> {/* Asegúrate de que este componente esté definido y listo */}

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Section1 />

        {/* Recent Vehicles Section */}
        <Section2 />

        <Brands/>
        {/* Brands Section */}
        <Section3 />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
