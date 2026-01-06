import { useQuery } from "@tanstack/react-query";

import { SummaryResponse, WorkingCapitalResponse } from "./interfaces";

import fintechCore from "core/index";

const endPoint = "/financial";

export const useGetSummary = () =>
  useQuery({
    queryKey: ["summary"],
    queryFn: async (): Promise<SummaryResponse> =>
      fintechCore.api.get(`${endPoint}/summary`).then((res) => res.data),
  });

export const useGetWorkingCapital = () =>
  useQuery({
    queryKey: ["working-capital"],
    queryFn: async (): Promise<WorkingCapitalResponse> =>
      fintechCore.api
        .get(`${endPoint}/working-capital`)
        .then((res) => res.data),
  });
