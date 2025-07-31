interface ContainerProps {
  toggled: boolean;
  height?: string;
  children?: React.ReactNode;
}

function Container({ toggled, height = "", children }: ContainerProps) {
  return (
    <div
      className={`${toggled ? "bg-[#0c0c0c]/3" : "bg-[#f3f4f6]/3"} bg-no-repeat backdrop-blur-md w-auto shadow-md mx-auto mt-3 lg:mt-6 rounded-2xl p-4 flex justify-center items-center ${height}`}
    >
      {children}
    </div>
  );
}

export default Container;
