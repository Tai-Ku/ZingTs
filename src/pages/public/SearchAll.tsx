import React, { useEffect } from "react";
// import { SongItem, List, Section, Artists } from "../../components/index";
import { SongItem, List, Section } from "../../Components/index";
import * as fn from "../../untils/fn";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../untils/useStore";
import { observer } from "mobx-react-lite";
const SearchAll = () => {
  const navigate = useNavigate();
  const {
    rootStore: { musicStore },
  } = useStore();
  const searchData = musicStore.getSearchData;
  console.log(searchData);
  const isPlaying = musicStore.getPlay;
  //   const searchDataTop = searchData?.top;
  const searchDataTop = searchData?.top;
  const handelClick = () => {
    if (searchDataTop?.objectType === "artist") {
      navigate(searchDataTop?.link);
    } else {
      searchDataTop?.encodeId &&
        musicStore.fetchSearch(searchDataTop?.encodeId);
      musicStore.setPlay(!isPlaying);
    }
  };
  return (
    <div className="w-full flex px-[59px] flex-col gap-[60px]">
      {/* Nổi Bật */}
      <div className="flex flex-col">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Nổi Bật</h3>
        <div className="flex gap-8 ">
          {searchDataTop && (
            <div
              onClick={handelClick}
              className="flex flex-1 cursor-pointer rounded-lg items-center gap-4 p-[10px] bg-[#231a2e]"
            >
              <img
                className={`w-[84px] h-[84px] object-cover ${
                  searchDataTop?.objectType === "artist" ? "rounded-full" : ""
                }`}
                src={searchDataTop?.thumbnail}
              />
              <div className="flex flex-col gap-2 text-xs text-[#ffffff80]">
                <span>{`${
                  searchDataTop?.objectType === "artist" ? "Nghệ sĩ" : "Bài hát"
                }`}</span>
                <span className="text-sm text-[#ffff]">
                  {searchDataTop?.title || searchDataTop?.name}
                </span>
                {searchDataTop?.objectType === "artist" && (
                  <span>
                    {`${fn.handleNumbers(
                      searchData?.artists[0]?.totalFollow
                    )} quan tâm`}
                  </span>
                )}
              </div>
            </div>
          )}

          {searchData?.songs?.slice(0, 2).map((item, i) => (
            <div key={item?.encodeId || i} className="flex-1">
              <SongItem
                style="rounded-md"
                key={item?.encodeId || i}
                lg="w-[80px] h-[80px]"
                bg="bg-[#231a2e]"
                artistsNames={item?.artistsNames}
                title={item?.title}
                thumbnail={item?.thumbnail}
                sid={item?.encodeId}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bài Hát*/}
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Bài Hát</h3>
        <div className="flex items-center justify-between flex-wrap w-full ">
          {searchData?.songs?.slice(0, 6).map((item, index) => (
            <div
              key={item.encodeId}
              className={`w-[45%]  flex-auto ${
                index % 2 !== 0 ? "pl-4" : "pr-4"
              }`}
            >
              <List
                key={item.encodeId.toString()}
                songData={item}
                none={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Playlist/Album
       */}
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Playlist/Album</h3>
        {/* <div className="flex items-center justify-between flex-wrap w-full ">
          <Section items={searchData?.playlists}
          title="asd"

          />
        </div> */}
      </div>

      {/* Nghệ Sĩ/OA
       */}
      {/* <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Nghệ Sĩ/OA</h3>
        <div className="flex items-center gap-6 flex-wrap w-full ">
          {searchData?.artists?.map((item, index) => (
            <Artists
              key={item?.encodeId || index}
              item={item}
              thumbnail={item?.thumbnail}
              name={item?.name}
              totalFollow={item?.totalFollow}
              link={item?.link}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default observer(SearchAll);
