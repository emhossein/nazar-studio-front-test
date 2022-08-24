import { Box } from "@mui/material";
import React,{ ReactNode } from "react";
import { darkTheme, lightTheme } from "./../styles/theme";
import { themeState } from "../atoms/themeState";
import { useRecoilValue } from "recoil";

interface Props {
  children?: ReactNode
}

function ThemeContainer({ children }:Props) {
  const theme = useRecoilValue(themeState);
  const isDark = theme
    ? darkTheme.palette.secondary.main
    : lightTheme.palette.secondary.main;

  return (
    <Box
      sx={{
        bgcolor: isDark,
        pt: "24px",
        fontFamily: "Vazirmatn",
      }}
    >
      {children}
    </Box>
  );
}

export default ThemeContainer;
