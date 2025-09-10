import Image from "next/image";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Link from "next/link";
import indexPageStyles from "./index.module.css";


export default function Home() {
  return (
    <>
    <StarBackground />
    <Navbar />
    
    <div className="w-full h-screen">
      <h1
  className={`${indexPageStyles.homeTitleFont} text-6xl text-white font-bold text-center pt-40`}> Aaron McIntyre </h1>
      <h3 className={`${indexPageStyles.homeTitleFont} relative text-2xl text-[var-(--text-muted)] font-semibold text-center pt-6`}>Student Software Engineer</h3>
    </div>
    </>
  );
}
