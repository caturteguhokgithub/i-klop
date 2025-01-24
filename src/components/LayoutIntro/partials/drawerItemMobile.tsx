import React from "react";
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import DrawerMenu from "./drawerMenu";
import DrawerItem from "./drawerItem";
import Link from "next/link";
import { grey } from "@mui/material/colors";

export default function DrawerItemMobile() {
  const [openNotif, setOpenNotif] = React.useState(false);
  const [openInput, setOpenInput] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);

  return (
    <Box
      sx={{
        ".MuiPaper-root": {
          backgroundColor: "transparent",
        },
        ".MuiAccordionDetails-root": {
          p: 0,
        },
      }}
    >
      <MenuList>
        <MenuItem component={Link} href="/bgv">
          <ListItemIcon>
            <Iconify name="mdi:home-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Home</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/bgv/intro/shop">
          <ListItemIcon>
            <Iconify name="mdi:shopping-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Shop</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/bgv/intro/apps">
          <ListItemIcon>
            <Iconify name="mdi:shape-plus-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Apps</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/bgv/intro/list">
          <ListItemIcon>
            <Iconify name="mdi:format-list-checks" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">My List</Typography>
          </ListItemText>
        </MenuItem>
        <Divider sx={{ bgcolor: grey[800] }} />
        <MenuItem onClick={() => setOpenNotif(true)}>
          <ListItemIcon>
            <Iconify name="mdi:bell-badge-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Notifications</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setOpenInput(true)}>
          <ListItemIcon>
            <Iconify name="mdi:login-variant" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Input Source</Typography>
          </ListItemText>
        </MenuItem>
        <Divider sx={{ bgcolor: grey[800] }} />
        <MenuItem onClick={() => setOpenSetting(true)}>
          <ListItemIcon>
            <Iconify name="mdi:cog-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Settings</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setOpenAccount(true)}>
          <ListItemIcon>
            <Iconify name="mdi:account-outline" color="white" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="white">Account</Typography>
          </ListItemText>
        </MenuItem>
      </MenuList>
      <DrawerMenu
        mobileView
        open={openNotif}
        onclose={() => setOpenNotif(false)}
      >
        <DrawerItem title="Notifications" menu="notification" />
      </DrawerMenu>
      <DrawerMenu
        mobileView
        open={openInput}
        onclose={() => setOpenInput(false)}
      >
        <DrawerItem title="Input Source" menu="input" />
      </DrawerMenu>
      <DrawerMenu
        mobileView
        open={openSetting}
        onclose={() => setOpenSetting(false)}
      >
        <DrawerItem title="Settings" menu="setting" />
      </DrawerMenu>
      <DrawerMenu
        mobileView
        open={openAccount}
        onclose={() => setOpenAccount(false)}
      >
        <DrawerItem title="Account" menu="account" />
      </DrawerMenu>
    </Box>
  );
}
