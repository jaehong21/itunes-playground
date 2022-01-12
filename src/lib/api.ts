import axios from "axios";
import qs from "qs";

const domain: string = "https://itunes.apple.com";

export const getSearchTrack = (
  keyword: string,
  limit: number,
  entity?: string
): Promise<any> => {
  const queryString = qs.stringify({
    term: keyword,
    limit: limit,
    entity: "song",
  });
  return axios.get(`${domain}/search/?${queryString}`);
};
