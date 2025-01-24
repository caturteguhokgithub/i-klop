"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LayoutCustomer from "@/components/LayoutCustomer/page";
import { grey } from "@mui/material/colors";
import AccountDevice from "./partials/account";

export default function Device() {
  return (
    <LayoutCustomer title="Devices">
      <Stack>
        <Typography fontSize="1rem" color={grey[600]} mb={1}>
          Account Devices
        </Typography>
        <Stack>
          <Grid container spacing={2}>
            <AccountDevice
              current
              device="browser"
              deviceName="Chrome - Web Browser"
              userIcon="AN"
              username="accountnetfix"
              dateTime="12/25/24, 20:37 GMT+7"
            />
            <AccountDevice
              device="hp"
              deviceName="Android Phone"
              userIcon="AN"
              dateTime="12/25/24, 20:37 GMT+7"
            />
            <AccountDevice
              device="tv"
              deviceName="Xiaomi - Smart TV"
              userIcon="AN"
              username="accountnetfix"
              dateTime="12/25/24, 20:37 GMT+7"
            />
          </Grid>
        </Stack>
      </Stack>
    </LayoutCustomer>
  );
}
