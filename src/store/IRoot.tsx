// Home

import { IFriday } from "../pages/public/InterFaceData";

export interface SidebarMenuItem {
  path: string;
  text: string;
  icons: JSX.Element;
}

export interface HomeData {
  sectionId: string;
  sectionType: string;
  items: IFriday[];
}
export interface HomeNewRelease {
  sectionId: string;
  sectionType: string;
  items: NewRealease;
  title: string;
}
export interface Friday {
  id?: string;
  name?: string;
  link?: string;
  spotlight?: boolean;
  alias?: string;
  options?: any;
  thumbnail?: string;
  title?: string;
  encodeId?: string;
  sectionId?: string;
  items: IFriday[];
  sectionType?: string;
  thumbnailM?: string;
  isOA?: boolean;
  isOABrand?: boolean;
  totalFollow?: number;
}

export interface NewRealease {
  all: Songs;
  vPop: Songs;
  others: Songs;
  link?: string;
}

export interface Songs {
  artistsNames: string;
  title: string;
  thumbnail: string;
  releaseDate: string;
  encodeId: string;
}
export interface SearchData {
  top: {
    id: string;
    name: string;
    link: string;
    spotlight?: boolean;
    alias?: string;
    playlistId: string;
    cover?: string;
    thumbnail: string;
    objectType?: string;
    encodeId?: string;
    title?: string;
  };
  artists: {
    totalFollow: number;
    encodeId: string;
    name: string;
    link: string;
    thumbnail: string;
  }[];
  songs: {
    encodeId: string;
    title: string;
    artistsNames: string;
    thumbnail: string;
  }[];
  playlists: {
    id?: string;
    name?: string;
    link?: string;
    spotlight?: boolean;
    alias?: string;
    options?: any;
    thumbnail?: string;
    title?: string;
    encodeId?: string;
    sectionId?: string;
    items: IFriday[];
    sectionType?: string;
    thumbnailM?: string;
    isOA?: boolean;
    isOABrand?: boolean;
    totalFollow?: number;
  };
}
