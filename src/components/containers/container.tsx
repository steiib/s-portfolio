interface ContainerProps {
  toggled: boolean;
  height?: string;
  rounded?: string;
  children?: React.ReactNode;
}

function Container({
  toggled,
  height = "",
  rounded = "",
  children,
}: ContainerProps) {
  return (
    <div
      className={`${toggled ? "bg-[#0c0c0c]/2" : "bg-[#f3f4f6]/2"} bg-no-repeat backdrop-blur-md w-auto shadow-md mx-auto mt-3 lg:mt-6 p-4 flex justify-center items-center ${rounded} ${height}`}
    >
      {children}
    </div>
  );
}

export default Container;
