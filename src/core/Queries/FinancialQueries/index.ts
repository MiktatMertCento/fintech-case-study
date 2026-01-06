import { useQuery } from "@tanstack/react-query";

import { SummaryReponse } from "./interfaces";

import fintechCore from "core/index";

const endPoint = "/financial";

export const useGetSummary = () =>
  useQuery({
    queryKey: ["summary"],
    queryFn: async (): Promise<SummaryReponse> =>
      fintechCore.api.get(`${endPoint}/summary`).then((res) => res.data),
  });
