import { action, computed, makeObservable, observable, toJS } from "mobx";
import * as api from "../api";
import { IRootStore } from "./RootStore";

import { Friday, HomeData, HomeNewRelease, NewRealease } from "./IRoot";
import { IFriday } from "../pages/public/InterFaceData";

export class HomeStore {
  homeData: null = null;
  rootStore: IRootStore;
  friday?: Friday;
  newEveryDay?: Friday;
  top100?: Friday;
  album: any = {};
  newRelease?: HomeNewRelease;
  weekChart: any[] = [];
  hArtistTheme?: Friday;
  chart: any = {};
  rank: any[] = [];
  alumHot: any = null;
  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      homeData: observable,
      friday: observable,
      newEveryDay: observable,
      top100: observable,
      album: observable,
      newRelease: observable,
      weekChart: observable,
      hArtistTheme: observable,
      chart: observable,
      rank: observable,
      alumHot: observable,

      getFriday: computed,
      getnewEveryDay: computed,
      getTop100: computed,
      getAlbum: computed,
      getNewRelease: computed,
      getweekChart: computed,
      getHArtistTheme: computed,
      getChart: computed,
      getRank: computed,
      getAlumHot: computed,

      fetchHome: action,
    });
    this.rootStore = rootStore;
  }
  fetchHome = async () => {
    try {
      const response = await api.getHome();
      const homeData: HomeData[] = response.data.data.items || [];
      const homeNewRelease: HomeNewRelease[] = response.data.data.items || [];

      this.friday = homeData.find((item) => item.sectionId === "hEditorTheme");
      this.newEveryDay = homeData?.find(
        (item) => item.sectionId === "hEditorTheme2"
      );
      this.top100 = homeData.find((item) => item.sectionId === "h100");
      this.album = homeData?.find((item) => item.sectionId === "hAlbum");
      this.newRelease = homeNewRelease?.find(
        (item) => item?.sectionType === "new-release"
      );
      this.weekChart =
        homeData?.find((item) => item.sectionType === "weekChart")?.items || [];
      this.hArtistTheme = homeData?.find(
        (item) => item.sectionId === "hArtistTheme"
      );
      this.chart =
        homeData?.find((item) => item.sectionId === "hZC")?.items || [];
      this.rank =
        homeData?.find((item) => item.sectionId === "hZC")?.items || [];
      this.alumHot =
        homeData?.find((item) => item.sectionId === "hNewrelease")?.items || [];
    } catch (error) {
      this.homeData = null;
    }
  };

  get getFriday() {
    return this.friday;
  }
  get getnewEveryDay() {
    return this.newEveryDay;
  }
  get getTop100() {
    return this.top100;
  }
  get getAlbum() {
    return this.album;
  }
  get getNewRelease() {
    return this.newRelease;
  }
  get getweekChart() {
    return this.weekChart;
  }
  get getHArtistTheme() {
    return this.hArtistTheme;
  }
  get getChart() {
    return this.chart;
  }
  get getRank() {
    return this.rank;
  }
  get getAlumHot() {
    return this.alumHot;
  }
}
