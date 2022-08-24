import { Box, Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { themeState } from "../atoms/themeState";
import styles from "../styles/Home.module.css";
import { darkTheme, lightTheme } from "../styles/theme";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Home: NextPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: theme
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
        mx: "144px !important",
        mt: "16px",
        p: "58px 98px 46px 98px",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          "& p": {
            fontFamily: "Vazirmatn",
            fontSize: "20px",
            width: "956px",
            lineHeight: "23px",
            color: theme
                ? darkTheme.palette.primary.contrastText
                : lightTheme.palette.primary.contrastText,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            height: "570px",
            width: "956px",
            mb: "24px",
          }}
        >
          <Image
            layout="fill"
            src="https://loremflickr.com/956/570/coast,porto"
            alt=""
            priority
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(0deg,rgba(0,0,0,0.8) 0%, rgba(0,255,0,0) 40%)",
              position: "absolute",
            }}
          />
          <Typography
            component="h1"
            sx={{
              position: "absolute",
              fontFamily: "Vazirmatn",
              color: "#fff",
              top: "80%",
              right: "50%",
              transform: "translateX(50%)",
              fontSize: "40px",
            }}
          >
            ساحل پورتو پرتغال
          </Typography>
        </Box>
        <Typography>
          شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات دارای
          زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است.
        </Typography>
        <Typography sx={{ mb: "64px" }}>
          خود میرامار به عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که
          پرتغالی ها از مناطق همسایه آن را دوست دارند. با این حال ، این ساحل
          هنوز به عنوان یک مقصد گردشگری بین المللی چندان مشهور نشده است ، که به
          بازدیدکنندگانش مکانی برای لذت بردن می دهد.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "172px",
            height: "42px",
            fontFamily: "Vazirmatn",
            boxShadow:0
          }}
          href='about'
        >
          درباره ما <ArrowCircleLeftIcon fontSize="small" />{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
