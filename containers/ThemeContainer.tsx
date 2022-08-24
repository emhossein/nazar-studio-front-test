import { Box } from "@mui/material";
import React from "react";
import { darkTheme, lightTheme } from "./../styles/theme";
import { themeState } from "../atoms/themeState";
import { useRecoilValue } from "recoil";

function ThemeContainer({ children }) {
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
