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
      } py-2`}
    >
      <div className="relative flex items-center mx-auto w-full h-[6rem] lg:max-w-11/12 lg:h-[12rem]">
        <div className="flex items-center gap-7">
          {/* Logo */}
          <img
            src={toggled ? logo2_b : logo2_w}
            alt="Logo"
            className="lg:w-40 hidden lg:block"
          />

          {/* Connect with Me*/}
          <div className="hidden lg:flex flex-col">
            <span className="font-medium lg:text-4xl tracking-widest">
              CONNECT
            </span>
            <span className="font-light lg:text-3xl tracking-widest">WITH</span>
            <span className="font-medium lg:text-4xl tracking-widest">ME</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center top-3 lg:top-6">
          <div className="flex items-center gap-5 lg:gap-10">
            {/* LinkedIn */}
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
                className="w-8 lg:w-16 hover:scale-115 transition-all duration-150"
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
                  toggled ? "000000" : "ffffff"
                }`}
                alt="GitHub"
                className="w-8 lg:w-16 hover:scale-115 transition-all duration-150"
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
                  toggled ? "000000" : "ffffff"
                }`}
                alt="Instagram"
                className="w-8 lg:w-16 hover:scale-115 transition-all duration-150"
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
                  toggled ? "000000" : "ffffff"
                }`}
                alt="Steam"
                className="w-8 lg:w-16 hover:scale-115 transition-all duration-150"
              />
            </a>
          </div>
        </div>
        {/* Email, Resume, Location */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center font-medium tracking-widest bottom-7 w-full text-[10px] lg:bottom-14 lg:text-[18px]">
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
