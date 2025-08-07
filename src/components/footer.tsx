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
        toggled ? "bg-[#0c0c0c] text-white" : "bg-[#f3f4f6] text-black"
      } py-2 lg:py-4`}
    >
      <div className="relative flex items-center mx-auto w-full h-[10rem] lg:max-w-10/12 lg:h-[20rem]">
        {/* Logo */}
        <img
          src={toggled ? logo2_w : logo2_b}
          alt="Logo"
          className="w-16 lg:w-40 hidden lg:flex"
        />

        {/* Contact Info */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center top-6 lg:top-20">
          <div className="font-bold relative text-xl -top-4 lg:text-4xl lg:-top-12">
            Connect with Me
          </div>
          <div className="flex items-center gap-5 lg:gap-10">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/steve-andrei-fajilan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://devicon-website.vercel.app/api/linkedin/plain.svg?color=%23${
                  toggled ? "ffffff" : "000000"
                }`}
                alt="LinkedIn"
                className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/steiib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://devicon-website.vercel.app/api/github/original.svg?color=%23${
                  toggled ? "ffffff" : "000000"
                }`}
                alt="GitHub"
                className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/steiib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://icongr.am/feather/instagram.svg?size=128&color=${
                  toggled ? "ffffff" : "000000"
                }`}
                alt="Instagram"
                className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
              />
            </a>

            {/* Steam */}
            <a
              href="https://steamcommunity.com/id/steiib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://icongr.am/material/steam.svg?size=128&color=${
                  toggled ? "ffffff" : "000000"
                }`}
                alt="Steam"
                className="w-7 lg:w-14 hover:scale-115 transition-all duration-150"
              />
            </a>
          </div>
        </div>
        {/* Email, Resume, Location */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center font-medium tracking-widest bottom-11 w-full text-[11px] lg:bottom-20 lg:text-xl">
          <button
            onClick={() => {
              navigator.clipboard.writeText("sfajilan27@gmail.com");
            }}
            className="hover:text-gray-600 cursor-pointer transition-all duration-150"
            title="Click to copy"
          >
            sfajilan27@gmail.com
          </button>{" "}
          |
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 cursor-pointer transition-all duration-200"
          >
            {" "}
            View Resume
          </a>{" "}
          | Rizal, Philippines
        </div>

        {/* Copyright */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center -bottom-2 mb-2 text-[8px] lg:text-sm">
          &copy; {new Date().getFullYear()} Steve Andrei Fajilan
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
