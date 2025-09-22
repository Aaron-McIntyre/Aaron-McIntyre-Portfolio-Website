import SkillFilter from "../components/SkillFilter";

export default function About() {
  return (
    <>
      <div className="min-h-screen max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-8 px-4 lg:px-0 py-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <img
            src="images/placeholder.png"
            alt="Profile Picture"
            className="rounded-full object-cover w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-2 lg:px-0">
          <h1 className="titleFont text-3xl sm:text-4xl lg:text-5xl text-[var(--text)] font-bold pt-6 lg:pt-20">
            Aaron McIntyre
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-medium max-w-prose">
            Hi, I&apos;m Aaron, a fourth-year Computing Science student at the
            University of Glasgow, with a passion for software development and
            problem-solving! Over the past few years, I&apos;ve explored a wide
            range of technologies and frameworks, gaining hands-on experience in
            both front-end and back-end development. I&apos;ve also learned
            about the full software engineering process—including agile
            methodologies, version control, and collaborative development!
          </p>

          <div className="mt-6 w-full flex justify-center lg:justify-start">
            <a
              href="/AaronMcIntyre_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-neutral-900 border border-neutral-800 shadow-lg hover:bg-neutral-800 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg">
                View my CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <h1 className="titleFont text-3xl sm:text-5xl lg:text-6xl text-white font-bold text-center pt-20 px-4">
        Skills
      </h1>
      <div className="px-4 sm:px-8 lg:px-0">
        <SkillFilter />
      </div>
    </>
  );
}
