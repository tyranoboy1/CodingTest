import React from "react";
import Ctable from "./Ctable";
import arrow from "../src/image/arrow.svg";
// import "./App.css";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { bgcolor, display, fontStyle, fontWeight } from "@mui/system";
function App() {
  return (
    <Box>
      <Box
        xs={12}
        sx={{
          pt: "15px",
          pb: "15px",
          pl: "80px",
          pr: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ fontSize: "30px", fontWeight: "600" }}>MUSINSO</Box>
        <Box sx={{ fontSize: "15px", fontWeight: "600" }}>코딩</Box>
        <Button>
          <Box color={"#808080"} sx={{ fontSize: "13px" }}>
            로그아웃
          </Box>
        </Button>
      </Box>

      <Box
        borderColor={"#808080"}
        borderTop={1}
        borderBottom={1}
        sx={{
          pt: "10px",
          pb: "10px",
          pl: "80px",
          display: "flex",
          alignitem: "center",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ fontSize: "15px", fontWeight: "600" }}
        >
          한지훈 코딩테스트팀
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ fontSize: "14px", pl: 1, fontWeight: "300" }}
        >
          주식회사 플랫큐브 -한지훈- 프론트엔드
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={3}>
          {/* <Box display={"flex"} sx={{ pt: "70px" }}> */}
          <Box sx={{ pt: "70px", pl: "80px" }}>
            <Box width={"30px"}>
              <img src={arrow}></img>
            </Box>
            <Box display={"flex"} flexDirection={"column"} sx={{ pt: "45px" }}>
              <Box sx={{ fontSize: "23px", fontWeight: "600" }}>요청 현황</Box>
              <Box sx={{ pt: "10px", pl: "15px" }}>
                <Box sx={{ fontSize: "15px", fontWeight: "600" }}>
                  일반 요청
                </Box>
                <Box color={"#808080"} sx={{ fontSize: "15px", pt: "10px" }}>
                  대여 요청
                </Box>
                <Box color={"#808080"} sx={{ fontSize: "15px", pt: "10px" }}>
                  사원증 요청
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ pt: "70px", pr: "70px" }}>
            <Box sx={{ fontSize: "35px", fontWeight: "600" }}>
              일반 요청 목록
            </Box>
            <Box display={"flex"} sx={{ pt: "30px" }}>
              <Box sx={{ fontSize: "15px", fontWeight: "600" }}>전체 4</Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"430px"}
                color={"#909090"}
                sx={{ pl: "15px" }}
              >
                <Box>담당자 확인 1</Box>
                <Box>처리중 1</Box>
                <Box>완료 2</Box>
                <Box>요청취소 0</Box>
                <Box>반납필요 0</Box>
              </Box>
            </Box>
            <Box sx={{ pt: "20px" }}>
              <Ctable></Ctable>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
