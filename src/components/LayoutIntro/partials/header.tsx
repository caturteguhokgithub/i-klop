import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DrawerMenu from "./drawerMenu";
import DrawerItem from "./drawerItem";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo/page";
import Image from "next/image";
import useBreakpoints from "@/themes/breakpoints";
import { MainMenu, MenuItems } from "./mainMenu";
import SearchBox from "./search";
import { usePathname } from "next/navigation";
import iTheme from "@/themes/themes";

export default function IntroHeader() {
  const [openNotif, setOpenNotif] = React.useState(false);
  const [openInput, setOpenInput] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(scrollYProgress, [0.3], ["0"]);

  const [conditionalStyle, setConditionalStyle] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setConditionalStyle(true);
      } else {
        setConditionalStyle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { onlySmallScreen, onlyMediumScreen } = useBreakpoints();
  const pathname = usePathname();

  const iconButtonStyle = {
    bgcolor: iTheme.palette.info.main,
    transition: "all 500ms ease-in-out",
    "&:hover": { bgcolor: alpha(iTheme.palette.info.main, 0.8) },
  };

  return (
    <Fragment>
      <motion.header
        ref={ref}
        style={{
          marginTop: onlySmallScreen ? 24 : "calc(4 * 8px)",
          paddingInline: conditionalStyle ? 24 : onlyMediumScreen ? 24 : 80,
          paddingBlock: conditionalStyle ? 16 : "unset",
          position: "sticky",
          top: 0,
          zIndex: 5,
          width: "100%",
          transition: "all 0.3s ease",
          y: headerY,
          backgroundColor: conditionalStyle
            ? iTheme.palette.secondary.main
            : "transparent",
        }}
      >
        <Box component="header" position="relative" zIndex={10}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={8}
              sx={{
                "& > a": {
                  lineHeight: 1,
                },
              }}
            >
              <Link href="/bgv/">
                <Image
                  alt="BGV"
                  src={`/logo.png`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "auto",
                    height: "60px",
                  }}
                />
                {/* <CompanyLogo dark company="bgv" /> */}
              </Link>
              {/* {!onlyMediumScreen && (
                <Stack direction="row" alignItems="center" gap={4}>
                  <Stack flexDirection="row" gap={3}>
                    {MenuItems.map(({ label, path }, i) => (
                      <MainMenu key={i} href={path}>
                        {label}
                      </MainMenu>
                    ))}
                  </Stack>
                </Stack>
              )} */}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={onlyMediumScreen ? 1 : 3}
            >
              {!pathname.includes("/bgv/intro/search") && (
                <IconButton
                  sx={iconButtonStyle}
                  onClick={() => setOpenSearch(true)}
                >
                  <Icon icon="mdi:magnify" color="white" height={24} />
                </IconButton>
              )}
              {!onlyMediumScreen && (
                <Fragment>
                  <Tooltip title="Notification">
                    <IconButton
                      sx={iconButtonStyle}
                      onClick={() => setOpenNotif(true)}
                    >
                      <Icon
                        icon="mdi:bell-badge-outline"
                        color="white"
                        height={24}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="VIP">
                    <IconButton
                      sx={iconButtonStyle}
                      onClick={() => setOpenInput(true)}
                    >
                      <Icon
                        icon="ri:vip-crown-line"
                        color="white"
                        height={24}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Input Source">
                    <IconButton
                      sx={iconButtonStyle}
                      onClick={() => setOpenInput(true)}
                    >
                      <Icon
                        icon="mdi:login-variant"
                        color="white"
                        height={24}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Setting">
                    <IconButton
                      sx={iconButtonStyle}
                      onClick={() => setOpenSetting(true)}
                    >
                      <Icon icon="mdi:cog-outline" color="white" height={24} />
                    </IconButton>
                  </Tooltip>
                </Fragment>
              )}
              <Tooltip title="Account">
                <IconButton
                  sx={iconButtonStyle}
                  onClick={() => setOpenAccount(true)}
                >
                  <Avatar sx={{ width: 24, height: 24, bgcolor: "white" }}>
                    <Typography fontSize="0.7rem">CT</Typography>
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </motion.header>
      <DrawerMenu
        position="top"
        open={openSearch}
        onclose={() => setOpenSearch(false)}
      >
        <SearchBox openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </DrawerMenu>
      <DrawerMenu open={openNotif} onclose={() => setOpenNotif(false)}>
        <DrawerItem title="Notifications" menu="notification" />
      </DrawerMenu>
      <DrawerMenu open={openInput} onclose={() => setOpenInput(false)}>
        <DrawerItem title="Input Source" menu="input" />
      </DrawerMenu>
      <DrawerMenu open={openSetting} onclose={() => setOpenSetting(false)}>
        <DrawerItem title="Settings" menu="setting" />
      </DrawerMenu>
      <DrawerMenu
        mobileView={onlyMediumScreen}
        open={openAccount}
        onclose={() => setOpenAccount(false)}
      >
        {onlyMediumScreen ? (
          <DrawerItem menu="mobile" />
        ) : (
          <DrawerItem title="Account" menu="account" />
        )}
      </DrawerMenu>
    </Fragment>
  );
}
