import { Box, Button, styled, Typography } from "@mui/material";
import { Container, display } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import bgImg from "../../img/image.png";
import heroImg from "../../img/hero_illustration.png";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "62px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ background: '#b4d1ff', minHeight: "95vh"}}>
      <Container  >
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "2" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "rgb(62, 62, 62)",
                fontWeight: "600",

              }}
            >

              Welcome to AcPI System
            </Typography>
            <Title variant="h1">
              Securely Authenticate Your Products with AcPI
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "rgb(62, 62, 62)", my: 3,textAlign:'justify' ,fontWeight: "500"}}
            >

              Unveil the power of blockchain in the fight against counterfeiting. Our system guarantees authenticity,
              secures trust, and safeguards your products. Say goodbye to doubts, embrace the certainty of blockchain.
            </Typography>
            <Link to="/scanner" >

              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Scan QR"
                heroBtn={true}
         
              />
            </Link>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
