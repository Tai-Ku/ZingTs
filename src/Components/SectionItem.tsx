import { IFriday } from "../pages/public/InterFaceData";
import React, { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../untils/useStore";
import { observer } from "mobx-react-lite";

interface SectionItemProps {
  link: string;
  thumbnailM: string;
  sortDescription: string;
  sectionId: string;
  artistsNames: string;
  title: string;
}
const SectionItem: React.FC<SectionItemProps> = ({
  link,
  thumbnailM,
  sortDescription,
  artistsNames,
  sectionId,
  title,
}) => {
  const {
    rootStore: { musicStore },
  } = useStore();
  const { pid } = useParams();
  const checkData = sectionId === "h100" || sectionId === "hAlbum";
  const negative = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isHoverText, setIsHoverText] = useState(false);
  const handleClickP = (e: any) => {
    console.log(link?.split(".")[0]);
    negative(link?.split(".")[0]);
    let url = link?.split(".")[0];
    let parts = url.split("/");
    let pid = parts[parts?.length - 1];
    console.log(pid);
    musicStore.setPidPlayList(pid);
  };
  const handleClick = (e: any) => {
    e.stopPropagation();
    negative(link?.split(".")[0], {
      state: {
        play: true,
      },
    });
  };
  return (
    <div
      onClick={handleClickP}
      className={` w-1/5 flex flex-col gap-3 cursor-pointer `}
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="overflow-hidden w-full rounded-md relative"
      >
        <img
          src={thumbnailM}
          className={`${
            isHover ? "animate-scale-up-hover " : "animate-scale-out-hover"
          } rounded-lg h-auto object-cover w-full`}
        />
        {isHover ? (
          <div className=" flex justify-around  items-center rounded-lg absolute top-0 bottom-0 left-0 right-0 bg-overplay-30 px-4">
            <span>
              <i className="fa-regular fa-heart text-[18px]  text-[#ffff]"></i>
            </span>
            <span
              onClick={handleClick}
              className=" w-[51px] text-center border  p-2 rounded-full border-[#ffff] cursor-pointer"
            >
              <i className="fa-solid fa-play text-[30px]  text-[#ffff] px-1 "></i>
            </span>
            <span>
              <i className="fa-solid  fa-ellipsis text-[18px]  text-[#ffff]"></i>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <span className="flex flex-col text-sm text-[#ffffff80]">
        {(checkData || searchTop || data) && (
          <span className="text-[#ffffff]">{title}</span>
        )}
        {checkData || searchTop ? (
          <span
            onMouseEnter={() => setIsHoverText(true)}
            onMouseLeave={() => setIsHoverText(false)}
            className={`${isHoverText && "text-[#c273ed]"}`}
          >
            {artistsNames}
          </span>
        ) : sortDescription?.length > 50 ? (
          `${sortDescription.slice(0, 50)}...`
        ) : (
          sortDescription
        )}
        {}
      </span> */}
    </div>
  );
};

export default observer(SectionItem);
