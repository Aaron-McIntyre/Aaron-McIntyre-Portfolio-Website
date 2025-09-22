import FeaturedCardCarousel from "./components/FeaturedCardCarousel";
import ScrollIndicator from "./components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <h1 className="titleFont text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center pt-40">
          Aaron McIntyre
        </h1>
        <h3 className="titleFont relative md:text-2xl lg:text-3xl text-[var-(--text-muted)] font-semibold text-center pt-3">
          CS Student |<wbr /> Aspiring Software Engineer
        </h3>
      </div>

      <ScrollIndicator />

      <div className="w-full h-screen hidden lg:block">
        <h1 className="titleFont lg:text-5xl md:text-3xl sm:text-2xl text-white font-bold text-center pt-40">
          Featured Projects
        </h1>
        <h3 className="titleFont relative text-2xl text-[var-(--text-muted)] font-semibold text-center pt-3">
          Some of my most recent personal projects!
        </h3>

        <div className="hidden lg:flex w-full h-96 justify-center items-center mt-20 pb-20">
          <FeaturedCardCarousel />
        </div>
      </div>
    </>
  );
}
