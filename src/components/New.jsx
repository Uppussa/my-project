import { useEffect, useRef, useState } from 'react';

export default function VehicleFinder() {
  const [priceRange, setPriceRange] = useState([100000, 3000000]);
  const scrollContainerParentRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const stickySectionRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const scrollContainerParent = scrollContainerParentRef.current;
    const scrollContainer = scrollContainerRef.current;
    const stickySection = stickySectionRef.current;
    const panels = panelsRef.current;

    let totalPanelWidth = 0;
    panels.forEach(panel => {
      totalPanelWidth += panel.offsetWidth;
    });

    const panelLeftSpace = panels[0]?.getBoundingClientRect().left || 0;
    const viewportWidth = window.innerWidth;

    function handleScroll() {
      const isSticky = stickySection.classList.contains('elementor-sticky--active');
      const isPositionFixed = window.getComputedStyle(stickySection).position === 'fixed';
      const isPositionAbsolute = window.getComputedStyle(stickySection).position === 'absolute';

      if (isSticky && isPositionFixed) {
        const scrollTop = window.scrollY;
        const rect = scrollContainerParent.getBoundingClientRect();
        const elementTop = scrollTop + rect.top;
        const parentHeight = scrollContainerParent.offsetHeight;
        const viewportHeight = window.innerHeight;

        const startScroll = elementTop;
        const endScroll = elementTop + parentHeight - viewportHeight;

        let percentage = ((scrollTop - startScroll) / (endScroll - startScroll)) * 100;
        percentage = Math.max(0, Math.min(percentage, 100));

        const translateX = -(totalPanelWidth - viewportWidth + (panelLeftSpace * 2) + viewportWidth / 3) * (percentage / 100);

        // Use requestAnimationFrame to apply the transform
        requestAnimationFrame(() => {
          scrollContainer.style.transform = `translateX(${translateX}px)`;
        });
      } else if (!isSticky && !isPositionAbsolute) {
        // Reset transform when not sticky and not absolute
        requestAnimationFrame(() => {
          scrollContainer.style.transform = 'translateX(0)';
        });
      }
    }

    if (scrollContainer && scrollContainerParent && stickySection) {
      window.addEventListener('scroll', handleScroll);
      // Initial call to set up the correct transform
      handleScroll();
    } else {
      console.error('.scroll-container, .scroll-container-parent, or .sticky-section not found!');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <style>
        {`
          body {
              overflow-x: hidden;
          }
          .tag {
              backdrop-filter: blur(20px);
          }
          .scroll-container {
              overflow: visible;
              will-change: transform;
              transition: transform 0.2s ease; /* Smooth transition for transform */
          }
          .panel {
              will-change: transform;
              aspect-ratio: 1.5;
              transition: background-size 0.2s ease;
          }
          .panel:hover {
              background-size: 130% !important;
              transition: 0.2s;
          }
          .sticky-section {
              transition: position 0.2s ease; /* Smooth transition for position change */
          }
        `}
      </style>

      {/* Header */}
      <header className="bg-brown-700 text-black p-4 sticky-section" ref={stickySectionRef}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">AutoConfisa</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-orange-300">Inicio</a>
            <a href="#" className="hover:text-orange-300">Vehículos</a>
            <a href="#" className="hover:text-orange-300">Dealers</a>
            <a href="#" className="hover:text-orange-300">Contacto</a>
          </nav>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Solicitar un Préstamo</button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-600 text-black py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MONTARTE</h1>
            <p className="text-2xl md:text-3xl mb-8">nunca había sido tan FÁCIL</p>
            <div className="bg-white max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
              <h2 className="text-black text-xl font-semibold mb-4">BUSCADOR DE VEHÍCULOS</h2>
              <form className="grid gap-4">
                <select className="p-2 border-solid border-2 border-black rounded">
                  <option>Marca</option>
                  <option>Honda</option>
                  <option>Toyota</option>
                  <option>Ford</option>
                  {/* Agregar más marcas aquí */}
                </select>
                <select className="p-2 border-solid border-2 border-black rounded">
                  <option>Modelo</option>
                  <option>Civic</option>
                  <option>Corolla</option>
                  <option>Mustang</option>
                  {/* Agregar más modelos aquí */}
                </select>
                <select className="p-2 border-solid border-2 border-black rounded">
                  <option>Tipo</option>
                  <option>SEDAN</option>
                  <option>SUV</option>
                  <option>TRUCK</option>
                </select>
                <select className="p-2 border-solid border-2 border-black rounded">
                  <option>Año</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700">Rango de Precios</label>
                  <input
                    type="range"
                    min="100000"
                    max="3000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>RD$100.000</span>
                    <span>RD${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
                <button className="col-span-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
                  BUSCAR
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Recent Vehicles Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">VEHÍCULOS RECIENTES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-container-parent">
              <div className="scroll-container flex" ref={scrollContainerRef}>
                {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => (
                  <div key={i} className="panel bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" ref={el => panelsRef.current[i - 1] = el}>
                    <img
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Car ${i}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">Car Model {i}</h3>
                      <p className="text-gray-600">Santo Domingo</p>
                      <p className="text-gray-600">Gasolina</p>
                      <p className="font-bold mt-2">US$ 29,900</p>
                      <p className="text-sm text-gray-500">2019</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                Anterior
              </button>
              <button className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                Siguiente
              </button>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">NUESTRAS MARCAS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Aquí puedes agregar los logos de las marcas */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-4 flex items-center justify-center rounded-lg">
                  <img src={`/brand-logo-${i}.png`} alt={`Brand ${i}`} className="h-16" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AutoConfisa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

