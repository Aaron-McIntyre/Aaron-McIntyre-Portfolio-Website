'use client';

import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

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

       <FeaturedProjectCard 
        title="My portfolio website"
        description="my portfolio website!"
        imageUrl="/images/portfolioWebsiteScreenshot.png"
        projectLink="http://localhost:3000"
        tags = {["React", "TypeScript", "TailwindCSS",]}
      />

    </>
  );
}

