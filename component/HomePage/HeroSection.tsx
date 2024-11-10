"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Photo from "./Photo";
import "./HeroSection.css";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/share/1BnuaPeRVL/",
    },
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/_maham_441/profilecard/?igsh=cWpqeXhpNm9zMDJo/",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/maham-saif-996906306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/MahamSaif786",
    },
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3 className="hero-title">Frontend Developer</h3>
        <h2 className="hero-name">
          <span className="hero-highlight">Hello!</span> I am <br />
          Maham <span className="hero-highlight">Saif</span>
        </h2>
        <p className="hero-description">
        Develop responsive, user-friendly websites and web applications using HTML, CSS, TypeScript, and modern frontend frameworks such as Next.js and Tailwind CSS. Work closely with designers and backend developers to create high-quality web experiences. Continuously stay updated on the latest web development trends and best practices to ensure cutting-edge solutions.
        </p>
        <div className="cta-container">
          <div className="button-container">
            <Link href="/contact">
              <button className="hire-button">Hire Me</button>
            </Link>
          </div>
          <div className="social-container">
            <ul className="social-list">
              {socialLinks.map((link) => (
                <li key={link.url} className="social-item">
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="photo-container">
        <Photo />
      </div>
    </div>
  );
};

export default HeroSection;