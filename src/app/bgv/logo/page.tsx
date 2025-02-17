"use client";

import React from "react";
import { Box, Stack } from "@mui/material";
import LayoutIntro from "@/components/LayoutIntro/page";
import CompanyLogo from "@/components/CompanyLogo/page";

export default function Intro() {
  return (
    <LayoutIntro>
      <Stack
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CompanyLogo dark company="bgv" />
      </Stack>
    </LayoutIntro>
  );
}
