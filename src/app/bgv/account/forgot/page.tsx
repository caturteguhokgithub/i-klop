"use client";

import { Button, FormControl, TextField, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React from "react";
import LayoutLogin from "@/components/LayoutLogin/page";

export default function Forgot() {
  return (
    <LayoutLogin
      loginLayout
      title="Forgot Your Password"
      desc="You will get new password on your email, check it out"
    >
      <Grid container spacing={2} mt={4}>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Email"
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                input: {
                  color: "white",
                  backgroundColor: "rgba( 255, 255, 255, 0.1)",
                  border: "1px solid rgba( 255, 255, 255, 0.5)",
                  borderRadius: 2,

                  "&::placeholder": {
                    color: grey[400],
                    opacity: 1,
                  },
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid size={12} py={1}>
          <FormControl fullWidth>
            <Button
              component={Link}
              href="/bgv/account/reset"
              variant="contained"
              color="primary"
              sx={{
                py: 2,
                borderRadius: 2,
                color: "white !important",

                "&:hover": {
                  bgcolor: blue[800],
                },
              }}
            >
              Reset Your Password
            </Button>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <Typography color={grey[400]} align="center" fontSize="0.9rem">
            Already have an acount?{" "}
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
