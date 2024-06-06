import React from "react";

type Logo3DProps = {
  className?: string;
};

const Logo3D: React.FC<Logo3DProps> = ({ className = "" }) => {
  return (
    <div className={`min-w-[300px] relative bg-[url(/assets/images/logo_3d.png)] bg-center bg-no-repeat bg-contain w-[300px] h-[291px] max-md:w-[250px] max-md:h-[242px] max-md:overflow-hidden ${className}`}>
      <div className="absolute bg-[url(/assets/images/effect0.gif)] bg-no-repeat bg-contain w-[166px] h-[140px] top-[135px] max-md:top-[100px] max-md:left-[20px] left-0 -z-[1] rotate-[20deg]"></div>
      <div className="absolute bg-[url(/assets/images/effect0.gif)] bg-no-repeat bg-contain w-[166px] h-[140px] top-[175px] max-md:top-[140px] max-md:left-[140px] left-[125px] -z-[1] rotate-[20deg]"></div>
      <div
        className="absolute w-[414px] h-[414px] bg-no-repeat bg-contain -top-[35px] -left-[83px] -z-[1]"
        style={{
          backgroundImage: "url(/assets/images/effect1.gif)",
          maskImage: "linear-gradient(180deg, #000 -6%, rgba(0, 0, 0, 0) 75%)",
          mixBlendMode: "lighten",
        }}
      ></div>
    </div>
  );
};

export default Logo3D;
