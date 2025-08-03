import Container from "./container";

interface ContainerProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  toggled: boolean;
  gradientColor: string;
  tags: string[];
  link: string;
}

function Projects({
  title,
  subtitle,
  description,
  images,
  toggled,
  gradientColor,
  tags,
  link,
}: ContainerProps) {
  const background = `radial-gradient(circle at center 250%, rgba(${gradientColor}), transparent 80%)`;

  return (
    <div
      className="relative rounded-b-md bg-no-repeat"
      style={{ backgroundImage: background }}
    >
      <Container toggled={toggled} height="h-55 lg:h-80" rounded="rounded-md">
        <div className="relative w-full h-full">
          {/* Title and Subtitle */}
          <div className="absolute top-2 left-2 lg:top-2 lg:left-8 text-left">
            <p className="text-md lg:text-3xl font-semibold">{title}</p>
            <p className="text-xs lg:text-lg mt-0 lg:mt-2 font-light w-30 lg:w-60">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="absolute top-3 right-1 lg:top-5 lg:right-7 text-left w-45 lg:w-125">
            <p className="text-[10px] lg:text-[17px] font-light">
              {description}
            </p>
          </div>
        </div>
        {/* Tags */}
        <div className="absolute flex gap-1 left-5 top-35 lg:gap-2 lg:left-10 lg:top-38">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-[8px] lg:px-4 lg:text-[12px] font-semibold rounded-full ${
                toggled
                  ? "bg-[#0d0d0d]/5 text-black" // Light mode
                  : "bg-[#f2f2f2]/5 text-white" // Dark mode
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </Container>

      {/* Project Images */}
      <div className="absolute top-44 lg:top-50 left-5 lg:left-8 flex gap-3 lg:gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} Preview ${index + 1}`}
            className="w-80 lg:w-170 rounded-xs brightness-85 grayscale-15 hover:grayscale-0 hover:brightness-100 hover:scale-103 duration-200 transition-all"
          />
        ))}
      </div>

      {/* View Project Button */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`absolute -top-4 -right-2 w-14 h-7 lg:-top-5 lg:-right-5 lg:w-12 lg:h-12 hover:scale-125 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer z-10 ${
            toggled ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src={`https://icongr.am/feather/external-link.svg?size=128&color=${
              toggled ? "ffffff" : "000000"
            }`}
            alt="Open Project"
            className="w-4 lg:w-6"
          />
        </div>
      </a>
    </div>
  );
}

export default Projects;
