import indexPageStyles from "./index.module.css";
import FeaturedCardCarousel from "./components/FeaturedCardCarousel";

export default function Home() {
  return (

    <>

      <div className="w-full h-screen">
        <h1 className={`${indexPageStyles.homeTitleFont} text-6xl text-white font-bold text-center pt-40`}> Aaron McIntyre </h1>
        <h3 className={`${indexPageStyles.homeTitleFont} relative text-2xl text-[var-(--text-muted)] font-semibold text-center pt-3`}>CS Student | Aspiring Software Engineer</h3>
      </div>
      

      <div className="w-full h-screen">
        <h1 className={`${indexPageStyles.homeTitleFont} text-5xl text-white font-bold text-center pt-40`}> Featured Projects </h1>
    
        <div className="w-full h-96 flex justify-center items-center mt-20">
          <FeaturedCardCarousel />
        </div>
      </div>
      
    </>
  );
}
