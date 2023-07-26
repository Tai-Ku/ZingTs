import { HomeStore } from "./HomeStore";
import { MusicStore } from "./MusicStore";

export interface IRootStore {
  homeStore: HomeStore;
}

export class RootStore implements IRootStore {
  homeStore: HomeStore;
  musicStore: MusicStore;
  constructor() {
    this.homeStore = new HomeStore(this);
    this.musicStore = new MusicStore(this);
  }
}
