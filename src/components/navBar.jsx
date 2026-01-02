import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../assets/logo.jpeg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const overlayRef = useRef();
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.set([overlayRef.current, menuRef.current], { autoAlpha: 0, y: -50 });
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
      });
    } else {
      gsap.to(menuRef.current, { autoAlpha: 0, y: -50, duration: 0.3 });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3, delay: 0.2 });
    }
  }, [isOpen]);

  useGSAP(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: isScrolled ? 0.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  useGSAP(() => {
    if (buttonRef.current) {
      const icon = buttonRef.current;
      if (isOpen) {
        gsap.to(icon, { rotation: 90, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
      }
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col  fixed top-0 left-0 w-full p-3 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-1xl font-medium text-[#4f6168]">
            Speed Construction & Property Development
          </span>
        </div>

        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-0 right-0 p-6 z-50 text-[#2c363a] text-2xl bg-transparent border-none cursor-pointer"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-left justify-center z-40 p-24"
      >
        <ul ref={menuRef} className="text-[#030c10] text-7xl space-y-4 mt-20">
          <a href="/">
            <li className="cursor-pointer hover:text-[#82d3ff]">Home</li>
          </a>
          <a href="/house-designs">
            <li className="cursor-pointer hover:text-[#82d3ff]">
              House Designs
            </li>
          </a>
          <a href="/services">
            <li className="cursor-pointer hover:text-[#82d3ff]">Lands</li>
          </a>
          <a href="/explore">
            <li className="cursor-pointer hover:text-[#82d3ff]">
              Ongoing Projects
            </li>
          </a>
          <a href="/contact">
            <li className="cursor-pointer hover:text-[#82d3ff]">Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
