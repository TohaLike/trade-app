"use client";
import React from "react";
import moment from "moment";
import { Paper, Typography } from "@mui/material";

export const CurrentDate: React.FC = () => {
  const now = moment();

  const formatted = now.format("DD.MM.YYYY");

  return (
    <div>
      <Paper
        elevation={3}
        variant="outlined"
        sx={{
          display: "inline-block",
          px: 3,
          py: 1,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6">{formatted}</Typography>
      </Paper>
    </div>
  );
};
