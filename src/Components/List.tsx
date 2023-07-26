import moment from "moment";
import { memo, useEffect } from "react";
import React from "react";

import { iPlayList } from "../pages/public/Album";
import { observer } from "mobx-react-lite";
import { useStore } from "../untils/useStore";

interface IList {
  songData: {
    encodeId: string;
    thumbnailM?: string;
    thumbnail?: string;
    artistsNames?: string;
    title?: string;
    duration?: number;
    album?: {
      title?: string;
    };
  };
  key: string;
  none: boolean;
}
const List: React.FC<IList> = ({ songData, none, key }) => {
  const {
    rootStore: { musicStore },
  } = useStore();
  console.log(none);
  const isPlaying = musicStore.getPlay;
  const curSongId = musicStore.getCurSongId;

  const active = document.querySelector(".active");

  useEffect(() => {
    if (active) {
      active.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [active]);
  return (
    <div
      className={`${
        songData.encodeId === curSongId && "active bg-[#2e2639]"
      } flex items-center justify-between p-[10px] border-t border-[#26172e]  hover:bg-[#2e2639] cursor-pointer`}
      onClick={() => {
        musicStore.setCurrentSongId(songData?.encodeId);
        musicStore.setPlay(!isPlaying);

        // dispatch(
        //   action.SetRecentSongs({
        //     thumbnail: songData.thumbnail,
        //     artistsNames: songData?.artistsNames,
        //     title: songData?.title,
        //     sid: songData?.encodeId,
        //   })
        // );
        musicStore.setAlbum(true);
      }}
    >
      <div className="flex items-center gap-2 flex-1">
        {none && (
          <span>
            <i className="fa-solid fa-music text-[#ffffff80]"></i>
          </span>
        )}
        <img
          src={songData?.thumbnailM}
          alt="thumbnail"
          className="object-cover h-[40px] rounded-md"
        />
        <span className="flex flex-col ">
          <span className="text-sm font-semibold text-[#fff] ">
            {songData.title && songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 25)}...`
              : songData?.title}
          </span>
          <span className="text-xs  text-[#ffffff80]">
            {songData?.artistsNames}
          </span>
        </span>

        {/* bug item-cemter */}
      </div>
      <span className="flex-1  text-xs font-semibold text-[#ffffff80]">
        {songData?.album?.title}
      </span>
      {none && (
        <div className="flex-1 flex ml-[22%] text-xs  text-[#ffffff80]">
          {songData?.album?.title && songData?.album?.title.length > 25
            ? `${songData?.album?.title.slice(0, 25)}...`
            : songData?.album?.title}
        </div>
      )}
      <div className=" flex items-center justify-end  text-xs  text-[#ffffff80]">
        {songData?.duration &&
          moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default observer(List);
