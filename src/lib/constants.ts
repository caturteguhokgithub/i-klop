"use client";

import { grey } from "@mui/material/colors";
import { Monoton, Poppins } from "next/font/google";

export const cfMonoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const cfPoppins = Poppins({
  weight: ["200", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const sxTfPassword = {
  "input, fieldset": {
    color: "white",
    border: "1px solid rgba( 255, 255, 255, 0.5)",
    borderRadius: 2,

    "&::placeholder": {
      color: grey[400],
      opacity: 1,
    },
  },
  input: {
    border: 0,
  },
  fieldset: {
    backgroundColor: "rgba( 255, 255, 255, 0.1)",
  },
};
