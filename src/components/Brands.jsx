import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  return (
    <section className="container mx-auto px-4 py-9"> {/* Ajuste aquí */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ">
        <div className="bg-slate-600 text-primary-foreground p-4 rounded-lg shadow-md" data-aos="flip-up">
          <h2 className="text-xl font-bold text-white">FRENOS</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 50%</p>
          <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
          <img aria-hidden="true" alt="LED Headlight" src="/images/desc1.png" />
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md" data-aos="flip-up">
          <h2 className="text-xl font-bold">TODOS LOS KITS</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 50%</p>
          <a href="#" className="bg-white text-secondary-foreground text-black hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
          <img aria-hidden="true" alt="Performance Brake Kits" src="/images/desc2.png" />
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg shadow-md" data-aos="flip-up">
          <h2 className="text-xl font-bold">AMORTIGUACIONES</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 30%</p>
          <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block text-black">SHOP NOW!</a>
          <img aria-hidden="true" alt="Customize Your Ride" src="/images/desc3.png" />
        </div>
      </div>
    </section>
  )
}

export default Brands;
