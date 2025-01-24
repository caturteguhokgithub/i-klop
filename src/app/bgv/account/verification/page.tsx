"use client";

import { Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React, { Fragment } from "react";
import LayoutLogin from "@/components/LayoutLogin/page";

export default function Verification() {
  return (
    <LayoutLogin
      title="Account Verification"
      desc={
        <Fragment>
          We sent an email to{" "}
          <Typography color={blue[600]} component="span">
            email.account@email.com
          </Typography>{" "}
          to verify your account
        </Fragment>
      }
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
