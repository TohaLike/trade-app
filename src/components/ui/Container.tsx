"use client";
import React from "react";
import { Container as MuiContainer } from "@mui/material";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MuiContainer maxWidth={false} sx={{ maxWidth: 1250 }}>
        {children}
      </MuiContainer>
    </div>
  );
};
