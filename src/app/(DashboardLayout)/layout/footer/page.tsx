'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ pt: 6, display: 'flex', justifyContent: "space-between" }}>
      <Typography>
        Distributed by  
        <Link href="https://www.themewagon.com">
          ThemeWagon.com
        </Link>
      </Typography>
      <Typography>
        © {new Date().getFullYear()} All rights reserved by{" "}
        <Link href="https://www.wrappixel.com">
          Wrappixel.com
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
    