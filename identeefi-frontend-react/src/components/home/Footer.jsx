import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../../img/fbicon.png";
import twitterIcon from "../../img/twittericon.png";
import linkedinIcon from "../../img/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop:'4px'
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 ,backgroundColor:'rgb(136, 136, 136)', mt:4}} >
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Products
            </Typography>

            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Product Verification</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Supply Chain Tracking</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Anti-Counterfeiting</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Smart Contracts</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>How It Works</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Case Studies</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Blog</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Whitepaper</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>About Us</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Partnerships</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Terms of Use</FooterLink>
            <br />
            <FooterLink sx={{color:"white", fontSize:'16px', fontWeight:'400'}}>Privacy Policy</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "white",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Let us help you find the perfect solution for your needs. 
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
