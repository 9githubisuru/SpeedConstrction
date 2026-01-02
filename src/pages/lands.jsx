import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Bottom";
import NavBar from "../components/navBar";
import LandsCard from "../components/LandsCard";
import land1 from "../assets/Lands/galle.jpg";

const landsData = [
  {
    image: land1,
    title: "Galle | Prime Coastal Land",
    description: `📐 Extent: 20 Perches
🌴 Peaceful surroundings with easy access to Galle city, beaches, and main roads.
🏡 Ideal for residential or investment purposes.`,
  },
];

const Lands = () => {
  const navigate = useNavigate();
  return (
    <>
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
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            Lands Available for Purchase
          </h2>
          <p className="my-4 text-gray-600 max-w-2xl ">
            Explore our exclusive listings of prime lands for sale. Each
            property is selected to offer you the best opportunities for
            investment or development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {landsData.map((land, index) => (
              <LandsCard
                key={index}
                image={land.image}
                title={land.title}
                description={land.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Lands;
