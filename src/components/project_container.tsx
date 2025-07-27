import Container from "./container";

interface ContainerProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  toggled: boolean;
  gradientColor: string;
}

function Projects({
  title,
  subtitle,
  description,
  images,
  toggled,
  gradientColor,
}: ContainerProps) {
  const background = `radial-gradient(circle at center 250%, rgba(${gradientColor}), transparent 80%)`;

  return (
    <div
      className="relative rounded-2xl bg-no-repeat"
      style={{ backgroundImage: background }}
    >
      <Container toggled={toggled} height="h-50 lg:h-80">
        <div className="relative w-full h-full">
          {/* Title and Subtitle */}
          <div className="absolute top-1 left-2 lg:top-9 lg:left-8 text-left">
            <p className="text-md lg:text-3xl font-semibold">{title}</p>
            <p className="text-xs lg:text-lg mt-0 lg:mt-2 font-light w-30 lg:w-60">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="absolute top-2 right-2 lg:top-10 lg:right-5 text-left w-43 lg:w-125">
            <p className="text-xs lg:text-lg font-light">{description}</p>
          </div>
        </div>
      </Container>
      {/* Project Images */}
      <div className="absolute top-40 lg:top-50 left-5 lg:left-8 flex gap-3 lg:gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} Preview ${index + 1}`}
            className="w-80 lg:w-170 rounded-xs brightness-80 grayscale-25 hover:grayscale-0 hover:brightness-100 hover:scale-103 duration-200 transition-all"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
