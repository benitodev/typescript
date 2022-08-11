import axios from "axios";
import { Sub, SubsResponseFromApi } from "../types";

export const getAllSubs = () => fetchSubs().then(mapFromApiToSubs);

const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return axios.get("http://localhost:3000/subs").then((res) => res.data);
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;
    return {
      nick,
      subMonths,
      avatar,
      description,
    };
  });
};

export default getAllSubs;
