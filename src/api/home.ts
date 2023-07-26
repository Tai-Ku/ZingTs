import axios from "../axios";

export const getHome = (): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/home",
        method: "GET",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
