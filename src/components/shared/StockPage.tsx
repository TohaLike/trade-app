"use client";
import React, { useEffect, useState } from "react";
import { useGetStocks } from "@/hooks/useGetStoks";
import { Box, Skeleton, Typography } from "@mui/material";
import { StocksFilter, StocksTable } from "../ui";
import { useDebounce } from "use-debounce";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const SYMBOLS = [
  "AAPL",
  "MSFT",
  "GOOG",
  "AMZN",
  "TSLA",
  // "ARM",
  // "NVDA",
  // "COMP",
  // "NDX",
];

export const StockPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(search, 1000);

  const { data, isLoading } = useGetStocks(SYMBOLS);

  const stocksArr =
    data &&
    SYMBOLS?.map((stock: string) => ({
      symbol: data[stock]?.symbol,
      name: data[stock]?.name,
      close: Number(data[stock]?.close).toFixed(2),
      open: Number(data[stock]?.open).toFixed(2),
      percent_change: Number(data[stock]?.percent_change).toFixed(4),
    }));

  const searchStocks = stocksArr?.filter((stock: any) =>
    stock.symbol?.toLowerCase()?.includes(debouncedSearchTerm.toLowerCase())
  );

  const filteredStocks = searchStocks?.filter((stock: any) => {
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

    if (data?.status === "error" || !data)
      return (
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            p: 2,
          }}
        >
          <Typography>{data?.message}</Typography>
        </Box>
      );

    return <StocksTable data={filteredStocks} />;
  };

  return (
    <div>
      <Box sx={{ display: "grid", gap: 1, mt: 5 }}>
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

{
  /* {data?.status === "error" || !data ? (
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              p: 2,
            }}
          >
            <Typography>{data?.message}</Typography>
          </Box>
        ) : ( */
}
{
  /* )} */
}
