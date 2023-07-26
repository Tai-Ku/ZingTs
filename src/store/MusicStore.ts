import {
  action,
  computed,
  makeObservable,
  observable,
  observe,
  toJS,
} from "mobx";
import { makePersistable } from "mobx-persist-store";
import { IRootStore } from "./RootStore";
import * as api from "../api/index";
import { SearchData } from "../store/IRoot";

export class MusicStore {
  currentSongId: string = "";
  songs: string[] = [];
  searchData: SearchData | null = null;
  keyword: string | null = "";
  pid: string = "";
  curSongData: {} | null = null;
  recentSongs: string[] = [];
  isPlaying: boolean = false;
  atAlbum: boolean = false;
  rootStore: IRootStore;
  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      currentSongId: observable,
      songs: observable,
      atAlbum: observable,
      pid: observable,
      curSongData: observable,
      isPlaying: observable,
      setPlaylist: action,
      setPidPlayList: action,
      setCurrentSongId: action,
      setPlay: action,
      setAlbum: action,
      setCurSongData: action,
      fetchSearch: action,

      getCurSongData: computed,
      getSearchData: computed,
      getKeyWord: computed,
      getPidPlayList: computed,
      getPlay: computed,
      getPlaylist: computed,
      getCurSongId: computed,
      getAtAlbum: computed,
    });

    makePersistable(this, {
      name: "MusicStore",
      properties: ["currentSongId"],
      storage: localStorage,
    });
    this.rootStore = rootStore;
  }
  setPidPlayList(pid: string) {
    this.pid = pid;
  }
  setPlay(isPlay: boolean) {
    this.isPlaying = isPlay;
  }
  setPlaylist(songs: string[]) {
    this.songs = songs;
  }
  setCurrentSongId(currentSongId: string) {
    this.currentSongId = currentSongId;
  }
  // setRecentSongs(data:{}) {
  //   let songs = this.recentSongs;
  //   if (data) {
  //     if (this.recentSongs.some((song) => song.sid === data.sid)) {
  //       songs = songs.filter((song) => song. !== data.sid);
  //     }
  //     if (songs.length > 19) {
  //       songs = songs.filter((i, index, arr) => index !== arr.length - 1);
  //     }
  //     songs = [data, ...songs];
  //   }
  // }
  setAlbum(isAlbum: boolean) {
    this.atAlbum = isAlbum;
  }
  setCurSongData(data: {} | null) {
    this.curSongData = data;
  }

  async fetchSearch(keyword: string) {
    try {
      const response = await api.apiSearch(keyword);
      if (response.data.err === 0) {
        this.searchData = response.data.data;
        this.keyword = keyword;
      } else {
        this.searchData = null;
        this.keyword = null;
      }
    } catch (error) {
      this.searchData = null;
      this.keyword = null;
    }
  }

  get getSearchData() {
    return this.searchData;
  }
  get getKeyWord() {
    return this.keyword;
  }

  get getCurSongData() {
    return this.curSongData;
  }
  get getPidPlayList() {
    return this.pid;
  }
  get getPlay() {
    return this.isPlaying;
  }
  get getPlaylist() {
    return this.songs;
  }
  get getCurSongId() {
    return this.currentSongId;
  }
  get getAtAlbum() {
    return this.atAlbum;
  }
}
