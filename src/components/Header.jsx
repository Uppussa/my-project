

const Header = () => {
  return (
    <header className="bg-brown-700 text-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">AutoConfisa</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-orange-300">Inicio</a>
        <a href="#" className="hover:text-orange-300">Vehículos</a>
        <a href="#" className="hover:text-orange-300">Dealers</a>
        <a href="#" className="hover:text-orange-300">Contacto</a>
      </nav>
      
    </div>
  </header>
  )
}

export default Header
