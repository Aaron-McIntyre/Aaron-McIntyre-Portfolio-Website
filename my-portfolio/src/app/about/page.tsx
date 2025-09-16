import SkillFilter from "../components/SkillFilter";

export default function About() {
  return (
    <>
      <div className="h-[100vh] max-w-6xl mx-auto flex rounded-4xl">
        <div className="flex flex-1 justify-center items-center text-center">
          <img
            src="images/placeholder.png"
            alt="Profile Picture"
            className="rounded-full object-cover w-3/5 h-3/5"
          />
        </div>
        <div className="flex-1 justify-center items-center overflow-hidden">
          <h1 className="titleFont text-5xl text-[var-(--text)] font-bold justify-center text-center pt-20">
            Aaron McIntyre
          </h1>
          <h3 className=" text-xl text-[var(--text-muted)] font-medium p-10">
            Hi, I'm Aaron, a fourth-year Computing Science student at the
            University of Glasgow, with a passion for software development and
            problem-solving! Over the past few years, I've explored a wide range
            of technologies and frameworks, gaining hands-on experience in both
            front-end and back-end development. I've also learned about the full
            software engineering process—including agile methodologies, version
            control, and collaborative development!
          </h3>

          <a
            href="/AaronMcIntyre_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="bg-neutral-900 ml-10 border-neutral-800 shadow-lg hover:bg-neutral-800 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg">
              View my CV
            </button>
          </a>
        </div>
      </div>
      <h1 className="titleFont text-6xl text-white font-bold text-center pt-20">
        Skills
      </h1>
      <SkillFilter />
    </>
  );
}
