import logo2_b from "../images/logo2_b.png";
import logo2_w from "../images/logo2_w.png";
import Resume from "../assets/Steve-Andrei-Fajilan-Resume.pdf";

interface Footer {
  toggled: boolean;
}

const Footer = ({ toggled }: Footer) => {
  return (
    <footer
      className={`${
        toggled ? "bg-[#e0e0e0] text-black" : "bg-[#1a1a1a] text-white"
      } py-3 h-30 lg:py-8 lg:h-60 relative`}
    >
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-60">
          {/* Logo */}
          <div className="hidden lg:flex items-center gap-4">
            <img
              src={toggled ? logo2_b : logo2_w}
              alt="Logo"
              className="w-20 lg:w-40"
            />

            {/* Connect wit Me */}
            <div className="flex flex-col text-left">
              <span className="font-medium text-xl lg:text-4xl tracking-widest">
                CONNECT
              </span>
              <span className="font-light text-lg lg:text-3xl tracking-widest">
                WITH
              </span>
              <span className="font-medium text-xl lg:text-4xl tracking-widest">
                ME
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 w-full mt-3 lg:mt-6">
            {/* Icons */}
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <a
                href="https://www.linkedin.com/in/steve-andrei-fajilan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://devicon-website.vercel.app/api/linkedin/plain.svg?color=%23${
                    toggled ? "000000" : "ffffff"
                  }`}
                  alt="LinkedIn"
                  className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
                />
              </a>
              <a
                href="https://github.com/steiib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://devicon-website.vercel.app/api/github/original.svg?color=%23${
                    toggled ? "000000" : "ffffff"
                  }`}
                  alt="GitHub"
                  className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
                />
              </a>
              <a
                href="https://www.instagram.com/steiib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://icongr.am/feather/instagram.svg?size=128&color=${
                    toggled ? "000000" : "ffffff"
                  }`}
                  alt="Instagram"
                  className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
                />
              </a>
              <a
                href="https://steamcommunity.com/id/steiib/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://icongr.am/material/steam.svg?size=128&color=${
                    toggled ? "000000" : "ffffff"
                  }`}
                  alt="Steam"
                  className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
                />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-center font-medium tracking-widest text-[10px] lg:text-lg -mt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("sfajilan27@gmail.com");
                }}
                className="hover:text-gray-500 cursor-pointer transition-all duration-150"
                title="Click to copy"
              >
                sfajilan27@gmail.com
              </button>{" "}
              |
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 cursor-pointer transition-all duration-200"
              >
                {" "}
                View Resume
              </a>{" "}
              | Antipolo, Philippines
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center bottom-1 mb-1 text-[8px] lg:text-sm">
        &copy; {new Date().getFullYear()} Steve Andrei Fajilan. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
