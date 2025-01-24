import React, { Fragment } from "react";
import { Box, Stack, ToggleButtonGroup, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { dataAccount, dataInput, dataNotification, dataSetting } from "../data";

import { ToggleBtnItem } from "./toggleButton";
import DrawerItemMobile from "./drawerItemMobile";
import useBreakpoints from "@/themes/breakpoints";

export default function DrawerItem({
  title,
  menu,
}: {
  title?: string;
  menu?: string;
}) {
  const [itemNotification, setItemNotification] = React.useState<string | null>(
    ""
  );
  const [itemInput, setItemInput] = React.useState<string | null>("3");

  const handleItemNotification = (
    event: React.MouseEvent<HTMLElement>,
    newItemNotification: string | null
  ) => {
    setItemNotification(newItemNotification);
  };

  const handleItemInput = (
    event: React.MouseEvent<HTMLElement>,
    newItemInput: string | null
  ) => {
    setItemInput(newItemInput);
  };

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Fragment>
      {title && (
        <Box px={4} py={3}>
          <Typography fontWeight={600} color="white" fontSize="1.3rem">
            {title}
          </Typography>
        </Box>
      )}
      {menu == "notification" && (
        <Fragment>
          {dataNotification.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemNotification}
              exclusive
              onChange={handleItemNotification}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={onlyMediumScreen ? "" : item.icon}
                title={item.title}
                desc={item.desc}
                hasRemove={item.hasRemove}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "input" && (
        <Fragment>
          {dataInput.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemInput}
              exclusive
              onChange={handleItemInput}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "setting" && (
        <Fragment>
          {dataSetting.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemInput}
              exclusive
              onChange={handleItemInput}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "account" && (
        <Fragment>
          <Stack
            direction="column"
            justifyContent="space-between"
            height="100%"
          >
            <Stack direction="column">
              {dataAccount.map((item, index) => (
                <ToggleButtonGroup
                  key={index}
                  value={itemInput}
                  exclusive
                  onChange={handleItemInput}
                  sx={{
                    ".MuiToggleButton-root.Mui-selected": {
                      bgcolor: blue[600],
                    },
                  }}
                >
                  <ToggleBtnItem
                    value={item.value}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    menu="account"
                    href={item.href}
                  />
                </ToggleButtonGroup>
              ))}
            </Stack>
            <Stack direction="column">
              <ToggleBtnItem
                icon="line-md:plus-circle"
                title="Add Account"
                desc="Login to different account"
                href="/bgv/account/register"
              />
              <ToggleBtnItem
                bgcolor={red[800]}
                icon="line-md:log-out"
                title="Logout"
                desc="Logout to move apps"
                href="/bgv/account/login"
              />
            </Stack>
          </Stack>
        </Fragment>
      )}
      {menu == "mobile" && <DrawerItemMobile />}
    </Fragment>
  );
}
