"use client";

import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import FeaturedCardCarousel from "../components/FeaturedCardCarousel";
import ViewMoreButton from "../components/ViewMoreButton";
import SkillBox from "../components/SkillBox";

export default function ComponentsShowroom() {
  return (
    <>
      {/* <ProjectCard 
        title="My portfolio website"
        description="my portfolio website!"
        imageUrl="/images/portfolioWebsiteScreenshot.png"
        projectLink="http://localhost:3000"
        tags = {["React", "TypeScript", "TailwindCSS",]}
      />  */}

      {/* <FeaturedProjectCard 
        title="My portfolio website"
        description="my portfolio website!"
        imageUrl="/images/portfolioWebsiteScreenshot.png"
        projectLink="http://localhost:3000"
        tags = {["React", "TypeScript", "TailwindCSS",]}
      /> */}
      {/* 
      <FeaturedProjectCard 
        title="My portfolio website"
        description="my portfolio website!"
        imageUrl="/images/portfolioWebsiteScreenshot.png"
        projectLink="http://localhost:3000"
        tags = {["React", "TypeScript", "TailwindCSS",]}
      /> */}

      {/* <FeaturedCardCarousel /> */}

      <SkillBox title="Python" imageUrl="icons/python.svg" />
      <SkillBox title="JavaScript" imageUrl="icons/javascript.svg" />
      <SkillBox title="CSS" imageUrl="icons/css.svg" />
      <SkillBox title="Django" imageUrl="icons/django.svg" />
      <SkillBox title="HTML" imageUrl="icons/html5.svg" />
      <SkillBox title="Java" imageUrl="icons/java.svg" />
      <SkillBox title="TailwindCSS" imageUrl="icons/tailwindcss.svg" />
    </>
  );
}
