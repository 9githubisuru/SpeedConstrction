import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/construction.jpg";
import img2 from "../assets/img5.jpg";
import img3 from "../assets/img6.jpg";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    label: "HOUSE DESIGN",
    title: "Smart homes, built to last",
    description:
      "Discover modern, efficient home designs tailored for comfort and long-term value.",
    image: img1,
  },
  {
    label: "QUALITY CONSTRUCTION",
    title: "Precision in every detail",
    description:
      "We use premium materials and advanced techniques to ensure durability and safety.",
    image: img2,
  },
  {
    label: "INVESTMENT VALUE",
    title: "Build. Invest. Transform.",
    description:
      "Construction solutions designed to maximize returns and long-term sustainability.",
    image: img3,
  },
];

const WhySpeedConstruction = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${contentData.length * 100}%`,
        pin: pinRef.current,
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(
            contentData.length - 1,
            Math.floor(self.progress * contentData.length)
          );
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate text + image on change
  useEffect(() => {
    // TEXT
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // IMAGE (slide left → right)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="bg-[#07141a] text-white">
      {/* PINNED AREA */}
      <div
        ref={pinRef}
        className="min-h-screen flex items-center px-6 lg:px-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto w-full">
          {/* IMAGE */}
          <div
            ref={imageWrapperRef}
            className="relative h-[520px] rounded-2xl overflow-hidden"
          >
            <img
              key={activeIndex}
              ref={imageRef}
              src={contentData[activeIndex].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div ref={textRef} className="flex flex-col justify-center max-w-xl">
            <span className="text-sm tracking-widest text-gray-400 mb-4">
              {contentData[activeIndex].label}
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              {contentData[activeIndex].title}
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              {contentData[activeIndex].description}
            </p>

            <button className="mt-10 w-fit px-6 py-3 border border-white/30 rounded-md hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL SPACE */}
      {/* <div style={{ height: `${contentData.length * 100}vh` }} /> */}
    </section>
  );
};

export default WhySpeedConstruction;
