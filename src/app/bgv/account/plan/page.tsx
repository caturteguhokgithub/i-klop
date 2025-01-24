"use client";

import {
  alpha,
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import Iconify from "@/components/Icon/iconify";
import LayoutLogin from "@/components/LayoutLogin/page";
import { motion } from "framer-motion";
import { grey, red } from "@mui/material/colors";
import Link from "next/link";
import useBreakpoints from "@/themes/breakpoints";

const DataPlan = [
  {
    value: 1,
    title: "Mobile",
    price: 49000,
    list: [
      {
        icon: "material-symbols-light:check",
        label: (
          <span>
            <strong>Stream on 1</strong> mobile device at once
          </span>
        ),
      },
      {
        icon: "material-symbols-light:live-tv-outline",
        label: (
          <span>
            <strong>Standard HD</strong> video resolution
          </span>
        ),
      },
      {
        icon: "material-symbols-light:lock-open-outline-sharp",
        label: "Watch only on mobile phone and tablet",
      },
      {
        icon: "material-symbols-light:download",
        label: (
          <span>
            <strong>15 downloads</strong> to watch on the go
          </span>
        ),
      },
    ],
  },
  {
    value: 2,
    title: "Standard",
    price: 79000,
    list: [
      {
        icon: "material-symbols-light:check",
        label: (
          <span>
            <strong>Stream on 2</strong> devices at once
          </span>
        ),
      },
      {
        icon: "material-symbols-light:live-tv-outline",
        label: (
          <span>
            <strong>Full HD</strong> video resolution
          </span>
        ),
      },
      {
        icon: "material-symbols-light:lock-open-outline-sharp",
        label: "Watch on more devices, including TVs",
      },
      {
        icon: "material-symbols-light:download",
        label: (
          <span>
            <strong>30 downloads</strong> to watch on the go
          </span>
        ),
      },
    ],
  },
  {
    value: 3,
    title: "Ultimate",
    price: 119000,
    list: [
      {
        icon: "material-symbols-light:check",
        label: (
          <span>
            <strong>Stream on 4</strong> devices at once
          </span>
        ),
      },
      {
        icon: "material-symbols-light:live-tv-outline",
        label: (
          <span>
            <strong>4K UHD and Dolby Atmos</strong> as available
          </span>
        ),
      },
      {
        icon: "material-symbols-light:lock-open-outline-sharp",
        label: "Watch on more devices, including TVs",
      },
      {
        icon: "material-symbols-light:download",
        label: (
          <span>
            <strong>100 downloads</strong> to watch on the go
          </span>
        ),
      },
    ],
  },
];

export default function Plan() {
  const [choosePlan, setChoosePlan] = React.useState<number | null>(2);

  const handleClickPlan = (
    event: React.MouseEvent<HTMLElement>,
    newPlan: number | null
  ) => {
    if (newPlan !== null) {
      setChoosePlan(newPlan);
    }
  };

  const { onlyMediumScreen, onlyLargeScreen } = useBreakpoints();

  return (
    <LayoutLogin
      title="Choose Your Plan"
      desc="Start by selecting the plan that's right for you"
    >
      <Stack direction="row" justifyContent="center" gap={3}>
        <ToggleButtonGroup
          value={choosePlan}
          exclusive
          onChange={handleClickPlan}
          sx={{
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            ".MuiToggleButton-root.Mui-selected": {
              bgcolor: alpha(red[600], 0.3),
              transition: "all 300ms ease-in-out",

              "&:hover": {
                bgcolor: alpha(red[600], 0.5),
              },
            },
          }}
        >
          {DataPlan.map((item, idx) => (
            <ToggleButton
              key={idx}
              value={item.value}
              component="div"
              sx={{
                position: "relative",
                p: 3,
                width: onlyMediumScreen
                  ? "75%"
                  : onlyLargeScreen
                  ? "calc(50% - 16px)"
                  : 360,
                boxShadow: "0 8px 32px 0 rgba(221, 0, 0, 0.1)",
                borderRadius: "12px !important",
                border: "1px solid rgba( 255, 255, 255, 0.1) !important",
              }}
            >
              {item.value === choosePlan ? (
                <motion.span
                  layoutId="selected"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    bgcolor={red[600]}
                    borderRadius="8px 12px 0 8px"
                    gap={1}
                    // px={1.5}
                    // py={0.5}
                    p={1}
                  >
                    {/* <Typography
                      fontSize="0.9rem"
                      color="white"
                      textTransform="none"
                    >
                      Selected
                    </Typography> */}
                    <Iconify
                      name="line-md:circle-filled-to-confirm-circle-filled-transition"
                      color="white"
                      size={24}
                    />
                  </Stack>
                </motion.span>
              ) : null}
              <Box
              // width={onlyLargeScreen ? "100%" : 360}
              // px={4}
              // py={5}
              // p={3}
              // boxShadow="0 8px 32px 0 rgba(221, 0, 0, 0.1)"
              // borderRadius={3}
              // border="1px solid rgba( 255, 255, 255, 0.1)"
              // bgcolor="rgba(255, 255, 255, 0.1)"
              >
                <Stack gap={3}>
                  <Typography
                    color="white"
                    fontSize="1.8rem"
                    fontWeight={600}
                    textTransform="none"
                    textAlign="center"
                    lineHeight={1}
                  >
                    {item.title}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography
                      color="white"
                      fontSize="1rem"
                      textTransform="none"
                    >
                      Rp
                    </Typography>
                    <Typography
                      color="white"
                      fontSize="2.5rem"
                      fontWeight={600}
                      lineHeight={1}
                    >
                      {item.price.toLocaleString("id-ID")}
                    </Typography>
                    <Typography
                      color="white"
                      fontSize="1rem"
                      textTransform="none"
                    >
                      /month
                    </Typography>
                  </Stack>
                  <Box textAlign="center">
                    <Stack
                      display="inline-flex"
                      justifyContent="center"
                      gap={1}
                    >
                      {item.list.map((listItem, idx) => (
                        <Fragment key={idx}>
                          <Stack
                            display="inline-flex"
                            gap={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Iconify
                              name={listItem.icon}
                              color="white"
                              size={20}
                            />
                            <Typography
                              color="white"
                              fontSize="0.8rem"
                              textTransform="none"
                              component="span"
                            >
                              {listItem.label}
                            </Typography>
                          </Stack>
                        </Fragment>
                      ))}
                    </Stack>
                  </Box>
                  <Box textAlign="center">
                    <Button
                      LinkComponent={Link}
                      href="/bgv/account/billing"
                      disabled={item.value !== choosePlan}
                      variant="contained"
                      color="error"
                      sx={{
                        width: "auto",
                        cursor:
                          item.value === choosePlan ? "pointer" : "default",
                        color:
                          item.value !== choosePlan
                            ? `${grey[700]} !important`
                            : "white !important",
                      }}
                    >
                      Select plan
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
      <Stack
        display="inline-flex"
        direction="row"
        gap={2}
        justifyContent="center"
      >
        <Button
          startIcon={<Iconify name="line-md:arrow-small-left" />}
          LinkComponent={Link}
          href="/bgv"
          variant="contained"
          sx={{
            width: "auto",
            minWidth: 150,
            color: "white !important",
            bgcolor: "rgba( 255, 255, 255, 0.1)",
            border: "1px solid rgba( 255, 255, 255, 0.1)",
            transition: "all 500ms ease-in-out",

            "&:hover": {
              bgcolor: "rgba( 255, 255, 255, 0.2)",
            },
          }}
        >
          Back to Home
        </Button>
      </Stack>
    </LayoutLogin>
  );
}
