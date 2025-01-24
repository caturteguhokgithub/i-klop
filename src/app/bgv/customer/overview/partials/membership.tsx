import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Iconify from "@/components/Icon/iconify";

export default function Membership() {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
      }}
    >
      <CardContent
        sx={{
          p: 0,
          pb: 2,
          mb: 2,
          borderBottom: `1px solid ${grey[300]}`,
          position: "relative",
        }}
      >
        <Typography fontSize="0.9rem" color={grey[600]}>
          Manage since{" "}
          <Typography component="span" fontWeight={600} fontSize="0.9rem">
            November 1999
          </Typography>
        </Typography>
        <Typography>
          Next payment <strong>22 December 2025</strong>
        </Typography>
        <Box
          px={3}
          py={1}
          className="btn-grad-plan"
          position="absolute"
          top={0}
          right={-16}
          sx={{ cursor: "default" }}
        >
          <Typography fontSize="1.2rem" color="white" fontWeight={600}>
            Basic Plan
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ p: "0 !important" }}>
        <Button
          endIcon={<Iconify name="line-md:chevron-right" />}
          fullWidth
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Manage Membership
        </Button>
      </CardActions>
    </Card>
  );
}
