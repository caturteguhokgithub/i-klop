import React from "react";
import { Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";
import iTheme from "@/themes/themes";

export default function DrawerMenu({
  open,
  onclose,
  children,
  position,
  mobileView,
}: {
  open: boolean;
  onclose: () => void;
  children: React.ReactNode;
  position?: "bottom" | "left" | "right" | "top";
  mobileView?: boolean;
}) {
  return (
    <Drawer
      open={open}
      onClose={onclose}
      anchor={position || "right"}
      sx={{
        ".MuiDrawer-paper": {
          // bgcolor: grey[900],
          bgcolor: iTheme.palette.secondary.main,
          overflowX: "hidden",
          width:
            position === "top"
              ? "100%"
              : position === "right"
              ? 400
              : mobileView
              ? 280
              : 400,
        },
      }}
    >
      {children}
    </Drawer>
  );
}
