"use client";
import React, { useEffect, useState } from "react";
import { useGetStocks } from "@/hooks/useGetStoks";
import { Box, Skeleton, Typography } from "@mui/material";
import { StocksFilter, StocksTable } from "../ui";
import { useDebounce } from "use-debounce";
import { StockApiResponse, StockApiResult, StockItemProps } from "@/types";

const SYMBOLS = ["AAPL", "MSFT", "GOOG", "AMZN", "TSLA"];

function isStockApiResponse(data: StockApiResult): data is StockApiResponse {
  return data && !("status" in data);
}

export const StockPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(search, 1000);

  const { data, isLoading } = useGetStocks(SYMBOLS) as {
    data: StockApiResult;
    isLoading: boolean;
  };

  let stocksArr: Array<StockItemProps> | undefined = undefined;

  if (data && isStockApiResponse(data)) {
    stocksArr =
      data &&
      SYMBOLS?.map((stock: string) => ({
        symbol: data[stock]?.symbol,
        name: data[stock]?.name,
        close: Number(data[stock]?.close),
        open: Number(data[stock]?.open),
        percent_change: Number(data[stock]?.percent_change),
      }));
  }

  const searchStocks = stocksArr?.filter((stock) =>
    stock.symbol?.toLowerCase()?.includes(debouncedSearchTerm.toLowerCase())
  );

  const filteredStocks = searchStocks?.filter((stock) => {
    const open = Number(stock.open);
    const close = Number(stock.close);

    if (filter === "all") return true;
    if (filter === "up") return close > open;
    if (filter === "down") return close < open;

    return true;
  });

  useEffect(() => {
    setFilter("all");
  }, [debouncedSearchTerm]);

  const renderStocksList = () => {
    if (isLoading)
      return Array.from({ length: 7 }).map((_, index) => (
        <Skeleton
          key={`skeleton-${index}`}
          variant="rounded"
          height={50}
          sx={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: "1s",
          }}
        />
      ));

    if (data && "status" in data && data.status === "error")
      return (
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            p: 2,
          }}
        >
          <Typography variant="body1">{data?.message}</Typography>
        </Box>
      );

    return <StocksTable data={filteredStocks ?? []} />;
  };

  return (
    <div>
      <Box sx={{ display: "grid", gap: 1, mt: 2 }}>
        <StocksFilter
          filter={filter}
          search={search}
          setFilter={setFilter}
          setSearch={setSearch}
        />

        {renderStocksList()}
      </Box>
    </div>
  );
};
