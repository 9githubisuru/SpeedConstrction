import { useEffect, useRef } from "react";
import gsap from "gsap";

import construction from "../assets/img2.jpg";
import farmland from "../assets/img3.jpg";
import house from "../assets/img4.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(imagesRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1
            ref={(el) => (textRef.current[0] = el)}
            className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
          >
            Innovate.
            <br />
            Construct.
            <br />
            Excel.
          </h1>

          <p
            ref={(el) => (textRef.current[1] = el)}
            className="mt-6 text-gray-600 max-w-md"
          >
            Expert solutions in construction and property development. Discover
            our capabilities in home design, land procurement, and customized
            services to realize your vision efficiently.
          </p>

          <div
            ref={(el) => (textRef.current[2] = el)}
            className="mt-8 flex gap-4"
          >
            <button className="px-6 py-3 rounded-md bg-[#82d3ff] text-[#030c10] font-medium hover:bg-sky-500 transition">
              Homes
            </button>
            <button className="px-6 py-3 rounded-md border border-[#030c10] text-gray-800 hover:bg-gray-100 transition">
              Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src={construction}
              alt="Construction"
              className="rounded-2xl object-cover h-56 w-full"
            />
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src={house}
              alt="House"
              className="rounded-2xl object-cover h-56 w-full"
            />
          </div>

          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src={farmland}
            alt="Land"
            className="rounded-2xl object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
