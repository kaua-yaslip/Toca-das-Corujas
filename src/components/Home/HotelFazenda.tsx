import Link from "next/link";

export default function HotelFazenda() {
  return (
    <section className="hotal-fazenda">
      <div className="card-hotel" aria-hidden="true" />
      <div className="card-hotel"><div className="texto-fazenda"><span>HOTEL FAZENDA TOCA DAS CORUJAS</span><h2>No coração de Angatuba, com vistas deslumbrantes</h2><Link href="/sobre">Explore mais</Link></div></div>
      <div className="card-hotel" aria-hidden="true" />
    </section>
  );
}
