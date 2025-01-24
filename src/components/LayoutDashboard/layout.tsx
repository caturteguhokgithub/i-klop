"use client";

import * as React from "react";
import { Drawer, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";

import { HeaderNav } from "./partials/header";
import { SideNav } from "./partials/sideNav";
import { grey } from "@mui/material/colors";
import useBreakpoints from "@/themes/breakpoints";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: React.ReactNode;
  actionButton?: React.ReactNode;
  company?: string;
}

export default function DashboardLayout({
  children,
  title,
  breadcrumbs,
  actionButton,
  company,
}: LayoutProps): React.JSX.Element {
  const drawerOpenKey = "drawerOpen";

  const [toggleCollapse, setToggleCollapse] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isDrawerOpen = localStorage.getItem(drawerOpenKey) === "true";
      setToggleCollapse(isDrawerOpen);
    }
  }, []);

  const handleToggleCollapse = () => {
    setToggleCollapse(!toggleCollapse);
  };

  React.useEffect(() => {
    localStorage.setItem(drawerOpenKey, JSON.stringify(toggleCollapse));
  }, [toggleCollapse]);

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          body: {
            "--MainNav-zIndex": 1000,
            "--SideNav-width": "280px",
            "--SideNav-zIndex": 1100,
            "--MobileNav-width": "320px",
            "--MobileNav-zIndex": 1100,
          },
        }}
      />
      <Box
        // bgcolor="#fafafb"
        bgcolor="white"
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        {!onlyMediumScreen && (
          <SideNav toggleCollapse={toggleCollapse} company={company} />
        )}
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            transition: "padding-left 300ms ease-in-out",
            pl: { lg: toggleCollapse ? "72px" : "var(--SideNav-width)" },
            position: "relative",
            zIndex: 1099,
          }}
        >
          <HeaderNav
            handleToggleCollapse={handleToggleCollapse}
            toggleCollapse={toggleCollapse}
            handleClickDrawer={() => setOpenDrawer(true)}
          />
          <Box
            component="main"
            p={3}
            height="calc(100vh - 118px)"
            overflow="hidden"
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
                cursor: "pointer",
              },
            }}
          >
            {/* <Container maxWidth="xl" sx={{ p: 0 }}> */}
            <Stack gap={2}>
              {title && (
                <Box borderRadius={1.5} className="bgTitle">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                    p={2}
                    pr={0}
                    position="relative"
                    zIndex={2}
                  >
                    <Stack gap={0.2}>
                      <Typography
                        component="h2"
                        fontSize="1.2rem"
                        fontWeight={500}
                        color="white"
                        lineHeight={1}
                      >
                        {title}
                      </Typography>
                      {breadcrumbs}
                    </Stack>
                    <Box>{actionButton}</Box>
                  </Stack>
                </Box>
              )}
              {children}
            </Stack>
            {/* </Container> */}
          </Box>
          <Box component="footer">
            <Typography fontSize={14} color={grey[500]} py={2} px={3}>
              Copyright &copy; {new Date().getFullYear()} | Vio BGV Set Top Box.
              All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Box>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <SideNav toggleCollapse={false} company={company} />
      </Drawer>
    </React.Fragment>
  );
}
