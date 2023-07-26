import React from "react";
import Search from "./Search";
const Header: React.FC = () => {
  return (
    <div className="flex relative z-10 justify-between w-full">
      <div className="flex items-center gap-6 w-full">
        <div className="flex gap-6 ">
          <span>
            <i className="fa-solid fa-arrow-left  text-[#665c6c] text-[24px]"></i>
          </span>
          <span>
            <i className="fa-solid fa-arrow-right text-[#665c6c] text-[24px]"></i>
          </span>
        </div>
        <div className="w-[70%]">
          <Search />
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
