"use client";
import React, { useEffect, useState } from "react";
import { useGetStocks } from "@/hooks/useGetStoks";
import { Box, Typography } from "@mui/material";
import { StocksFilter } from "../ui";
import { StocksTable } from "../ui/StocksTable";
import { useDebounce } from "use-debounce";
import { Stock, StockItemProps } from "@/types";

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

const TEST_DATA = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    open: 208.78,
    close: 206.87,
    percent_change: -0.9148,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    open: 458.87,
    close: 458.3,
    percent_change: -0.1242,
  },
  {
    symbol: "GOOG",
    name: "Alphabet Inc.",
    open: 167.86,
    close: 165.33,
    percent_change: -1.5131,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    open: 206.17,
    close: 204.1,
    percent_change: -0.9992,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    open: 342.09,
    close: 343.82,
    percent_change: 0.5057,
  },
  {
    symbol: "ARM",
    name: "Arm Holdings plc",
    open: 132.06,
    close: 131.01,
    percent_change: -0.7876,
  },
];

export const StockPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(search, 1000);

  // const { data, isLoading, error } = useGetStocks(SYMBOL_DATA);

  // const stocksArr =
  //   data &&
  //   SYMBOL_DATA?.map((stock: string) => ({
  //     symbol: data[stock]?.symbol,
  //     name: data[stock]?.name,
  //     close: Number(data[stock]?.close).toFixed(2),
  //     open: Number(data[stock]?.open).toFixed(2),
  //     percent_change: Number(data[stock]?.percent_change).toFixed(4),
  //   }));

  const searchStocks = TEST_DATA?.filter((stock: any) =>
    stock.symbol.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
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

  return (
    <div>
      <Box sx={{ display: "grid", gap: 1, mt: 5 }}>
        <StocksFilter
          filter={filter}
          search={search}
          setFilter={setFilter}
          setSearch={setSearch}
        />

        {/* {data?.status === "error" || !data ? (
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              p: 2,
            }}
          >
            <Typography>{data?.message}</Typography>
          </Box>
        ) : ( */}
        <StocksTable data={filteredStocks} />
        {/* )} */}
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
