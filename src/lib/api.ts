import axios from "axios";
import qs from "qs";

const domain: string = "https://itunes.apple.com";

export const getSearchTrack = (
  keyword: string,
  country?: string,
  entity?: string,
  limit?: number,
  offset?: number
): any => {
  const queryString = qs.stringify({
    term: keyword,
    country,
    entity,
    limit,
    offset,
  });
  console.log(keyword, entity, limit, offset);
  try {
    return axios.get(`${domain}/search/?${queryString}`);
  } catch (e) {
    alert("Network Error: Please try again");
  }
};
