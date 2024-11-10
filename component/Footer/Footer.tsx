"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./Footer.css";

// Define the shape of the social link object
interface SocialLink {
  icon: React.ReactNode; // The icon will be a React component
  url: string; // URL of the social link
}

const Footer: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const currentYear = new Date().getFullYear();

  // Array of social media links with their respective icons and URLs
  const SocialLinks: SocialLink[] = [
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
      url: "https://www.linkedin.com/in/maham-saif-996906306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app//",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/MahamSaif786",
    },
  ];

  return (
    <footer className="footer">
      {showContent && (
        <div className="footer-container">
          <Link href="/">
            <h1 className="footer-title">
              Maham <span className="highlighted-text">Saif</span>
            </h1>
          </Link>
          <p className="footer-text">© {currentYear} Portfolio</p>
          <span className="social-links">
            <ul className="social-links-list">
              {SocialLinks.map((link) => (
                <li key={link.url} className="social-link-item">
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
