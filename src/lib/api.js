import axios from "axios";
import qs from "qs";

const domain = "https://itunes.apple.com";

export const getSearchTrack = (keyword, limit, entity) => {
  const queryString = qs.stringify({
    term: keyword,
    limit: limit,
    entity: "song",
  });
  return axios.get(`${domain}/search/?${queryString}`);
};
