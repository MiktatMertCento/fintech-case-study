import { useQuery } from "@tanstack/react-query";

import {
  CardsResponse,
  SummaryResponse,
  TransactionsResponse,
  WorkingCapitalResponse,
} from "./interfaces";

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

export const useGetCards = () =>
  useQuery({
    queryKey: ["cards"],
    queryFn: async (): Promise<CardsResponse> =>
      fintechCore.api.get(`${endPoint}/wallet`).then((res) => res.data),
  });

export const useGetTransactions = (limit = 5) =>
  useQuery({
    queryKey: ["transactions", limit],
    queryFn: async (): Promise<TransactionsResponse> =>
      fintechCore.api
        .get(`${endPoint}/transactions/recent`, {
          params: {
            limit,
          },
        })
        .then((res) => res.data),
  });
