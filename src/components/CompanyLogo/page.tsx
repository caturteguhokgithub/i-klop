import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { cfMonoton } from "@/lib/constants";
import Image from "next/image";

export default function CompanyLogo({
  dark,
  size,
  company,
}: {
  dark?: boolean;
  size?: string;
  company?: string;
}) {
  return (
    <Typography
      fontSize={size == "xs" ? "1.5rem" : size == "sm" ? "2rem" : "3rem"}
      letterSpacing="-0.15em"
      lineHeight={1}
      position="relative"
      component="div"
      textTransform="uppercase"
      sx={{
        textShadow: `-4px 0px 6px ${dark ? "black" : "white"}`,
        userSelect: "none",
      }}
    >
      {/* <Box
        component="span"
        color={company == "vio" ? red[100] : blue[100]}
        className={cfMonoton.className}
        position="relative"
        top={2}
      >
        {company == "vio" ? "v" : "b"}
      </Box>
      <Box
        component="span"
        color={company == "vio" ? red[300] : blue[300]}
        className={cfMonoton.className}
        position="relative"
        top={2}
      >
        {company == "vio" ? "i" : "g"}
      </Box>
      <Box
        component="span"
        color={company == "vio" ? red[600] : blue[600]}
        className={cfMonoton.className}
        position="relative"
        top={2}
      >
        {company == "vio" ? "o" : "v"}
      </Box> */}
      {company == "vio" ? (
        <Fragment>
          <Box
            component="span"
            color={company == "vio" ? red[100] : blue[100]}
            className={cfMonoton.className}
            position="relative"
            top={2}
          >
            v
          </Box>
          <Box
            component="span"
            color={company == "vio" ? red[300] : blue[300]}
            className={cfMonoton.className}
            position="relative"
            top={2}
          >
            i
          </Box>
          <Box
            component="span"
            color={company == "vio" ? red[600] : blue[600]}
            className={cfMonoton.className}
            position="relative"
            top={2}
          >
            o
          </Box>
        </Fragment>
      ) : (
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
      )}
    </Typography>
  );
}
