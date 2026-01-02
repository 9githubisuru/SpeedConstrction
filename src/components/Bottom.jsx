import logo from "../assets/logo.jpeg";

const BottomCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#040b10] to-[#02080c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          {/* Main Heading */}
          <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-medium leading-tight mb-24">
            Build with confidence
          </h1>
          <img
            src={logo}
            alt="Speed Construction Logo"
            className="h-30 w-30 opacity-90"
          />
        </div>
        {/* Bottom Content */}
        <div className="flex flex-row md:flex-row justify-between items-start md:items-center gap-8">
          {/* Email */}
          <a
            href="mailto:speedconstruction.info@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            speedconstruction.info@gmail.com
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            +94 71 871 7017
          </a>

          {/* Social Links */}
          <div className="flex gap-8 text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
