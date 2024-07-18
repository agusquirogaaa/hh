import Image from "next/image";
import NavBar from "./NavBar";
import Index from "./Index/page";
import Servicios from "./Servicios/page";
import Info from "./Info/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Index />
      <Servicios />
      <Info />
    </>
  );
}
