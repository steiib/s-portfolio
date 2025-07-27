interface ContainerProps {
  toggled: boolean;
  height?: string;
  children?: React.ReactNode;
}

function Container({ toggled, height = "", children }: ContainerProps) {
  return (
    <div
      className={`${toggled ? "bg-black/5" : "bg-white/5"} backdrop-blur-md w-auto shadow-md mx-auto mt-3 lg:mt-6 rounded-xl p-4 flex justify-center items-center ${height}`}
    >
      {children}
    </div>
  );
}

export default Container;
