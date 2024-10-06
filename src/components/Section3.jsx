import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Section3 = () => {
  // Array con las rutas de las imágenes
  const brands = [
    '/banner.png', 
    '/venta1.png', 
    '/banner.png', 
    '/venta1.png', 
    '/banner.png', 
    '/venta1.png', 
    '/banner.png', 
    '/venta1.png', 
    '/banner.png'
  ];

  const [current, setCurrent] = useState(0);

  // Cambiar a la imagen anterior
  const prevBrand = () => {
    setCurrent(current > 0 ? current - 1 : brands.length - 1);
  };

  // Cambiar a la siguiente imagen
  const nextBrand = () => {
    setCurrent((current + 1) % brands.length);
  };

  // Uso de useEffect para desplazarse automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      nextBrand();
    }, 1000); // Cambia de imagen cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">MARCAS</h2>

        {/* Carrusel de marcas */}
        <div className="relative flex items-center justify-center h-80">
          <div className="items relative flex flex-col items-center">
            {/* Muestra hasta 3 imágenes del carrusel */}
            <div className="flex space-x-4">
              {[0, 1, 2].map((index) => (
                <img
                  key={index}
                  src={brands[(current + index) % brands.length]}
                  alt={`Marca ${index}`}
                  className="w-48 h-48 object-contain bg-gray-200 rounded-lg transition-opacity duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>

          {/* Botones para controlar el carrusel */}
          <div className="button-container absolute top-1/2 w-full flex justify-between items-center px-4">
            <button className="p-2 bg-gray-800 text-white rounded-full" onClick={prevBrand}>
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="p-2 bg-gray-800 text-white rounded-full" onClick={nextBrand}>
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
