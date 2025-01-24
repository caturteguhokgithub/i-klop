"use client";

import { Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React from "react";
import LayoutLogin from "@/components/LayoutLogin/page";

export default function Reset() {
  return (
    <LayoutLogin
      title="Password Reset"
      desc="You will get new password on your email, check it out and click verification button"
    >
      <Grid container spacing={2} mt={-2}>
        <Grid size={12}>
          <Typography color={grey[400]} align="center" fontSize="0.9rem">
            Back to login page?{" "}
            <Typography
              fontSize="0.9rem"
              component={Link}
              href={"/bgv/account/login"}
              sx={{
                color: "white !important",
                transition: "all 300ms ease",
                "&:hover": {
                  color: `${blue[500]} !important`,
                },
              }}
            >
              Login Here
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </LayoutLogin>
  );
}
