import React from "react";
import NavBar from "../components/navBar";
import HouseCard from "../components/HouseCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Bottom";

import pro1 from "../assets/Projects/pro1.png";
import pro2 from "../assets/Projects/pro2.png";
import pro3 from "../assets/Projects/pro3.png";
import pro4 from "../assets/Projects/pro4.png";
import pro5 from "../assets/Projects/pro5.png";
import pro6 from "../assets/Projects/pro6.png";
import pro7 from "../assets/Projects/pro7.png";
import pro8 from "../assets/Projects/pro8.png";
import pro9 from "../assets/Projects/pro9.png";
import pro10 from "../assets/Projects/pro10.png";

const projectData = [
  {
    image: pro1,
    title: "Skyline Apartments",
  },
  {
    image: pro2,
    title: "Greenfield Villas",
  },
  {
    image: pro3,
    title: "Lakeside Residences",
  },
  {
    image: pro4,
    title: "Mountainview Homes",
  },
  {
    image: pro5,
    title: "Skyline Apartments",
  },
  {
    image: pro6,
    title: "Greenfield Villas",
  },
  {
    image: pro7,
    title: "Lakeside Residences",
  },
  {
    image: pro8,
    title: "Mountainview Homes",
  },
  {
    image: pro9,
    title: "Lakeside Residences",
  },
  {
    image: pro10,
    title: "Mountainview Homes",
  },
];
const OnGoingProject = () => {
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
          <h2 className="text-4xl font-bold text-gray-900">Ongoing Projects</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our current developments that reflect our commitment to
            quality, innovation, and timely delivery. Each project is carefully
            planned and executed using modern construction techniques, premium
            materials, and industry best practices to ensure long-term value and
            customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectData.map((house, index) => (
            <HouseCard key={index} image={house.image} title={house.title} />
          ))}
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default OnGoingProject;
