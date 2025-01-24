"use client";

import CompanyLogo from "@/components/CompanyLogo/page";
import { Box, Button, Stack, Typography } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { Fragment } from "react";
import React from "react";
import useBreakpoints from "@/themes/breakpoints";
import Link from "next/link";
import Iconify from "../Icon/iconify";

export default function LayoutLogin({
  children,
  title,
  desc,
  loginLayout,
  noLogo,
}: {
  children: React.ReactNode;
  title: string;
  desc: React.ReactNode;
  loginLayout?: boolean;
  noLogo?: boolean;
}) {
  const { onlySmallScreen, onlyMediumScreen } = useBreakpoints();

  return (
    <Fragment>
      <Stack
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            width: "35%",
            height: "55%",
            backgroundColor: blue[600],
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            filter: "blur(200px)",
            opacity: 0.2,
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          },
        }}
      >
        {noLogo ? null : (
          <>
            {!loginLayout && (
              <Box py={3}>
                <CompanyLogo dark company="bgv" />
              </Box>
            )}
          </>
        )}
        <Stack
          gap={onlyMediumScreen ? 2 : 3}
          position="relative"
          zIndex={1}
          overflow="auto"
        >
          <Stack gap={1}>
            <Typography
              component="h1"
              fontSize="2rem"
              color="white"
              fontWeight={600}
              textAlign="center"
              lineHeight={1}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              fontSize="1rem"
              color={grey[400]}
              textAlign="center"
              px={4}
              // maxWidth={400}
            >
              {desc}
            </Typography>
          </Stack>
          {loginLayout ? (
            <Box
              maxWidth={onlySmallScreen ? "90%" : 400}
              margin="0 auto"
              px={4}
              py={5}
              boxShadow="0 8px 32px 0 rgba(0, 0, 221, 0.1)"
              borderRadius={3}
              border="1px solid rgba( 255, 255, 255, 0.1)"
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                // background:
                //   "linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Stack direction="row" justifyContent="center">
                <CompanyLogo dark company="bgv" />
              </Stack>
              {children}
              {/* <Stack direction="row" justifyContent="center" mt={3}>
                <Button
                  LinkComponent={Link}
                  href="/bgv"
                  startIcon={
                    <Iconify
                      name="mdi:arrow-left"
                      size={18}
                      color={blue[600]}
                    />
                  }
                  sx={{
                    color: `${blue[600]} !important`,
                    textTransform: "none",
                  }}
                >
                  Back to Home
                </Button>
              </Stack> */}
            </Box>
          ) : (
            children
          )}
          <Stack pb={3}>
            <Typography fontSize="12px" color={grey[500]} align="center">
              Copyright {new Date().getFullYear()} &copy; Vio BGV Set Top Box
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
}
