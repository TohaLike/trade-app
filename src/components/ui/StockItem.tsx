"use client";
import React from "react";
import { StockItemProps } from "@/types";
import { TableCell, TableRow } from "@mui/material";

export const StockItem: React.FC<StockItemProps> = ({
  name,
  symbol,
  close,
  percent_change,
  rowIndex,
}) => {
  return (
    <TableRow
      sx={{
        backgroundColor: rowIndex % 2 === 0 ? "#f5f5fa" : "#fff",
        ":last-child td, :last-child th": { border: 0 },
        "& .MuiTableCell-root": { p: " 12px 10px" },
      }}
    >
      <TableCell>
        <strong>{symbol}</strong>
        <div>{name}</div>
      </TableCell>
      <TableCell align="right">${close}</TableCell>
      <TableCell
        align="right"
        sx={{ color: percent_change >= 0 ? "green" : "red" }}
      >
        {percent_change > 0 ? "▲" : "▼"} {percent_change > 0 && "+"}
        {percent_change}%
      </TableCell>
    </TableRow>
  );
};
