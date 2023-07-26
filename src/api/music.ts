import axios from "../axios";

export const apiGetSong = (sid: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/song",
        method: "GET",
        params: { id: sid },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetTop100 = (sid: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/top100",
        method: "GET",
        params: { id: sid },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getDetailSong = (sid: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/infosong",
        method: "GET",
        params: { id: sid },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailPlaylist = (pid: string | undefined): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/detailplaylist",
        method: "GET",
        params: { id: pid },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiChartWeek = (pid: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/charthome",
        method: "GET",
        params: { id: pid },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiChartHome = (): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/charthome",
        method: "GET",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });



export const apiSearch = (keyword: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/search",
        method: "GET",
        params: { keyword: keyword },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiArtist = (name: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/artist",
        method: "GET",
        params: { name: name },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiArtistSong = (
  id: string | number,
  page: string | number,
  count: string | number
): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/artistSong",
        method: "GET",
        params: { id: id, page: page, count: count },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
