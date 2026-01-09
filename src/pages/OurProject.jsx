import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/navBar";
import HouseCard from "../components/HouseCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Bottom";
import gsap from "gsap";

import pro_a from "../assets/Projects/Kollupitiya Culvert Construction/14.jpeg";
import proa1 from "../assets/Projects/Kollupitiya Culvert Construction/1.jpeg";
import proa2 from "../assets/Projects/Kollupitiya Culvert Construction/2.jpeg";
import proa3 from "../assets/Projects/Kollupitiya Culvert Construction/3.jpeg";
import proa4 from "../assets/Projects/Kollupitiya Culvert Construction/4.jpeg";
import proa5 from "../assets/Projects/Kollupitiya Culvert Construction/5.jpeg";
import proa6 from "../assets/Projects/Kollupitiya Culvert Construction/6.jpeg";
import proa7 from "../assets/Projects/Kollupitiya Culvert Construction/7.jpeg";
import proa8 from "../assets/Projects/Kollupitiya Culvert Construction/8.jpeg";
import proa9 from "../assets/Projects/Kollupitiya Culvert Construction/9.jpeg";
import proa10 from "../assets/Projects/Kollupitiya Culvert Construction/10.jpeg";
import proa11 from "../assets/Projects/Kollupitiya Culvert Construction/11.jpeg";
import proa12 from "../assets/Projects/Kollupitiya Culvert Construction/12.jpeg";
import proa13 from "../assets/Projects/Kollupitiya Culvert Construction/13.jpeg";
import proa14 from "../assets/Projects/Kollupitiya Culvert Construction/15.jpeg";
import proa15 from "../assets/Projects/Kollupitiya Culvert Construction/16.jpeg";
import proa16 from "../assets/Projects/Kollupitiya Culvert Construction/17.jpeg";
import proa17 from "../assets/Projects/Kollupitiya Culvert Construction/18.jpeg";

import pro_b from "../assets/Projects/Baththaramulla/12.jpeg";
import prob1 from "../assets/Projects/Baththaramulla/1.jpeg";
import prob2 from "../assets/Projects/Baththaramulla/2.jpeg";
import prob3 from "../assets/Projects/Baththaramulla/3.jpeg";
import prob4 from "../assets/Projects/Baththaramulla/4.jpeg";
import prob5 from "../assets/Projects/Baththaramulla/5.jpeg";
import prob6 from "../assets/Projects/Baththaramulla/6.jpeg";
import prob7 from "../assets/Projects/Baththaramulla/7.jpeg";
import prob8 from "../assets/Projects/Baththaramulla/8.jpeg";
import prob9 from "../assets/Projects/Baththaramulla/9.jpeg";
import prob10 from "../assets/Projects/Baththaramulla/10.jpeg";
import prob11 from "../assets/Projects/Baththaramulla/11.jpeg";

import pro_c from "../assets/Projects/Gothatuwa Project/18.jpeg";
import proc1 from "../assets/Projects/Gothatuwa Project/1.jpeg";
import proc2 from "../assets/Projects/Gothatuwa Project/2.jpeg";
import proc3 from "../assets/Projects/Gothatuwa Project/3.jpeg";
import proc4 from "../assets/Projects/Gothatuwa Project/4.jpeg";
import proc5 from "../assets/Projects/Gothatuwa Project/5.jpeg";
import proc6 from "../assets/Projects/Gothatuwa Project/6.jpeg";
import proc7 from "../assets/Projects/Gothatuwa Project/7.jpeg";
import proc8 from "../assets/Projects/Gothatuwa Project/8.jpeg";
import proc9 from "../assets/Projects/Gothatuwa Project/9.jpeg";
import proc10 from "../assets/Projects/Gothatuwa Project/10.jpeg";
import proc11 from "../assets/Projects/Gothatuwa Project/11.jpeg";
import proc12 from "../assets/Projects/Gothatuwa Project/12.jpeg";
import proc13 from "../assets/Projects/Gothatuwa Project/13.jpeg";
import proc14 from "../assets/Projects/Gothatuwa Project/14.jpeg";
import proc15 from "../assets/Projects/Gothatuwa Project/15.jpeg";
import proc16 from "../assets/Projects/Gothatuwa Project/16.jpeg";
import proc17 from "../assets/Projects/Gothatuwa Project/17.jpeg";
import proc18 from "../assets/Projects/Gothatuwa Project/18.jpeg";
import proc19 from "../assets/Projects/Gothatuwa Project/19.jpeg";
import proc20 from "../assets/Projects/Gothatuwa Project/20.jpeg";
import proc21 from "../assets/Projects/Gothatuwa Project/21.jpeg";
import proc22 from "../assets/Projects/Gothatuwa Project/22.jpeg";
import proc23 from "../assets/Projects/Gothatuwa Project/23.jpeg";
import proc24 from "../assets/Projects/Gothatuwa Project/24.jpeg";
import proc25 from "../assets/Projects/Gothatuwa Project/25.jpeg";
import proc26 from "../assets/Projects/Gothatuwa Project/26.jpeg";
import proc27 from "../assets/Projects/Gothatuwa Project/27.jpeg";

const categories = [
  {
    name: "Kollupitiya Culvert Construction",
    representative: pro_a,
    images: [
      proa1,
      proa2,
      proa3,
      proa4,
      proa5,
      proa6,
      proa7,
      proa8,
      proa9,
      proa10,
      proa11,
      proa12,
      proa13,
      proa14,
      proa15,
      proa16,
      proa17,
    ],
  },
  {
    name: "Baththaramulla Thilina Factory Construction",
    representative: pro_b,
    images: [
      prob1,
      prob2,
      prob3,
      prob4,
      prob5,
      prob6,
      prob7,
      prob8,
      prob9,
      prob10,
      prob11,
    ],
  },
  {
    name: "Gothatuwa Project",
    representative: pro_c,
    images: [
      proc1,
      proc2,
      proc3,
      proc4,
      proc5,
      proc6,
      proc7,
      proc8,
      proc9,
      proc10,
      proc11,
      proc12,
      proc13,
      proc14,
      proc15,
      proc16,
      proc17,
      proc18,
      proc19,
      proc20,
      proc21,
      proc22,
      proc23,
      proc24,
      proc25,
      proc26,
      proc27,
    ],
  },
];
const OurProject = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const modalRef = useRef(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => setIsModalOpen(false),
      });
    }
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.set(modalRef.current, { opacity: 0, scale: 0.8 });
      gsap.to(modalRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <NavBar />

        <div className="text-center mt-12 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 my-6"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our current developments that reflect our commitment to
            quality, innovation, and timely delivery. Each project is carefully
            planned and executed using modern construction techniques, premium
            materials, and industry best practices to ensure long-term value and
            customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(category)}
            >
              <img
                src={category.representative}
                alt={category.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Bottom />

      {isModalOpen && selectedCategory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative max-w-6xl max-h-full p-4 bg-white rounded-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedCategory.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedCategory.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedCategory.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    /* could open another modal for larger view */
                  }}
                />
              ))}
            </div>
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProject;
