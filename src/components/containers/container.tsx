interface ContainerProps {
  toggled: boolean;
  height?: string;
  width?: string;
  rounded?: string;
  children?: React.ReactNode;
}

function Container({
  toggled,
  height = "",
  width = "",
  rounded = "",
  children,
}: ContainerProps) {
  return (
    <div
      className={`${toggled ? "bg-[#0c0c0c]/2" : "bg-[#f3f4f6]/2"} mx-auto mt-3 lg:mt-6 p-4 flex justify-center items-center ${rounded} ${height} ${width}`}
    >
      {children}
    </div>
  );
}

export default Container;
