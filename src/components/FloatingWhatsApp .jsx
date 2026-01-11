import { FaWhatsapp } from "react-icons/fa";

const WhatsAppPulse = () => {
  return (
    <a
      href="https://wa.me/94718717017"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
                 w-16 h-16 rounded-full bg-green-500 
                 flex items-center justify-center 
                 text-white text-3xl shadow-lg 
                 animate-pulse hover:animate-none"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppPulse;
