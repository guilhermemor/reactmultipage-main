import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Serviços from "./Serviços";
import Contato from "./Contato";
import Login from "./Login";
import Registro from "./Registro";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Serviços />
      <Contato />
    </>
  );
};

export default Home;
