import React, { useEffect, useState } from "react";
import { useStore } from "../untils/useStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import SongItem from "./SongItem";
// import * as action from "../store/actions";

const NewRelease: React.FC = () => {
  const {
    rootStore: { homeStore },
  } = useStore();
  const newRealease = toJS(homeStore.getNewRelease);

  const [isActive, setIsActive] = useState(0);
  const [newSong, setNewSong] = useState(newRealease?.items?.all);
  useEffect(() => {
    if (isActive === 0) {
      setNewSong(newRealease?.items.all);
    } else if (isActive === 1) {
      setNewSong(newRealease?.items.vPop);
    } else {
      setNewSong(newRealease?.items.others);
    }
  }, [isActive]);

  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-[#ffff]">
          {newRealease?.title}
        </h3>
        <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
      </div>
      <div className="flex items-center gap-5 text-xs text-[#ffff]">
        <button
          onClick={() => setIsActive(0)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 0
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          TẤT CẢ
        </button>
        <button
          onClick={() => setIsActive(1)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 1
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          VIỆT NAM
        </button>
        <button
          onClick={() => setIsActive(2)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 2
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          QUỐC TẾ
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-3">
        {/* {newSong?.slice(0, 12).map((item) => (
          <div key={item.encodeId} className="w-[45%] min-[1024px]:w-[30%]">
            <SongItem
              key={item.encodeId}
              artistsNames={item?.artistsNames}
              title={item?.title}
              thumbnail={item?.thumbnail}
              releaseDate={item?.releaseDate}
              sid={item.encodeId}
            />
          </div>
        ))} */}
        {Array.isArray(newSong) &&
          newSong.slice(0, 12).map((item) => (
            <div key={item.encodeId} className="w-[45%] min-[1024px]:w-[30%]">
              <SongItem
                key={item.encodeId}
                artistsNames={item?.artistsNames}
                title={item?.title}
                thumbnail={item?.thumbnail}
                releaseDate={item?.releaseDate}
                sid={item.encodeId}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default observer(NewRelease);
