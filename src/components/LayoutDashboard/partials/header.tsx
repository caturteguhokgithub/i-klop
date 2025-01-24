import * as React from "react";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import { Stack } from "@mui/material";
import { Icon } from "@iconify/react";

import iTheme from "@/themes/themes";
import useBreakpoints from "@/themes/breakpoints";
import CompanyLogo from "@/components/CompanyLogo/page";

export function HeaderNav({
  title,
  isDashboardView,
  toggleCollapse,
  handleToggleCollapse,
  handleClickDrawer,
}: {
  title?: string;
  isDashboardView?: boolean;
  toggleCollapse: boolean;
  handleToggleCollapse?: () => void;
  handleClickDrawer?: () => void;
}): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { onlyMediumScreen } = useBreakpoints();

  const menuCollapse = (
    <IconButton
      sx={{ p: 0 }}
      className={`cssanimation ${
        toggleCollapse ? "fadeInLeft" : "fadeInRight"
      }`}
      onClick={onlyMediumScreen ? handleClickDrawer : handleToggleCollapse}
    >
      <Icon
        icon={
          toggleCollapse
            ? "line-md:menu-unfold-right"
            : "line-md:menu-unfold-left"
        }
        height={24}
        color={iTheme.palette.secondary.dark}
      />
    </IconButton>
  );

  return (
    <Box
      px={3}
      component="header"
      sx={{
        borderBottom: "1px solid var(--mui-palette-divider)",
        backgroundColor: "var(--mui-palette-background-paper)",
        position: "sticky",
        top: 0,
        zIndex: "var(--mui-zIndex-appBar)",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        height={64}
      >
        {!onlyMediumScreen && menuCollapse}
        {onlyMediumScreen && <CompanyLogo size="sm" company="bgv" />}
        <Stack alignItems="center" direction="row" spacing={2}>
          <Button
            aria-describedby={id}
            size="small"
            onClick={handleClick}
            sx={{
              p: 0,
              minWidth: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {!onlyMediumScreen && (
              <Typography
                fontSize="0.9rem"
                textTransform={"capitalize"}
                color={iTheme.palette.secondary.dark}
              >
                Administrator
              </Typography>
            )}
            <Avatar
              alt="Account"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              sx={{ width: 32, height: 32 }}
            />
          </Button>
          {onlyMediumScreen && menuCollapse}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Paper sx={{ width: 200, maxWidth: "100%" }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon sx={{ minWidth: "32px !important" }}>
                    <Icon icon="mdi:account-settings-variant" height={22} />
                  </ListItemIcon>
                  <ListItemText>Account</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Icon icon="mdi:logout" height={22} color={red[600]} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: red[600] }}>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Popover>
        </Stack>
      </Stack>
    </Box>
  );
}
