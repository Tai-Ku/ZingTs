import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import SectionItem from "./SectionItem";
import { IFriday } from "../pages/public/InterFaceData";
import { observer } from "mobx-react-lite";

export interface SectionProps {
  items?: IFriday[];
  title?: string;
  sectionId?: string;
}

const Section: FC<SectionProps> = ({ items, sectionId = "", title }) => {
  console.log("items fromsection", items);
  return (
    <div className={`${items ? "mt-12 px-[59px]" : ""} flex flex-col gap-5 `}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-[#ffff]">{title}</h3>
        <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
      </div>
      {items && (
        <div className="flex  flex-row w-full gap-[28px] ">
          {items?.slice(0, 5).map((item) => (
            <SectionItem
              key={item.encodeId}
              link={item?.link}
              thumbnailM={item?.thumbnailM}
              sortDescription={item?.sortDescription}
              artistsNames={item?.artistsNames}
              title={item?.title}
              sectionId={sectionId}
            />
          ))}
        </div>
      )}
      {/* {searchTop && (
        <div className="flex  flex-row w-full gap-[28px] ">
          {searchTop?.slice(0, 5).map((item) => (
            <SectionItem
              key={item.encodeId}
              link={item?.link}
              thumbnailM={item?.thumbnailM}
              sortDescription={item?.sortDescription}
              artistsNames={item?.artistsNames}
              title={item?.title}
              data={data}
              searchTop={searchTop}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default observer(Section);
