import React, { memo } from "react";
import moment from "moment";
import { List } from "../Components/index";
import { useStore } from "../untils/useStore";
import { toJS } from "mobx";
import { iPlayList } from "../pages/public/Album";
import { observer } from "mobx-react-lite";
interface ILists {
  totalDuration: number;
}
const Lists: React.FC<ILists> = ({ totalDuration }) => {
  // const { songs } = useSelector((state) => state.music);
  const {
    rootStore: { musicStore },
  } = useStore();
  const songs: iPlayList[] = toJS(musicStore.getPlaylist) as [];

  return (
    <div className="flex flex-col w-full text-xs ">
      <div className="flex justify-between p-[10px] text-[#ffffff80]">
        <span className="flex gap-3">
          <i className="fa-solid fa-arrow-up-wide-short text-[16px]"></i>
          BÀI HÁT
        </span>
        <span>ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
      <div className="flex flex-col">
        {songs?.map((item, index) => (
          <List key={item.encodeId.toString()} none={true} songData={item} />
        ))}
      </div>
      {totalDuration && (
        <span className="flex text-xs text-[#ffffff80] gap-3">
          <span>{`${songs?.length} bài hát`}</span>
          <span>{moment.utc(totalDuration * 100).format("HH:mm:ss")}</span>
        </span>
      )}
    </div>
  );
};

export default observer(Lists);
