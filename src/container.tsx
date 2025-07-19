interface ContainerProps {
  toggled: boolean;
  children?: React.ReactNode;
}

function Container({ toggled, children }: ContainerProps) {
  return (
    <div
      className={`${toggled ? "bg-black/5" : "bg-white/5"} backdrop-blur-md w-auto h-20 shadow-md lg:h-35 mx-auto  mt-3 lg:mt-6 rounded-2xl p-4 flex justify-center items-center`}
    >
      {children}
    </div>
  );
}

export default Container;
