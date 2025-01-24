import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  alpha,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { blue, grey, red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";
import { MenuItemsBgv } from "./menuItems";
import CompanyLogo from "@/components/CompanyLogo/page";
import useBreakpoints from "@/themes/breakpoints";

export function SideNav({
  toggleCollapse,
  company,
}: {
  toggleCollapse?: boolean;
  company?: string;
}): React.JSX.Element {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [toggleHoverCollapse, setToggleHoverCollapse] = useState(false);

  const handleHoverCollapse = () => {
    setToggleHoverCollapse(!toggleHoverCollapse);
  };

  const pathname = usePathname();

  useEffect(() => {
    const newOpen: Record<string, boolean> = {};
    MenuItemsBgv.forEach((group, groupIndex) => {
      group.items.forEach((item, itemIndex) => {
        if (item.subItems) {
          item.subItems.forEach((subItem) => {
            if (pathname.startsWith(subItem.path)) {
              newOpen[`${groupIndex}-${itemIndex}`] = true;
            }
          });
        }
      });
    });
    setOpen(newOpen);
  }, [pathname]);

  const handleClick = (
    groupIndex: number,
    itemIndex: number,
    isParent: boolean
  ) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpen((prevOpen) => {
      const newOpen = isParent ? {} : { ...prevOpen };
      newOpen[key] = !prevOpen[key];
      return newOpen;
    });
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path);

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Box
      // bgcolor="#F5F7F9"
      bgcolor={grey[50]}
      sx={{
        // display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: onlyMediumScreen ? "relative" : "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: toggleCollapse ? "72px" : "var(--SideNav-width)",
        zIndex: "var(--SideNav-zIndex)",
        "&::-webkit-scrollbar": { display: "none" },
        transition: "width 300ms ease-in-out",
        ...(toggleCollapse && {
          "&:hover": {
            width: "var(--SideNav-width)",
          },
        }),
      }}
      onMouseEnter={handleHoverCollapse}
      onMouseLeave={handleHoverCollapse}
    >
      {!onlyMediumScreen && (
        <Stack direction="row" justifyContent="center">
          <Stack justifyContent="center" alignItems="flex-end" height={64}>
            <Box
              component={Link}
              href="/dashboard"
              className={`cssanimation ${
                toggleCollapse && !toggleHoverCollapse
                  ? "blurInTop"
                  : "blurInBottom"
              }`}
            >
              <CompanyLogo
                company={company}
                size={toggleCollapse ? "xs" : ""}
              />
            </Box>
            {/* <Typography
            color="black"
            fontSize={16}
            fontWeight={600}
            className={`cssanimation ${
              toggleCollapse && !toggleHoverCollapse
                ? "blurInTop"
                : "blurInBottom"
            }`}
          >
            {toggleCollapse && !toggleHoverCollapse ? "VBS" : "VIO BGV STB"}
          </Typography> */}
          </Stack>
        </Stack>
      )}
      <Box
        component="nav"
        overflow="auto"
        sx={{
          flex: "1 1 auto",
          p: 2,
          overflowX: "hidden",
        }}
      >
        <Stack spacing={3} sx={{ listStyle: "none", m: 0, p: 0 }}>
          {MenuItemsBgv.map((menu, groupIndex) => (
            <Box key={groupIndex}>
              <Typography
                component="h3"
                fontWeight={600}
                color={grey[400]}
                fontSize="0.7rem"
                px={1}
                mb={1}
                textTransform="uppercase"
              >
                {menu.groupName}
              </Typography>
              {menu.groupName && (
                <List component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
                  {menu.items.map((item, itemIndex) => (
                    <React.Fragment key={item.text}>
                      <ListItem
                        onClick={() =>
                          handleClick(groupIndex, itemIndex, !!item.subItems)
                        }
                        sx={{
                          px: toggleCollapse && !toggleHoverCollapse ? 0 : 2,
                          justifyContent:
                            toggleCollapse && !toggleHoverCollapse
                              ? "center"
                              : "unset",
                          gap: 1,
                          ...(isActive(item.path) && {
                            bgcolor: alpha(red[700], 0.15),
                            //   "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 8px",
                          }),
                          borderRadius: 1,
                          userSelect: "none",
                          cursor: "pointer",
                        }}
                      >
                        <ListItemAvatar
                          sx={{
                            minWidth: 0,
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            icon={item.icon}
                            color={isActive(item.path) ? red[700] : "black"}
                            height={
                              toggleCollapse && !toggleHoverCollapse ? 24 : 18
                            }
                          />
                        </ListItemAvatar>
                        {toggleCollapse && !toggleHoverCollapse ? null : (
                          <>
                            <ListItemText>
                              <Typography
                                color={isActive(item.path) ? red[700] : "black"}
                                fontSize={14}
                              >
                                {item.text}
                              </Typography>
                            </ListItemText>
                            {item.subItems ? (
                              open[`${groupIndex}-${itemIndex}`] ? (
                                <Icon icon="material-symbols-light:keyboard-arrow-up" />
                              ) : (
                                <Icon icon="material-symbols-light:keyboard-arrow-down" />
                              )
                            ) : null}
                          </>
                        )}
                      </ListItem>
                      {(!toggleCollapse || toggleHoverCollapse) && (
                        <>
                          {item.subItems && (
                            <Collapse
                              in={open[`${groupIndex}-${itemIndex}`]}
                              timeout="auto"
                              mountOnEnter
                              unmountOnExit
                            >
                              <List
                                component="div"
                                disablePadding
                                sx={{
                                  pr: 5,
                                  mt: 0.5,
                                  mb: 2,
                                  listStyleType: "disc",
                                  a: {
                                    "&::marker": {
                                      color: grey[400],
                                      transition: "all 300ms ease",
                                    },
                                    "&:hover": {
                                      "&::marker": {
                                        color: red[700],
                                      },
                                    },
                                  },
                                }}
                              >
                                {item.subItems.map((subItem) => (
                                  <ListItem
                                    key={subItem.text}
                                    component={Link}
                                    href={subItem.path}
                                    sx={{
                                      display: "list-item",
                                      ml: 5,
                                      px: 0,
                                      py: 0.7,
                                      borderRadius: 1,
                                      span: {
                                        transition: "all 300ms ease",
                                      },
                                      "&::marker": {
                                        color:
                                          pathname === subItem.path
                                            ? `${red[700]} !important`
                                            : grey[400],
                                      },
                                      "&:hover": {
                                        span: {
                                          color: red[700],
                                        },
                                      },
                                    }}
                                  >
                                    {/* <ListItemText sx={{ m: 0 }}> */}
                                    <Typography
                                      component="span"
                                      color={
                                        pathname === subItem.path
                                          ? red[700]
                                          : "black"
                                      }
                                      fontSize="0.83rem"
                                      lineHeight={1}
                                    >
                                      {subItem.text}
                                    </Typography>
                                    {/* </ListItemText> */}
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
