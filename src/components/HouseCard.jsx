import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const HouseCard = ({ image, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const imageRef = useRef(null);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    if (modalRef.current && imageRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => setIsOpen(false),
      });
      gsap.to(imageRef.current, {
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current && imageRef.current) {
      gsap.set(modalRef.current, { opacity: 0 });
      gsap.set(imageRef.current, { scale: 0.8 });
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover cursor-pointer"
          onClick={openModal}
        />
        {/* <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div> */}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <img
              ref={imageRef}
              src={image}
              alt={title}
              className="w-[650px] h-[650px] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HouseCard;
