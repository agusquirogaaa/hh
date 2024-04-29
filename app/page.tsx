import Image from "next/image";
import Index from "./index";
import NavBar from "./navbar/NavBar"
import { SparklesPreview } from "@/components/SparklesPreview";
export default function Home() {
  return (
   <>
      <NavBar></NavBar>
      <div className="bg-color1">
       <Index></Index>  
      </div>
   </>
  );
}
