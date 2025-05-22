"use client";
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

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
    <div>
      <AppBar
        position="static"
        color="primary"
        sx={{ backgroundColor: "var(--dark-gray)" }}
      >
        {appBarLabel("STOCKS")}
      </AppBar>
    </div>
  );
};
