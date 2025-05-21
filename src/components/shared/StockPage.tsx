"use client";
import React, { useState } from "react";
import { useGetStocks } from "@/hooks/useGetStoks";
import { Box, Typography } from "@mui/material";
import { StocksFilter } from "../ui";
import { StocksTable } from "../ui/StocksTable";

const SYMBOL_DATA = [
  "AAPL",
  "MSFT",
  "GOOG",
  "AMZN",
  "TSLA",
  "ARM",
  "NVDA",
  "COMP",
  "NDX",
];

export const StockPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [symbols, setSymbols] = useState<string[]>(SYMBOL_DATA);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useGetStocks(symbols);

  const stocksArr =
    data &&
    symbols?.map((stock: string) => ({
      symbol: data[stock]?.symbol,
      name: data[stock]?.name,
      close: Number(data[stock]?.close).toFixed(2),
      open: Number(data[stock]?.open).toFixed(2),
      percent_change: Number(data[stock]?.percent_change).toFixed(4),
    }));

  const filteredStocks = stocksArr?.filter((stock: any) => {
    if (search)
      return stock.symbol.toLowerCase().includes(search.toLowerCase());

    if (filter === "all") return true;

    const open = Number(stock.open);
    const close = Number(stock.close);

    if (filter === "up") return close > open;
    if (filter === "down") return close < open;

    return true;
  });

  console.log(filteredStocks);

  return (
    <div>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 1, mt: 5 }}
      >
        <StocksFilter
          filter={filter}
          symbol={search}
          setFilter={setFilter}
          setSymbols={setSearch}
        />

        {data?.status === "error" || !data ? (
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              p: 2,
            }}
          >
            <Typography>{data?.message}</Typography>
          </Box>
        ) : (
          <StocksTable data={filteredStocks} />
        )}
      </Box>
    </div>
  );
};

{
  /* <ResponsiveContainer width={"800px"} height={"500px"}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="close"
            stroke="#007bff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer> */
}
{
  /* <StockItem
          name="test1"
          symbol="TSTS"
          close={0}
          percent_change={0}
          rowIndex={0}
        />
        <StockItem
          name="test2"
          symbol="TSTS"
          close={0}
          percent_change={0}
          rowIndex={1}
        /> */
}
