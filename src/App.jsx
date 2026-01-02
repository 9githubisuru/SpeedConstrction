import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import Introduction from "./components/Introduction";
import CommonQuestions from "./components/CommonQuestions";
import Bottom from "./components/Bottom";
import HouseDesign from "./pages/HouseDesign";
import Lands from "./pages/lands";
import OnGoingProject from "./pages/OnGoingProject";
import Carousel from "./components/Carousel";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const heroRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Split text animation for the headings
    const splitText = new SplitText(".hero-title", { type: "chars" });
    tl.from(splitText.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    // Entrance animations for images
    gsap.from(image1Ref.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
    });

    gsap.from(image2Ref.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.8,
    });

    gsap.from(image3Ref.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power2.out",
      delay: 1.1,
    });

    // Parallax animations for images
    gsap.to(image1Ref.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image2Ref.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image3Ref.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative">
            <NavBar />
            <Hero
              ref={heroRef}
              image1Ref={image1Ref}
              image2Ref={image2Ref}
              image3Ref={image3Ref}
            />
            <CategorySection />
            <Carousel />
            <Introduction />
            <CommonQuestions />
            <Bottom />
          </div>
        }
      />
      <Route path="/house-design" element={<HouseDesign />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/ongoing-projects" element={<OnGoingProject />} />
    </Routes>
  );
}

export default App;
