import axios from "axios";
import qs from "qs";

const domain = "https://itunes.apple.com";

export const getSearchTrack = (keyword, limit) => {
  const queryString = qs.stringify({
    term: keyword,
    limit: limit,
    entity: "song",
  });
  console.log(keyword, limit, "executed");
  return axios.get(`${domain}/search/?${queryString}`);
};
