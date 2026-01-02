import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import houseImg from "../assets/housedesign/img1.jpeg";
import landImg from "../assets/lands.jpg";
import serviceImg from "../assets/services.jpg";

const tabs = [
  {
    id: "house",
    label: "House Design",
    title: "Designs for modern living",
    description:
      "Choose from a range of efficient, modern house plans designed for comfort, style, and lasting value.",
    cta: "Explore our designs",
    image: houseImg,
  },
  {
    id: "lands",
    label: "Lands",
    title: "Prime lands for your future",
    description:
      "Discover strategically located lands perfect for residential and investment purposes.",
    cta: "View available lands",
    image: landImg,
  },
  {
    id: "Ongoing Projects",
    label: "Ongoing Projects",
    title: "End-to-end construction services",
    description:
      "From planning to completion, we offer professional construction and consultancy services.",
    cta: "View our works",
    image: serviceImg,
  },
];

const CategorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const tabsWrapperRef = useRef(null);
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Move underline
  const moveUnderline = (index) => {
    const tabEl = tabRefs.current[index];
    const wrapperEl = tabsWrapperRef.current;
    if (!tabEl || !wrapperEl) return;

    const tabRect = tabEl.getBoundingClientRect();
    const wrapperRect = wrapperEl.getBoundingClientRect();

    gsap.to(underlineRef.current, {
      width: tabRect.width,
      x: tabRect.left - wrapperRect.left,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  // Init underline
  useEffect(() => {
    moveUnderline(0);
    window.addEventListener("resize", () => moveUnderline(activeIndex));
    return () =>
      window.removeEventListener("resize", () => moveUnderline(activeIndex));
  }, []);

  // Animate text + image on tab change
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [activeIndex]);

  const activeTab = tabs[activeIndex];

  const handleClicked = () => {
    if (activeTab.id === "house") {
      navigate("/house-design");
    } else if (activeTab.id === "lands") {
      navigate("/lands");
    } else if (activeTab.id === "Ongoing Projects") {
      navigate("/ongoing-projects");
    }
  };

  return (
    <section className="min-h-screen bg-[#07141a] text-white px-6 lg:px-20 py-12">
      {/* Tabs */}
      <div
        ref={tabsWrapperRef}
        className="relative flex justify-center gap-24 text-lg font-medium text-gray-400"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => {
              setActiveIndex(index);
              moveUnderline(index);
            }}
            className={`pb-3 transition-colors duration-300 ${
              activeIndex === index ? "text-white" : "hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={textRef} className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            {activeTab.title}
          </h2>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-medium mb-4">{activeTab.label}</h3>

            <p className="text-gray-300 leading-relaxed">
              {activeTab.description}
            </p>

            <button
              onClick={handleClicked}
              className="mt-6 inline-flex items-center gap-2 text-sky-400 hover:gap-3 transition-all"
            >
              {activeTab.cta}
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <img
            ref={imageRef}
            src={activeTab.image}
            alt={activeTab.label}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
