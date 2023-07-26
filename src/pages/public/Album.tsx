import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../api/index";
import moment, { months } from "moment";
import { AudioLoading, Loading, Lists } from "../../Components/index";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useStore } from "../../untils/useStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

export interface iPlayList {
  thumbnailM: string;
  title: string;
  contentLastUpdate: number | undefined;
  artistsNames: string;
  like: number | undefined;
  sortDescription: string;
  song: Songs;
  duration: number;
  encodeId: string;
  album: {
    title: string;
  };
}

interface Songs {
  items: [
    {
      encodeId: string;
    }
  ];
  total: number;
  totalDuration: number;
}

const Album: React.FC = () => {
  const { title, pid } = useParams();
  const [playList, setPlayList] = useState<iPlayList>();

  const [isLoaded, setIsLoaded] = useState(true);
  const location = useLocation();

  //   const { curSongId, isPlaying, atAlbum, songs } = useSelector(
  //     (state) => state.music
  //   );
  const {
    rootStore: { musicStore },
  } = useStore();

  const isPlaying: boolean = musicStore.getPlay;
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await api.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlayList(response.data?.data);
        musicStore.setPlaylist(response?.data?.data?.song?.items);
        setIsLoaded(false);
      }
    };
    fetchDetailPlaylist();
  }, [pid]);

  useEffect(() => {
    if (location?.state?.play) {
      const randomIndex =
        playList?.song?.items &&
        Math.round(Math.random() * playList?.song?.items.length) - 1;

      randomIndex &&
        musicStore.setCurrentSongId(
          playList?.song?.items[randomIndex]?.encodeId
        );

      isPlaying
        ? musicStore.setPlay(!isPlaying)
        : musicStore.setPlay(!isPlaying);
    }
  }, [pid, playList]);

  return (
    <div className="flex gap-8 w-full h-full px-[59px] bg-[#1a0b23 ] ">
      {isLoaded ? (
        <Loading />
      ) : (
        <div className="w-1/4 flex-none  flex flex-col items-center gap-2 ">
          <div className="w-full relative overflow-hidden">
            <img
              src={playList?.thumbnailM}
              alt="thumbnail"
              className={`w-full object-contain ${
                isPlaying
                  ? "rounded-full animate-rotate-center"
                  : "rounded-md animate-rotate-center-pause"
              } shadow-md`}
            />
            <div
              className={`absolute hover:bg-overplay-30 cursor-pointer top-0 bottom-0 left-0 right-0  text-white flex items-center justify-center ${
                isPlaying && "rounded-full"
              }`}
            >
              {isPlaying ? (
                <AudioLoading />
              ) : (
                <i className="fa-solid fa-play text-center text-[30px] "></i>
              )}
            </div>
          </div>
          <div className="flex-col flex items-center gap-1">
            <h3 className="text-[20px] font-bold text-[#fff]">
              {playList?.title}
            </h3>
            <span className="text-[#ffffff80] text-[12px] ">
              <span className="">Cập nhật:</span>
              <span>
                {playList?.contentLastUpdate
                  ? moment.unix(playList.contentLastUpdate).format("DD/MM/YYYY")
                  : ""}
              </span>
            </span>
            <span className="text-[#ffffff80] text-[12px] text-center">
              {playList?.artistsNames}
            </span>
            <span className="text-[#ffffff80] text-[12px] ">
              {playList?.like
                ? Math.floor(playList.like / 1000) + "K người yêu thích"
                : ""}
            </span>
          </div>
        </div>
      )}
      <Scrollbars style={{ width: "100%", height: "70%" }}>
        <div className="flex-auto  flex flex-col mb-[40px]">
          <span>
            <span className="text-[#ffffff80] text-[12px] ">Lời tựa </span>
            <span className="text-[#fff] text-[14px]">
              {playList?.sortDescription}
            </span>
          </span>
          <Lists totalDuration={playList?.song.totalDuration || 0} />
        </div>
      </Scrollbars>
    </div>
  );
};

export default observer(Album);
