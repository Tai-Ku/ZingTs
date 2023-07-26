import React, { useEffect, useState } from "react";
import * as api from "../api";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import path from "../untils/path";
import { useStore } from "../untils/useStore";

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { name } = useParams();
  const {
    rootStore: { musicStore },
  } = useStore();
  const res = musicStore.getSearchData;
  console.log(res);

  const handleSearch = async (e: any) => {
    if (e.keyCode === 13) {
      musicStore.fetchSearch(input);
      navigate({
        pathname: `${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: input,
        }).toString(),
      });
    }
  };
  return (
    <div className="w-full flex items-center relative">
      <span
        className={`${
          name ? "bg-[rgba(0,0,0,0.2)]" : "bg-[#312439]"
        } h-10 flex items-center pl-4 rounded-l-[20px]`}
      >
        <i className="fa-solid fa-magnifying-glass text-[24px] text-[#eee]"></i>
      </span>
      <input
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        type="text"
        className={`outline-none w-full ${
          name ? "bg-[rgba(0,0,0,0.2)]" : "bg-[#312439]"
        } text-[#eee]  text-sm px-4 py-2 rounded-r-[20px] h-10 `}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleSearch}
      />
      {input && (
        <span
          onClick={() => setInput("")}
          className="absolute cursor-pointer px-4 right-0 "
        >
          <i className="fa-solid fa-xmark"></i>
        </span>
      )}
    </div>
  );
};

export default Search;
