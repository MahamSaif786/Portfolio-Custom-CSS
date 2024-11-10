
// "use client";
// import React, { useState, useRef } from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import styled from "styled-components";

// // Define project data interface
// interface ProjectData {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tag: string[];
//   gitUrl: string;
//   previewUrl: string;
// }

// // Sample project data
// const projectsData: ProjectData[] = [
//   {
//     id: 1,
//     title: "GYM Website",
//     description: "This is a gym website that I made using HTML, CSS, and JavaScript",
//     image: "/images/GYM-Website.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MahamSaif786/GYM-Website",
//     previewUrl: "https://gym-website-indol.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Weather App",
//     description: "This is a weather app built using Next.js, which provides weather information.",
//     image: "/images/projects/weather-app.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MahamSaif786/weather-widget-app",
//     previewUrl: "https://y-blue-nu.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Countdown timer",
//     description: "Countdown timer built with Next.js, a React framework, using libraries for time management .",
//     image: "/images/projects/countdown-timer.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MahamSaif786/Countdown-Timer",
//     previewUrl: "https://countdown-timer-by-maham-saif.vercel.app/",
//   },
//   {
//     id: 4,
//     title: "Furniture Website",
//     description: "This is a Furniture website that I made using HTML, CSS, and JavaScript",
//     image: "/images/projects/GYM-Website.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "https://github.com/MahamSaif786/Furniture-Website",
//     previewUrl: "https://furniture-website-nu.vercel.app/",
//   },
//   {
//     id: 5,
//     title: "Simple Calculator",
//     description: "Command-line calculator built with TypeScript to perform basic arithmetic operations efficiently.",
//     image: "/images/projects/calculator.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MahamSaif786/Simple-Calculator",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Currency Converter",
//     description: "This is a command-line currency converter created with TypeScript.",
//     image: "/images/projects/currency-convertor.jpg",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MahamSaif786/Currency-Converter",
//     previewUrl: "/",
//   },
// ];

// // Main component for the projects section
// const ProjectsSection: React.FC = () => {
//   const [tag, setTag] = useState<string>("All");
//   const ref = useRef<HTMLUListElement>(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag: string) => setTag(newTag);

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <Section>
//       <Title>My Projects</Title>
//       <TagContainer>
//         <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
//         <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
//       </TagContainer>
//       <ProjectList ref={ref}>
//         {filteredProjects.map((project, index) => (
//           <motion.li
//             key={project.id}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.3, delay: index * 0.4 }}
//           >
//             <ProjectCard
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               gitUrl={project.gitUrl}
//               previewUrl={project.previewUrl}
//             />
//           </motion.li>
//         ))}
//       </ProjectList>
//     </Section>
//   );
// };

// // Component for individual project cards
// const ProjectCard: React.FC<{
//   imgUrl: string;
//   title: string;
//   description: string;
//   gitUrl: string;
//   previewUrl: string;
// }> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
//   return (
//     <Card>
//       <CardImage style={{ backgroundImage: `url(${imgUrl})` }}>
//         <Overlay>
//           <Link href={gitUrl} passHref>
//             <LinkWrapper>
//               <CodeBracketIcon style={styled.icon} />
//             </LinkWrapper>
//           </Link>
//           <Link href={previewUrl} passHref>
//             <LinkWrapper>
//               <EyeIcon style={styled.icon} />
//             </LinkWrapper>
//           </Link>
//         </Overlay>
//       </CardImage>
//       <CardInfo>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardInfo>
//     </Card>
//   );
// };

// // Component for project tag buttons
// const ProjectTag: React.FC<{
//   name: string;
//   onClick: (name: string) => void;
//   isSelected: boolean;
// }> = ({ name, onClick, isSelected }) => {
//   return (
//     <TagButton onClick={() => onClick(name)} isSelected={isSelected}>
//       {name}
//     </TagButton>
//   );
// };

// // Styled Components
// const Section = styled.section`
//   width: 100%;
//   background-color: #2f4156;
//   padding: 5rem 1.25rem;
// `;

// const Title = styled.h2`
//   text-align: center;
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: white;
//   margin-top: 2rem;
//   margin-bottom: 1rem;
// `;

// const TagContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 1.5rem 0;
// `;

// const ProjectList = styled.ul`
//   display: grid;
//   gap: 1.5rem;
//   grid-template-columns: repeat(3, 1fr); // Default to 3 columns

//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; // 1 column for small screens
//   }
// `;

// const Card = styled.div`
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   background-color: #567c8d;
//   transition: transform 0.3s ease;
// `;

// const CardImage = styled.div`
//   height: 13rem;
//   background-size: cover;
//   background-position: center;
//   position: relative;
// `;

// const Overlay = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(248, 254, 255, 0);
//   opacity: 0;
//   transition: opacity 0.5s ease;
// `;

// const LinkWrapper = styled.div`
//   height: 3.5rem;
//   width: 3.5rem;
//   margin-right: 0.5rem;
//   border: 2px solid #8fbfc9;
//   border-radius: 50%;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// const CardInfo = styled.div`
//   color: white;
//   border-radius: 0 0 1rem 1rem;
//   background-color: #4e719a;
//   padding: 1.5rem;
// `;

// const CardTitle = styled.h5`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 0.5rem;
// `;

// const CardDescription = styled.p`
//   color: #adb7be;
// `;

// const TagButton = styled.button<{ isSelected: boolean }>`
//   border-radius: 9999px;
//   border-width: 2px;
//   padding: 0.75rem 1.5rem;
//   font-size: 1.25rem;
//   cursor: pointer;
//   color: #adb7be;
//   border-color: #5c6670;
//   background-color: ${(props) => (props.isSelected ? "#4e719a" : "transparent")};
//   color: ${(props) => (props.isSelected ? "white" : "#adb7be")};
// `;

// export default ProjectsSection;











"use client";
import React, { useState, useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

// Define project data interface
interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

// Sample project data
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "GYM Website",
    description: "This is a gym website that I made using HTML, CSS, and JavaScript",
    image:"/images/GYM-Website.png",
   tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/GYM-Website",
    previewUrl: "https://gym-website-indol.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "This is a weather app built using Next.js, which provides weather information.",
    image: "/images/weather-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/weather-widget-app",
    previewUrl: "https://y-blue-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Countdown timer",
    description: "Countdown timer built with Next.js, a React framework, using libraries for time management .",
    image: "/images/countdown-timer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Countdown-Timer",
    previewUrl: "https://countdown-timer-by-maham-saif.vercel.app/",
  },
  {
    id: 4,
    title: "Furniture Website",
    description: "This is a Furniture website that I made using HTML, CSS, and JavaScript",
    image: "../../images//gym-pic.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MahamSaif786/Furniture-Website",
    previewUrl: "https://furniture-website-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Simple Calculator",
    description: "Command-line calculator built with TypeScript to perform basic arithmetic operations efficiently.",
    image: "/images/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Simple-Calculator",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "This is a command-line currency converter created with TypeScript.",
    image:"/images/currency-convertor.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Currency-Converter",
    previewUrl: "/",
  },
];

// Main component for the projects section
const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section>
      <Title>My Projects</Title>
      <TagContainer>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
      </TagContainer>
      <ProjectList ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ProjectList>
    </Section>
  );
};

// Component for individual project cards
const ProjectCard: React.FC<{
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <Card>
      <CardImage style={{ backgroundImage: `url(${imgUrl})` }}>
        <Overlay>
          <Link href={gitUrl} passHref>
            <LinkWrapper>
              <StyledCodeBracketIcon />
            </LinkWrapper>
          </Link>
          <Link href={previewUrl} passHref>
            <LinkWrapper>
              <StyledEyeIcon />
            </LinkWrapper>
          </Link>
        </Overlay>
      </CardImage>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
    </Card>
  );
};

// Component for project tag buttons
const ProjectTag: React.FC<{
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}> = ({ name, onClick, isSelected }) => {
  return (
    <TagButton onClick={() => onClick(name)} isSelected={isSelected}>
      {name}
    </TagButton>
  );
};

// Styled Components for icons
const StyledEyeIcon = styled(EyeIcon)`
  height: 2.5rem;
  width: 2.5rem;
  color: #347684;
  cursor: pointer;
`;

const StyledCodeBracketIcon = styled(CodeBracketIcon)`
  height: 2.5rem;
  width: 2.5rem;
  color: #347684;
  cursor: pointer;
`;

// Styled Components for the rest of the layout
const Section = styled.section`
  width: 100%;
  background-color: #2f4156;
  padding: 5rem 1.25rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0;
`;

const ProjectList = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr); // Default to 3 columns

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column for small screens
  }
`;

const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #567c8d;
  transition: transform 0.3s ease;
`;

const CardImage = styled.div`
  height: 13rem;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(248, 254, 255, 0);
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const LinkWrapper = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 0.5rem;
  border: 2px solid #8fbfc9;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CardInfo = styled.div`
  color: white;
  border-radius: 0 0 1rem 1rem;
  background-color: #4e719a;
  padding: 1.5rem;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #adb7be;
`;

const TagButton = styled.button<{ isSelected: boolean }>`
  border-radius: 9999px;
  border-width: 2px;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  color: #adb7be;
  border-color: #5c6670;
  background-color: ${(props) => (props.isSelected ? "#4e719a" : "transparent")};
  color: ${(props) => (props.isSelected ? "white" : "#adb7be")};
`;

export default ProjectsSection;
