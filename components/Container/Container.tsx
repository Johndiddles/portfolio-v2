import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      {children}
    </div>
  );
};

export default Container;
