"use client";
import React, { useState } from "react";
import { useGetStocks } from "@/hooks/useGetStoks";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StockItem, StocksFilter } from "../ui";
import { StockItemProps } from "@/types";

const SYMBOL_DATA = ["AAPL", "MSFT", "GOOG", "AMZN", "TSLA", "ARM", "NVDA"];

export const StockPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [symbols, setSymbols] = useState<string[]>(SYMBOL_DATA);
  const { data, isLoading, error } = useGetStocks(symbols);

  const stocksArr = data && symbols?.map((stock: string) => ({
      symbol: data[stock]?.symbol,
      name: data[stock]?.name,
      close: Number(data[stock]?.close).toFixed(2),
      open: Number(data[stock]?.open).toFixed(2),
      percent_change: Number(data[stock]?.percent_change).toFixed(4),
    }));

  const filteredStocks = stocksArr?.filter((stock: any) => {
    if (filter === "all") return true;

    const open = Number(stock.open);
    const close = Number(stock.close);

    if (filter === "up") return close > open;
    if (filter === "down") return close < open;

    return true;
  });

  const stocksItems = () => {
    // if (data?.status === "error")
    //   return (
    //     <TableRow
    //       sx={{ "& .MuiTableCell-root": { p: "10px", border: "none" } }}
    //     >
    //       <TableCell>{data?.message}</TableCell>
    //     </TableRow>
    //   );

    return (
      <>
        {filteredStocks?.map((stock: StockItemProps, index: number) => (
          <StockItem key={stock.symbol} {...stock} rowIndex={index} />
        ))}
      </>
    );
  };

  console.log(filteredStocks);

  return (
    <div>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 1, mt: 5 }}
      >
        <StocksFilter
          filter={filter}
          symbol={symbols}
          setFilter={setFilter}
          setSymbols={setSymbols}
        />
        

        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ maxWidth: 800, height: 500 }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ "& .MuiTableCell-root": { p: "10px" } }}>
                <TableCell>Символ</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">% Изменение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{stocksItems()}</TableBody>
          </Table>
        </TableContainer>
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
