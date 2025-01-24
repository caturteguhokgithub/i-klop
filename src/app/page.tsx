"use client";

import CompanyLogo from "@/components/CompanyLogo/page";
import LayoutLogin from "@/components/LayoutLogin/page";
import useBreakpoints from "@/themes/breakpoints";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";

const BoxLogo = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Box
      href={`/${href}`}
      component={Link}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth={200}
      margin="0 auto"
      px={4}
      py={5}
      boxShadow="0 8px 32px 0 rgba(221, 0, 0, 0.1)"
      borderRadius={3}
      border="1px solid rgba( 255, 255, 255, 0.1)"
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        cursor: "pointer",
        transition: "all 500ms ease-in-out",

        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default function IndexHome() {
  const { onlySmallScreen } = useBreakpoints();

  return (
    <LayoutLogin
      noLogo
      title="Choose Your App"
      desc="Website app with complete info inside"
    >
      <Stack alignItems="center" justifyContent="center">
        <Stack direction="row" gap={3}>
          <BoxLogo href="vio">
            <Box py={3}>
              <CompanyLogo dark company="vio" />
            </Box>
          </BoxLogo>
          <BoxLogo href="bgv">
            <Box py={3}>
              <CompanyLogo dark company="bgv" />
            </Box>
          </BoxLogo>
        </Stack>
      </Stack>
    </LayoutLogin>
  );
}
