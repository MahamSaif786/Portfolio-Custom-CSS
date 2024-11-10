"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "@/images/maham.jpeg";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <motion.div
        className="about-container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="quote">
          The spark of passion spreads light on the path of our purpose.
        </h2>
        <motion.div
          className="content-wrapper"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="biography-section">
            <h2 className="biography-title">Biography</h2>
            <p className="biography-text">
              I&apos;m <span >Maham Saif</span>, a{" "}
              <span >Frontend developer</span> dedicated to
              creating engaging and intuitive user experiences. Specializing in{" "}
              <span>HTML, CSS</span>, and{" "}
              <span>JavaScript</span>, as well as{" "}
              <span>Next.js 14</span> and{" "}
              <span>Tailwind CSS</span>, I transform ideas
              into beautiful, functional web applications.
            </p>
            <p className="biography-text">
            I thrive in dynamic, collaborative environments, where creativity and technical prowess blend seamlessly to produce work that is both visually striking and technically flawless. Each project is an opportunity to explore the latest design trends and optimize functionality, ensuring an immersive and cohesive digital experience.
            </p>
            <p className="biography-text">
            My mission is to design digital solutions that not only engage users but also foster meaningful connections, creating lasting impressions that extend far beyond the screen.
            </p>
            <p className="biography-text">
            I am deeply committed to continuous growth, always staying abreast of emerging industry trends to implement forward-thinking solutions. By leveraging agile methodologies, I ensure efficient project execution, delivering high-quality results within deadlines.
            </p>
          </div>
          <div className="image-section">
            <div className="image-container">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={ProfileImage}
                  alt="ProfileImage"
                  className="profile-image"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
              </motion.div>
    </div>
  );
};

export default About;