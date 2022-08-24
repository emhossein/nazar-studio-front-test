import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#505050",
    },
    secondary: {
      main: "#F8F8F8",
    },
  },
  typography: {
    fontFamily: "Vazirmatn",
    fontSize: 14,
  },
  components:{
    MuiTypography:{
      defaultProps:{
        fontFamily:'Vazirmatn'
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#2B343B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1E272E",
    },
  },
  typography: {
    fontFamily: "Vazirmatn",
    fontSize: 14,
  },
});
