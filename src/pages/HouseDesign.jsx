import React from "react";
import NavBar from "../components/navBar";
import HouseCard from "../components/HouseCard";

// Import house images
import img1 from "../assets/housedesign/img1.jpeg";
import img2 from "../assets/housedesign/img2.jpeg";
import img3 from "../assets/housedesign/img3.jpeg";
import img4 from "../assets/housedesign/img4.jpeg";
import img5 from "../assets/housedesign/img5.jpeg";
import img6 from "../assets/housedesign/img6.jpeg";
import img7 from "../assets/housedesign/img7.jpeg";
import img8 from "../assets/housedesign/img8.jpeg";

import dr1 from "../assets/Drawing/draw1.png";
import dr2 from "../assets/Drawing/draw2.png";
import dr3 from "../assets/Drawing/draw3.png";
import dr4 from "../assets/Drawing/draw4.png";
import dr5 from "../assets/Drawing/draw5.png";
import dr6 from "../assets/Drawing/draw6.png";
import dr7 from "../assets/Drawing/draw7.png";
import dr8 from "../assets/Drawing/draw8.png";
import dr9 from "../assets/Drawing/draw9.png";
import dr10 from "../assets/Drawing/draw10.png";
import dr11 from "../assets/Drawing/draw11.png";
import dr12 from "../assets/Drawing/draw12.png";

import HousePlanPackage from "../components/HousePlanPackage";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Bottom";

const houseData = [
  {
    image: img1,
    title: "Modern Villa",
    description:
      "A spacious modern villa with contemporary design and ample natural light.",
  },
  {
    image: img2,
    title: "Cozy Cottage",
    description:
      "Charming cottage perfect for a small family, featuring rustic elements.",
  },
  {
    image: img3,
    title: "Urban Apartment",
    description: "Sleek urban apartment design optimized for city living.",
  },
  {
    image: img4,
    title: "Luxury Mansion",
    description:
      "Grand mansion with high-end finishes and extensive living spaces.",
  },
  {
    image: img5,
    title: "Beach House",
    description:
      "Relaxing beach house design with ocean views and open layouts.",
  },
  {
    image: img6,
    title: "Mountain Retreat",
    description:
      "Cozy mountain retreat blending comfort with natural surroundings.",
  },
  {
    image: img7,
    title: "Minimalist Home",
    description:
      "Clean and simple minimalist design focusing on functionality.",
  },
  {
    image: img8,
    title: "Traditional House",
    description:
      "Classic traditional house with timeless architectural elements.",
  },
];

const Drawings = [
  {
    id: 1,
    image: dr1,
  },
  {
    id: 2,
    image: dr2,
  },
  {
    id: 3,
    image: dr3,
  },
  {
    id: 4,
    image: dr4,
  },
  {
    id: 5,
    image: dr5,
  },
  {
    id: 6,
    image: dr6,
  },
  {
    id: 7,
    image: dr7,
  },
  {
    id: 8,
    image: dr8,
  },
  {
    id: 9,
    image: dr9,
  },
  {
    id: 10,
    image: dr10,
  },
  {
    id: 11,
    image: dr11,
  },
  {
    id: 12,
    image: dr12,
  },
];

const HouseDesigns = () => {
  const navigate = useNavigate();

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
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our House Designs
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse through a curated selection of house designs to find
            inspiration for your dream home. Each design is crafted to blend
            aesthetics with functionality, ensuring a perfect fit for your
            lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {houseData.map((house, index) => (
            <HouseCard key={index} image={house.image} title={house.title} />
          ))}
        </div>

        <div className="text-center mt-12 mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Sample Drawings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Drawings.map((house, index) => (
            <HouseCard key={index} image={house.image} title={house.title} />
          ))}
        </div>
        <HousePlanPackage />
      </div>
      <Bottom />
    </div>
  );
};

export default HouseDesigns;
