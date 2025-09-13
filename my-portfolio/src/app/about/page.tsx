import SkillBox from "../components/SkillBox";

export default function About() {
  return (
    <>
      <h1 className="titleFont text-6xl text-white font-bold text-center pt-10">
        About Me
      </h1>
      <div className="h-[70vh] mt-10 bg-neutral-900 max-w-6xl mx-auto flex rounded-4xl">
        <div className="flex flex-1 justify-center items-center text-center">
          <img
            src="images/placeholder.png"
            alt="Profile Picture"
            className="rounded-full object-cover w-3/4 h-3/4"
          />
        </div>
        <div className="flex-1 justify-center items-center text-center overflow-hidden">
          <h1 className="titleFont text-6xl text-[var-(--text)] font-bold justify-center pt-20">
            Aaron McIntyre
          </h1>
          <h3 className=" text-xl text-[var(--text-muted)] font-medium justify-center p-10">
            Sample text about me.
          </h3>
        </div>
      </div>
      <h1 className="titleFont text-6xl text-white font-bold text-center pt-20">
        Skills
      </h1>
      <div className="h-[50vh] w-full mt-10 mx-auto flex flex-wrap justify-center gap-x-1 gap-y-0 rounded-4xl">
        <SkillBox title="Python" imageUrl="icons/python.svg" />
        <SkillBox title="JavaScript" imageUrl="icons/javascript.svg" />
        <SkillBox title="CSS" imageUrl="icons/css.svg" />
        <SkillBox title="Django" imageUrl="icons/django.svg" />
        <SkillBox title="HTML" imageUrl="icons/html5.svg" />
        <SkillBox title="Java" imageUrl="icons/java.svg" />
        <SkillBox title="TailwindCSS" imageUrl="icons/tailwindcss.svg" />
        <SkillBox title="Git" imageUrl="icons/github.svg" />
        <SkillBox title="React" imageUrl="icons/react.svg" />
        <SkillBox title="TypeScript" imageUrl="icons/typescript.svg" />
        <SkillBox title="NextJS" imageUrl="icons/nextdotjs.svg" />
      </div>
    </>
  );
}
