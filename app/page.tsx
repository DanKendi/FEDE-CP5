import CardProduto from "@/components/CardProduto";//Importa componente CardProduto
import Footer from "@/components/Footer"; //Importa componente Footer

export default function Home() {
  return (
    <>
      {/* Renderiza o componente CardProduto*/}
      <CardProduto />
      {/* Renderiza o componente Footer*/}
      <Footer />
    </>
  );
}
