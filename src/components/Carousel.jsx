import { useEffect, useRef } from "react";
import gsap from "gsap";
import img1 from "../assets/housedesign/img1.jpeg";
import img2 from "../assets/housedesign/img2.jpeg";
import img3 from "../assets/housedesign/img3.jpeg";
import img4 from "../assets/housedesign/img4.jpeg";
import img5 from "../assets/Drawing/draw1.png";
import img6 from "../assets/Drawing/draw2.png";
import img7 from "../assets/Drawing/draw3.png";
import img8 from "../assets/Drawing/draw4.png";
import img9 from "../assets/Drawing/draw5.png";
import img10 from "../assets/Drawing/draw6.png";
import img11 from "../assets/Drawing/draw7.png";
import img12 from "../assets/Drawing/draw8.png";

const designs = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
  {
    id: 9,
    image: img9,
  },
  {
    id: 10,
    image: img10,
  },
  {
    id: 11,
    image: img11,
  },
  {
    id: 12,
    image: img12,
  },
];

const HomeDesignCarousel = () => {
  const scrollRef = useRef(null);
  const cardWidth = 340; // match card width

  // Manual scroll via arrows
  const scroll = (direction) => {
    gsap.to(scrollRef.current, {
      scrollTo: {
        x: direction === "left" ? `-=${cardWidth}` : `+=${cardWidth}`,
      },
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // Automatic scrolling using GSAP
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollDistance = container.scrollWidth - container.clientWidth;

    const tl = gsap.to(container, {
      scrollTo: { x: scrollDistance },
      duration: 15, // adjust speed
      ease: "none",
      repeat: -1,
      yoyo: false,
    });

    return () => tl.kill();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Sample Home Designs
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              Explore our professionally designed home concepts created to match
              different lifestyles, budgets, and preferences.
            </p>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border-2 border-[#030c10] hover:bg-[#82d3ff] hover:text-black transition"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border-2 border-[#030c10] hover:bg-[#82d3ff] hover:text-black transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{
            msOverflowStyle: "none", // IE/Edge
            scrollbarWidth: "none", // Firefox
          }}
        >
          {/* Hide scrollbar for Chrome/Safari */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {designs.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] bg-white rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="h-66 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              {/* <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.desc}
                </p>
                <button className="mt-4 text-orange-500 font-medium text-sm hover:underline">
                  View Design →
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDesignCarousel;
