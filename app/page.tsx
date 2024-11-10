import HomePage from "@/component/HomePage/HomePage";
import React from "react";
import About from "@/component/About/About";
import ProjectsPage from "@/component/Project/Project";
import Contact from "@/component/Contact/Contact";

const Home = () => {
  return (
    <div>
      <HomePage />
      <About/>
      <ProjectsPage />
      <Contact/>
    </div>
  );
};

export default Home;