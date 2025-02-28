"use client";

import { alpha, Box, Stack, TextField, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React, { Fragment } from "react";
import LayoutLogin from "@/components/LayoutLogin/page";
import OtpInput from "react-otp-input";
import Countdown from "./partials/countdown";

export default function Verification() {
  const [otp, setOtp] = React.useState("");

  const message = false;

  return (
    <LayoutLogin
      title="Account Verification"
      desc={
        <Fragment>
          {message ? (
            <Box component="span">
              We sent an email to{" "}
              <Typography color={blue[600]} component="span">
                email.account@email.com
              </Typography>{" "}
              to verify your account
            </Box>
          ) : (
            <Box component="span">
              Please enter the verification code, we will send it to{" "}
              <Typography color={blue[600]} component="span">
                email.account@email.com
              </Typography>
            </Box>
          )}
        </Fragment>
      }
    >
      <Grid container spacing={2} mt={message ? -2 : 0}>
        <Grid size={12}>
          {message ? (
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
          ) : (
            <Stack justifyContent="center" alignItems="center" gap={2}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                containerStyle={{
                  gap: 8,
                }}
                inputStyle={{
                  fontSize: 20,
                  color: "white",
                  backgroundColor: alpha(blue[100], 0.2),
                  width: 56,
                  height: 56,
                  borderRadius: 8,
                  border: 0,
                  outline: "none",
                }}
                renderInput={(props) => <input {...props} />}
              />
              <Countdown />
            </Stack>
          )}
        </Grid>
      </Grid>
    </LayoutLogin>
  );
}
