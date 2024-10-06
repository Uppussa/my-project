import SearchVehi from "./SearchVehi";


const Section1 = () => {
  return (
    <section className="bg-carro bg-cover bg-center py-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
      <div className="md:w-1/3 w-full md:max-w-md mt-8 md:mt-0 shadow-md" data-aos="flip-right">
        <SearchVehi />
      </div>
      <div className="text-black md:w-2/3 w-full md:text-left text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">MONTARTE</h1>
        <p className="text-2xl md:text-3xl mb-8">nunca había sido tan FÁCIL</p>
      </div>
    </div>
  </section>
  
  );
};

export default Section1;

