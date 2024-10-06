import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';

const Section2 = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cars = [
    { id: 1, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 2, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 3, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 4, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 5, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 6, images: ['/venta1.png', 'banner.png', '/venta1.png'] },
    { id: 7, images: ['/venta1.png', 'banner.png', '/venta1.png']},
    { id: 8, images:['/venta1.png', 'banner.png', '/venta1.png'] },
  ];

  const openModal = (carIndex) => {
    setSelectedCar(carIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const prevImage = () => {
    if (selectedCar !== null) {
      setCurrentImageIndex(
        (currentImageIndex + cars[selectedCar].images.length - 1) % cars[selectedCar].images.length
      );
    }
  };

  const nextImage = () => {
    if (selectedCar !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % cars[selectedCar].images.length);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-6">VEHÍCULOS RECIENTES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, i) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={car.images[0]}
                alt={`Car ${i + 1}`}
                className="w-full h-48 object-cover cursor-pointer" // Clases para tamaño y ajuste de la imagen
                onClick={() => openModal(i)}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Car Model {car.id}</h3>
                <p className="text-gray-600">Santo Domingo</p>
                <p className="text-gray-600">Gasolina</p>
                <p className="font-bold mt-2">US$ 29,900</p>
                <p className="text-sm text-gray-500">2019</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCar !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <XIcon className="w-6 h-6" />
            </button>

            {/* Imagen seleccionada */}
            <img
              src={cars[selectedCar].images[currentImageIndex]}
              alt={`Car ${selectedCar + 1}`}
              className="w-full h-64 object-cover" // Ajuste del tamaño de la imagen en el modal
            />

            <div className="mt-4 text-center">
              <h3 className="font-bold text-xl">Car Model {selectedCar + 1}</h3>
              <p className="text-gray-600">Santo Domingo</p>
              <p className="text-gray-600">Gasolina</p>
              <p className="font-bold mt-2">US$ 29,900</p>
              <p className="text-sm text-gray-500">2019</p>
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevImage}
                className="p-2 bg-gray-800 text-white rounded-full"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 bg-gray-800 text-white rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section2;
