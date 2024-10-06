import { useState } from 'react';


const SearchVehi = () => {

    const [priceRange, setPriceRange] = useState([100000, 3000000]);

  return (
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
            {/* Agregar años de vehículos aquí */}
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
  )
}

export default SearchVehi
