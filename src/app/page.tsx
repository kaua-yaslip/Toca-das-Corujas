import type { Metadata } from "next";
import Banner from "@/components/Home/Banner";
import First from "@/components/Home/First";
import Highlights from "@/components/Home/Highlights";
import Passeios from "@/components/Home/Passeios";
import RecintoGeral from "@/components/Home/RecintoGeral";
import HotelFazenda from "@/components/Home/HotelFazenda";
import Cavalinho from "@/components/Home/Cavalinho";
import Form from "@/components/Home/Form";
import GaleriaAtualizada from "@/components/Home/GaleriaAtualizada";

export const metadata: Metadata = {
  title: "O melhor hotel fazenda de Angatuba",
  description: "Toca das Corujas, o melhor hotel fazenda de Angatuba/SP.",
  keywords: ["O melhor hotel fazenda de Angatuba", "Angatuba", "São Paulo", "Toca das Corujas", "hotel fazenda"],
};

export default function HomePage() {
  return (
    <main>
      <Banner />
      <First />
      <Highlights />
      <Passeios />
      <RecintoGeral />
      <HotelFazenda />
      <Cavalinho />
      <GaleriaAtualizada />
      <Form />
    </main>
  );
}
