import {
  Home,
  Ruler,
  Layers,
  Zap,
  Droplets,
  Paintbrush,
  Sofa,
  DoorOpen,
  Cuboid,
} from "lucide-react";

const features = [
  {
    icon: <Ruler className="w-8 h-8 text-[#82d3ff]" />,
    title: "Site Planning",
    desc: "Accurate site layout planning based on land size, orientation, access, and regulations.",
  },
  {
    icon: <Home className="w-8 h-8 text-[#82d3ff]" />,
    title: "Architectural Design",
    desc: "Functional and aesthetic floor plans, elevations, and section drawings.",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#82d3ff]" />,
    title: "Structural Details",
    desc: "Foundation, column, beam, and slab details designed for strength and safety.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#82d3ff]" />,
    title: "Electrical Drawings",
    desc: "Lighting, switch, socket, and power outlet layouts for modern living.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#82d3ff]" />,
    title: "Plumbing Drawings",
    desc: "Water supply, drainage, and sanitary layouts with efficient flow planning.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-[#82d3ff]" />,
    title: "Finishes Drawings",
    desc: "Floor, wall, ceiling finishes and material specifications clearly defined.",
  },
  {
    icon: <Sofa className="w-8 h-8 text-[#82d3ff]" />,
    title: "Furniture Arrangement",
    desc: "Optimized furniture layouts to maximize space, comfort, and movement.",
  },
  {
    icon: <DoorOpen className="w-8 h-8 text-[#82d3ff]" />,
    title: "Door & Window Details",
    desc: "Accurate schedules with dimensions, materials, and opening directions.",
  },
  {
    icon: <Cuboid className="w-8 h-8 text-[#82d3ff]" />,
    title: "3D Visualization",
    desc: "4 high-quality 3D images to visualize your home before construction.",
  },
];

const HousePlanPackage = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          House Plan Design Package
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          A complete, professional house planning solution providing all
          technical drawings and 3D visuals required to start construction with
          confidence. <br></br>This package includes all essential
          architectural, structural, and technical drawings, carefully prepared
          by experienced professionals, along with high-quality 3D
          visualizations to help you clearly understand the final outcome before
          construction begins.
        </p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Ready to Design Your Dream Home?
        </h3>
        <p className="mt-3 text-gray-600">
          Get a complete house plan package tailored to your lifestyle and
          budget.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#82d3ff] hover:bg-[#030c10] text-black hover:text-white px-8 py-3 rounded-xl font-medium transition">
            Request a House Plan
          </button>
          <button className="border border-[#82d3ff] text-[#82d3ff] hover:bg-orange-50 px-8 py-3 rounded-xl font-medium transition">
            Talk to Our Architect
          </button>
        </div>
      </div>
    </section>
  );
};

export default HousePlanPackage;
