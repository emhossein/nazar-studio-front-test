import { Box, Button, Container } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeState";
import { darkTheme } from "../styles/theme";
import { lightTheme } from "./../styles/theme";

import PersonIcon from "@mui/icons-material/Person";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const linkStyle = {
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "31.25px",
  textAlign: "center",
  textDecoration: "none",
};

const btnStyle = {
  width: "172px",
  height: "42px",
  borderRadius: "8px",
  boxShadow: 0,
  ml: "20px",
  fontSize: "15px",
  fontFamily: "Vazirmatn",
  borderWidth: "2px",
  ":hover": {
    borderWidth: "2px",
  },
};

function Navbar() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: theme
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
        mx: "144px !important",
        height: "72px",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          pr: "98px",
          pl: "37px",
        }}
      >
        <Box
          sx={{
            "& a": {
              color: theme
                ? darkTheme.palette.primary.contrastText
                : lightTheme.palette.primary.contrastText,
            },
            "& a:first-child": {
              ml: "24px",
              color: "rgba(24, 125, 241, 0.7)",
            },
          }}
        >
          <MuiLink href="/" sx={linkStyle}>
            صفحه نخست{" "}
          </MuiLink>
          <MuiLink href="about" sx={linkStyle}>
            درباره ما{" "}
          </MuiLink>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              ml: "41px",
            }}
            onClick={() => setTheme(!theme)}
          >
            <LightModeIcon
              fontSize="small"
              htmlColor={theme ? "#fff" : "#FFB320"}
            />
            {theme ? (
              <ToggleOffIcon htmlColor="#187DF1" />
            ) : (
              <ToggleOnIcon htmlColor="#D9D9D9" />
            )}
            <Brightness3Icon
              fontSize="small"
              htmlColor={theme ? "#FFB320" : "#2B343B"}
            />
          </Box>
          <Button variant="contained" sx={btnStyle}>
            ثبت نام
          </Button>
          <Button variant="outlined" sx={btnStyle}>
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
