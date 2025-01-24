"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import LayoutCustomer from "@/components/LayoutCustomer/page";
import { grey } from "@mui/material/colors";
import Membership from "./partials/membership";
import Quicklink from "./partials/quickLink";

export default function Overview() {
  return (
    <LayoutCustomer title="Overview">
      <Stack gap={3}>
        <Stack gap={1}>
          <Typography fontSize="1rem" color={grey[600]}>
            Membership Detail
          </Typography>
          <Membership />
        </Stack>
        <Stack gap={1}>
          <Typography fontSize="1rem" color={grey[600]}>
            Quick Link
          </Typography>
          <Quicklink />
        </Stack>
      </Stack>
    </LayoutCustomer>
  );
}
