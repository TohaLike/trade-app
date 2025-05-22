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
  search,
  setFilter,
  setSearch,
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
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      gap={1.5}
      sx={{
        "@media (max-width: 690px)": {
          flexDirection: "column",
        },
      }}
    >
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleChange}
        aria-label="filter"
        sx={{
          "@media (max-width: 436px)": {
            "& .MuiToggleButtonGroup-grouped": {
              fontSize: "12px",
            },
          },
          "@media (max-width: 389px)": {
            "& .MuiToggleButtonGroup-grouped": {
              fontSize: "10px",
            },
          },
        }}
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
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </Box>
  );
};
