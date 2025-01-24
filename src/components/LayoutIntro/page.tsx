"use client";

import React, { Fragment } from "react";
import { Stack } from "@mui/material";
import IntroHeader from "./partials/header";
import IntroFooter from "./partials/footer";
import useBreakpoints from "@/themes/breakpoints";

export default function LayoutIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const { onlyMediumScreen } = useBreakpoints();

  React.useEffect(() => {
    document.body.classList.add("dark-mode");

    // unmount action
    return () => document.body.classList.remove("dark-mode");
  }, []);

  return (
    <Fragment>
      <IntroHeader />
      <Stack
        px={onlyMediumScreen ? 3 : 10}
        pb={7}
        minHeight="calc(100vh - 198px)"
      >
        {children}
      </Stack>
      <IntroFooter />
    </Fragment>
  );
}
