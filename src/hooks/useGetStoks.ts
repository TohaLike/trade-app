import StocksService from "@/services/StocksService";
import useSWR from "swr";

export const useGetStocks = (symbols: string[]) => {
  const { data, isLoading, error } = useSWR(
    ["stocks_data"],
    () => StocksService.getStockData(symbols),
    {
      refreshInterval: 60000,
      revalidateOnFocus: false,
      // revalidateOnMount: false,
    }
  );

  return { data, isLoading, error };
};
