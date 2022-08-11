import { useEffect, useState } from "react";
import getAllSubs from "../services/getAllSubs";
import { AppState } from "../types";

const useGetAllSubs = () => {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  return { subs, setSubs };
};

export default useGetAllSubs;
