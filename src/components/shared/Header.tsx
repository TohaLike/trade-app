"use client";
import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const Header: React.FC = ({}) => {
  function appBarLabel(label: string) {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }

  return (
    <AppBar position="static" color="primary">
      {appBarLabel("Stocks App")}
    </AppBar>
  );
};
