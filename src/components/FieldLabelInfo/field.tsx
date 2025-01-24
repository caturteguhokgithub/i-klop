import React from "react";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function FieldLabelInfo({
  title,
}: {
  title?: string | React.ReactNode;
}) {
  return (
    <Typography gutterBottom fontSize={14} color={grey[600]}>
      {title}
    </Typography>
  );
}
