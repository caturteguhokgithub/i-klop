import React from "react";
import { Stack, Typography } from "@mui/material";
import { IconEmptyState } from "../Icons";
import { grey } from "@mui/material/colors";

export default function EmptyState() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      width="100%"
      borderRadius={2}
      bgcolor={grey[50]}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Stack gap={2} alignItems="center">
        <IconEmptyState width={200} />
        <Stack alignItems="center">
          <Typography
            component="h1"
            fontSize="1.2rem"
            fontWeight={600}
            color={grey[600]}
          >
            No Data
          </Typography>
          <Typography component="p" color={grey[500]}>
            There is no data to show you right now
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
