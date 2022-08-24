import { Container, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "../atoms/themeState";
import { darkTheme, lightTheme } from "../styles/theme";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function about() {
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
            color: theme
              ? darkTheme.palette.primary.contrastText
              : lightTheme.palette.primary.contrastText,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row",mb:'213px' }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "98px",
              overflow: "hidden",
              height: "517px",
              width: "461px",
              mb: "24px",
            }}
          >
            <Image
              layout="fill"
              src="https://loremflickr.com/461/517/bussines"
              alt=""
              priority
            />
          </Box>
          <Box
            sx={{
              width: "500px",
              "& p": { width: "500px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mr:'26px'
            }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize:'40px',
                fontFamily:'Vazirmatn',
                mb:'28px'
              }}
            >
              درباره ما
            </Typography>
            <Typography sx={{
                fontSize:'24px',
                lineHeight:'48px'
              }}>
              نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی صفحه
              درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی
              طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار
              میدهند که میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: "172px",
            height: "42px",
            fontFamily: "Vazirmatn",
            boxShadow: 0,
            borderWidth:'2px'
          }}
          href="/"
        >
          <ArrowCircleRightIcon fontSize="small" />
          صفحه اصلی
        </Button>
      </Box>
    </Container>
  );
}

export default about;