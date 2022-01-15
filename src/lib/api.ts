import axios from "axios";
import qs from "qs";
import { defaultParam } from "../store/store";

const domain: string = "";

export const getSearchTrack = (
  keyword: string,
  country?: string,
  entity?: string,
  limit?: number | number[],
  offset?: number
): any => {
  const queryString = qs.stringify({
    term: keyword,
    country,
    entity,
    limit,
    offset,
  });
  if (!(defaultParam.keyword === keyword))
    return axios.get(`${domain}/search/?${queryString}`);
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(`${error} \nPlease try again`);
    window.location.reload();
  }
);
