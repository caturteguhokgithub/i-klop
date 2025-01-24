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
import React from "react";
import Iconify from "@/components/Icon/iconify";
import LayoutLogin from "@/components/LayoutLogin/page";
import { grey, red } from "@mui/material/colors";
import Link from "next/link";
import useBreakpoints from "@/themes/breakpoints";
import Image from "next/image";

interface IBilling {
  group: number;
  value: number;
  title: string;
  icons: { id: number; icon: string; name?: string }[];
}

const DataBilling: IBilling[] = [
  {
    group: 1,
    value: 1,
    title: "E-Wallet",
    icons: [
      {
        id: 1,
        icon: "shopee",
        name: "Shopeepay",
      },
      {
        id: 2,
        icon: "dana",
        name: "Dana",
      },
      {
        id: 3,
        icon: "ovo",
        name: "Ovo",
      },
      {
        id: 4,
        icon: "linkaja",
        name: "Linkaja",
      },
      {
        id: 5,
        icon: "doku",
        name: "Doku",
      },
    ],
  },
  {
    group: 2,
    value: 2,
    title: "Virtual Account",
    icons: [
      {
        id: 1,
        icon: "bca",
        name: "Bank BCA",
      },
      {
        id: 2,
        icon: "bri",
        name: "Bank BRI",
      },
      {
        id: 3,
        icon: "bni",
        name: "Bank BNI",
      },
      {
        id: 4,
        icon: "mandiri",
        name: "Bank Mandiri",
      },
      {
        id: 5,
        icon: "cimb",
        name: "Bank CIMB Niaga",
      },
    ],
  },
  {
    group: 3,
    value: 3,
    title: "Credit/Debit",
    icons: [
      {
        id: 1,
        icon: "visa",
        name: "Visa",
      },
      {
        id: 2,
        icon: "mc",
        name: "MasterCard",
      },
      {
        id: 3,
        icon: "amex",
        name: "American Express",
      },
      {
        id: 4,
        icon: "jcb",
        name: "JCB",
      },
      {
        id: 5,
        icon: "discover",
        name: "Discover",
      },
    ],
  },
];

export default function Billing() {
  const [selectedItem, setSelectedItem] = React.useState<{
    value: number;
    id: number;
  } | null>(null);

  const handleClickPlan = (
    event: React.MouseEvent<HTMLElement>,
    newItem: number | null
  ) => {
    if (newItem !== null) {
      const newItemStr = newItem.toString();
      const [group, id] = newItemStr.split("-");
      setSelectedItem({ value: parseInt(group), id: parseInt(id) });
    }
  };

  const { onlySmallScreen, onlyMediumScreen } = useBreakpoints();

  return (
    <LayoutLogin
      title="Choose How to Pay"
      desc="Manage your subscription anytime"
    >
      <Stack gap={4} px={onlyMediumScreen ? 2.5 : "unset"}>
        <Stack gap={1}>
          <Typography fontSize="1rem" color={grey[400]} textTransform="none">
            Plan you have chosen
          </Typography>
          <Box
            p={3}
            width={onlyMediumScreen ? "100%" : 640}
            boxShadow="0 8px 32px 0 rgba(221, 0, 0, 0.1)"
            borderRadius={3}
            border="1px solid rgba( 255, 255, 255, 0.1)"
            bgcolor={alpha(red[600], 0.2)}
            position="relative"
          >
            <Stack gap={3}>
              <Stack
                gap={3}
                direction={onlyMediumScreen ? "column" : "row"}
                justifyContent="space-between"
                alignItems={onlyMediumScreen ? "flex-end" : "center"}
              >
                <Stack gap={1}>
                  <Typography
                    color="white"
                    fontSize="1.8rem"
                    fontWeight={600}
                    textTransform="none"
                    lineHeight={1}
                  >
                    Standard
                  </Typography>
                  <Typography
                    component="p"
                    color={grey[400]}
                    fontSize="0.8rem"
                    textTransform="none"
                    maxWidth={400}
                  >
                    Stream on 2 devices at once, Full HD video resolution, Watch
                    on more devices, including TV's, 30 downloads to watch on
                    the go.
                  </Typography>
                </Stack>
                <Stack alignItems="flex-end" gap={0.5}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={0.5}
                  >
                    <Typography
                      color={grey[400]}
                      fontSize="0.8rem"
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
                      79.000
                    </Typography>
                  </Stack>
                  <Typography
                    color={grey[400]}
                    fontSize="0.8rem"
                    textTransform="none"
                    lineHeight={1}
                  >
                    Active period 30 day
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack
          gap={3}
          maxHeight={
            onlySmallScreen ? "calc(100vh - 660px)" : "calc(100vh - 560px)"
          }
          overflow="auto"
        >
          {DataBilling.map((item, idx) => (
            <Stack gap={1} key={idx}>
              <Typography
                color={grey[400]}
                fontSize="1rem"
                textTransform="none"
              >
                Payment with {item.title}
              </Typography>
              <ToggleButtonGroup
                value={`${selectedItem?.value}-${selectedItem?.id}`}
                exclusive
                onChange={handleClickPlan}
                sx={{
                  gap: 1,
                  flexDirection: "column",
                  ".MuiToggleButton-root.Mui-selected": {
                    bgcolor: alpha(red[600], 0.4),
                    transition: "all 300ms ease-in-out",

                    "&:hover": {
                      bgcolor: alpha(red[600], 0.5),
                    },
                  },
                }}
              >
                {item.icons.map((icon, id) => {
                  const imageIcon = typeof icon === "string" ? icon : icon.icon;
                  const value = `${item.value}-${icon.id}`;

                  return (
                    <ToggleButton
                      key={id}
                      value={value}
                      component="div"
                      selected={
                        selectedItem?.value === item.value &&
                        selectedItem.id === icon.id
                      }
                      sx={{
                        ml: "0 !important",
                        px: 3,
                        py: 2,
                        justifyContent: "flex-start",
                        position: "relative",
                        borderRadius: "12px !important",
                        border:
                          "1px solid rgba( 255, 255, 255, 0.1) !important",
                      }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: 16,
                          transform: "translateY(-50%)",
                          lineHeight: 1,
                        }}
                      >
                        {selectedItem?.value === item.value &&
                        selectedItem.id === icon.id ? (
                          <Iconify
                            name="line-md:circle-filled-to-confirm-circle-filled-transition"
                            color="white"
                            size={32}
                          />
                        ) : (
                          <Iconify
                            name="line-md:chevron-small-right"
                            color="white"
                            size={32}
                          />
                        )}
                      </Box>
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Image
                          alt="VIO"
                          src={`/images/payment/${imageIcon}.png`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "auto",
                            height: "32px",
                          }}
                        />
                        <Typography
                          color="white"
                          fontSize="1rem"
                          textTransform="none"
                          lineHeight={1}
                        >
                          {icon.name}
                        </Typography>
                      </Stack>
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            </Stack>
          ))}
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
            href="/bgv/account/plan"
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
            Select Plan
          </Button>
          <Button
            LinkComponent={Link}
            href="/bgv/account/billing"
            variant="contained"
            color="error"
            sx={{
              width: "auto",
              minWidth: 150,
              color: "white !important",
            }}
          >
            Pay Rp79.000
          </Button>
        </Stack>
      </Stack>
    </LayoutLogin>
  );
}
