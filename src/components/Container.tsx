import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-start">{children}</div>
  );
};

export default Container;
