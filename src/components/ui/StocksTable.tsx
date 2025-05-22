"use client";
import React from "react";
import { StockApiResponseItem, StocksTableProps } from "@/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StockItem } from "./StockItem";

export const StocksTable: React.FC<StocksTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ height: 400 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ "& .MuiTableCell-root": { p: "10px" } }}>
            <TableCell>Символ</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">% Изменение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((stock: StockApiResponseItem, index: number) => (
            <StockItem key={stock.symbol} {...stock} rowIndex={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
