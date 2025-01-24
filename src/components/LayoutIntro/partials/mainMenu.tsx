import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useBreakpoints from "@/themes/breakpoints";
import { blue } from "@mui/material/colors";

export const MenuItems = [
  {
    label: "Home",
    path: "/bgv",
  },
  {
    label: "TV",
    path: "/bgv/intro/shop",
  },
  {
    label: "Video",
    path: "/bgv/intro/apps",
  },
  {
    label: "Games",
    path: "/bgv/intro/apps",
  },
  {
    label: "My List",
    path: "/bgv/intro/list",
  },
];

export const MainMenu = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Box
      component={Link}
      href={href}
      sx={{
        px: onlyMediumScreen ? 2 : "unset",
        py: onlyMediumScreen ? 1 : "unset",
        backgroundColor:
          onlyMediumScreen && isActive(href) ? blue[800] : "transparent",
      }}
    >
      <motion.span
        transition={{ duration: 0.5 }}
        style={{
          color: "white",
          position: "relative",
        }}
      >
        <Typography
          component="span"
          color="inherit"
          fontSize={onlyMediumScreen ? "1rem" : "1.2rem"}
          fontWeight={isActive(href) ? 700 : 500}
          sx={{ transition: "all 500ms ease-in-out" }}
        >
          {children}
        </Typography>
        {isActive(href) && (
          <motion.span
            layoutId="underline"
            style={{
              position: "absolute",
              width: "100%",
              height: "2px",
              bottom: -4,
              display: onlyMediumScreen ? "none" : "block",
              backgroundColor: "white",
            }}
          />
        )}
      </motion.span>
    </Box>
  );
};
