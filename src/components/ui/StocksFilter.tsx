"use client";
import React from "react";
import { StocksFilterProps } from "@/types";
import {
  Box,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const StocksFilter: React.FC<StocksFilterProps> = ({
  filter,
  symbol,
  setFilter,
  setSymbols,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string
  ) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1.5}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleChange}
        aria-label="filter"
      >
        <ToggleButton value="all" aria-label="all">
          Все
        </ToggleButton>
        <ToggleButton value="up" aria-label="rising">
          Только растущие
        </ToggleButton>
        <ToggleButton value="down" aria-label="falling">
          Только падающие
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField
        variant="outlined"
        label="Поиск по символу"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        // value={symbol}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   setSymbols(e.target.value)
        // }
      />
    </Box>
  );
};
