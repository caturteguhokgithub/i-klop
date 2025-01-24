import React, { Fragment } from "react";
import {
  Avatar,
  IconButton,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import { grey } from "@mui/material/colors";
import { AnimatePresence, motion } from "motion/react";
import useBreakpoints from "@/themes/breakpoints";
import Link from "next/link";

export const ToggleBtnItem = ({
  title,
  desc,
  hasRemove,
  icon,
  menu,
  active,
  value,
  bgcolor,
  href = "",
}: {
  title: string;
  desc?: string;
  hasRemove?: boolean;
  icon?: string;
  menu?: string;
  active?: boolean;
  value?: string | any;
  bgcolor?: string;
  href?: string;
}) => {
  const [itemRemove, setItemRemove] = React.useState(true);
  const [itemActive, setItemActive] = React.useState(false);

  const handleToggle = () => {
    setItemActive(!itemActive);
  };

  const handleRemoveItem = () => {
    setItemRemove(false);
  };

  const handleClick = () => {
    if (menu === "input") {
      handleToggle();
    }
  };

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <AnimatePresence>
      {itemRemove && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            x: 500,
            transition: {
              duration: 0.3,
            },
          }}
          style={{ width: "100%" }}
        >
          <ToggleButton
            component="div"
            value={value}
            sx={{
              width: "100%",
              p: 0,
              textTransform: "none",
              bgcolor: bgcolor,
              transition: "all 300ms ease",

              "&:hover": {
                bgcolor: `${bgcolor}BF`,
              },
            }}
          >
            <Link href={href} style={{ width: "100%", display: "block" }}>
              <Stack
                component="span"
                width="100%"
                px={onlyMediumScreen ? 2 : 4}
                py={onlyMediumScreen ? 2 : 3}
                direction="row"
                alignItems="center"
                gap={2}
                onClick={handleClick}
              >
                {menu == "account" ? (
                  <Avatar sx={{ width: 24, height: 24, bgcolor: "white" }}>
                    <Typography fontSize="0.7rem">{icon}</Typography>
                  </Avatar>
                ) : (
                  <Fragment>
                    {icon !== "" && (
                      <Iconify
                        name={icon || "line-md:email"}
                        color="white"
                        size={onlyMediumScreen ? 24 : 32}
                      />
                    )}
                  </Fragment>
                )}
                <Stack
                  color="white"
                  maxWidth={onlyMediumScreen ? 200 : 300}
                  flexGrow={1}
                  component="span"
                >
                  <Typography component="h3" fontSize="1rem" fontWeight={600}>
                    {title}
                  </Typography>
                  <Typography
                    component="p"
                    fontSize="0.8rem"
                    whiteSpace="nowrap"
                    maxWidth={200}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    color={grey[300]}
                  >
                    {desc}
                  </Typography>
                </Stack>
                {hasRemove && (
                  <IconButton onClick={handleRemoveItem}>
                    <Iconify name="line-md:close" color="white" size={16} />
                  </IconButton>
                )}
                {menu == "input" && active && (
                  <Iconify
                    name="line-md:circle-filled-to-confirm-circle-filled-transition"
                    color="white"
                    size={28}
                  />
                )}
              </Stack>
            </Link>
          </ToggleButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
