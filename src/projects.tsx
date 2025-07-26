import Container from "./container";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  toggled: boolean;
}

function Projects({
  title,
  subtitle,
  description,
  images,
  toggled,
}: ProjectProps) {
  return (
    <div className="relative rounded-xl bg-[radial-gradient(circle_at_center_250%,_rgba(191,49,44,1),_transparent_80%)] bg-no-repeat">
      <Container toggled={toggled} height="h-50 lg:h-80">
        <div className="relative w-full h-full">
          {/* Title and Subtitle */}
          <div className="absolute top-2 left-2 lg:top-8 lg:left-10 text-left">
            <p className="text-md lg:text-3xl font-semibold">{title}</p>
            <p className="text-xs lg:text-lg mt-0 lg:mt-2 font-light w-30 lg:w-60">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="absolute top-4 right-2 lg:top-9 lg:right-3 text-left w-42 lg:w-118">
            <p className="text-xs lg:text-lg font-medium">{description}</p>
          </div>
        </div>
      </Container>

      {/* Project Images */}
      <div className="absolute top-40 lg:top-55 left-5 lg:left-10 flex gap-5 lg:gap-10">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} Preview ${index + 1}`}
            className="w-70 lg:w-170 rounded-xs hover:scale-105 transition-all"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
