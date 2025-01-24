import React from "react";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CompanyLogo from "@/components/CompanyLogo/page";

export default function IntroFooter() {
  return (
    <Stack gap={1} textAlign="center" px={3} py={2}>
      <CompanyLogo dark company="bgv" size="sm" />
      <Typography fontSize="12px" color={grey[600]}>
        Copyright {new Date().getFullYear()} &copy; Vio BGV Set Top Box. All
        Rights Reserved
      </Typography>
    </Stack>
  );
}
