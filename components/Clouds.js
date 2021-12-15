import React, { useState, useEffect } from "react";

const Clouds = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", scrollListener);
    return () => document.removeEventListener("scroll", scrollListener);
  }, []);

  const scrollListener = () => {
    setOffset(window.pageYOffset);
  };

  return (
    <div className="absolute w-full">
      <div className="relative w-full h-screen overflow-x-hidden">
        <img
          src="/web/clouds-left.png"
          style={{ left: `-${offset}px` }}
          className="absolute left-0 w-9/12 opacity-100 md:w-5/12 top-48"
        />
        <img
          src="/web/clouds-right.png"
          style={{ right: `-${offset}px` }}
          className="absolute right-0 w-9/12 opacity-100 md:w-5/12 top-48"
        />
      </div>
    </div>
  );
};

export default Clouds;
