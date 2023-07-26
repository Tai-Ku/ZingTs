import React, { useEffect, useState } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
const SidebarRight: React.FC = () => {
  const [isActive, setIsActive] = useState(0);
  const [playList, setPlayList] = useState(null);

  return (
    <div className="flex flex-col h-full text-xs ">
      <div className="flex items-center h-[70px] py-[14px] px-2 flex-none ">
        <div className="flex cursor-pointer m-auto  p-1 rounded-r-full rounded-l-full bg-[#2d1e39]">
          <span
            onClick={() => setIsActive(0)}
            className={`${
              isActive === 0 ? "bg-[#696475] text-white" : "text-[#8f8c96]"
            } rounded-full font-light pr-2 pl-4 py-2 `}
          >
            Danh sách phát
          </span>

          <span
            onClick={() => setIsActive(1)}
            className={`${
              isActive === 1 ? "bg-[#696475] text-white" : "text-[#8f8c96]"
            } rounded-full font-light pl-3 pr-4 py-2 `}
          >
            Nghe gần đây
          </span>
        </div>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default SidebarRight;
