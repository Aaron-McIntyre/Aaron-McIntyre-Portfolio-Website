"use client";
import { useState } from "react";
import SkillBox from "./SkillBox";

export default function SkillFilter() {
  const skills = [
    { title: "Python", imageUrl: "icons/python.svg", type: "Backend" },
    { title: "JavaScript", imageUrl: "icons/javascript.svg", type: "Frontend" },
    { title: "CSS", imageUrl: "icons/css.svg", type: "Frontend" },
    { title: "Django", imageUrl: "icons/django.svg", type: "Backend" },
    { title: "HTML", imageUrl: "icons/html5.svg", type: "Frontend" },
    { title: "Java", imageUrl: "icons/java.svg", type: "Backend" },
    {
      title: "TailwindCSS",
      imageUrl: "icons/tailwindcss.svg",
      type: "Frontend",
    },
    { title: "Git", imageUrl: "icons/github.svg", type: "Tools" },
    { title: "React", imageUrl: "icons/react.svg", type: "Frontend" },
    { title: "TypeScript", imageUrl: "icons/typescript.svg", type: "Frontend" },
    { title: "NextJS", imageUrl: "icons/nextdotjs.svg", type: "Frontend" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All" ? skills : skills.filter((skill) => skill.type === filter);

  return (
    <div>
      <div className="mb-4 flex gap-2 justify-center mt-10">
        {["All", "Frontend", "Backend", "Tools"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`className="bg-neutral-900 border-neutral-800 shadow-lg hover:bg-neutral-800 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg " ${
              filter === type
                ? "bg-neutral-700 text-[var-(--text-muted)]"
                : "bg-neutral-900"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 pt-10 pb-30 justify-center">
        {filteredSkills.map((skill) => (
          <SkillBox
            key={skill.title}
            title={skill.title}
            imageUrl={skill.imageUrl}
            type={skill.type}
          />
        ))}
      </div>
    </div>
  );
}
