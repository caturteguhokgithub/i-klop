import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import iTheme from "@/themes/themes";
import "@/lib/cssanimations/cssanimation.min.css";
import "@/themes/styles.scss";
import React from "react";
import { cfPoppins } from "@/lib/constants";

export const metadata: Metadata = {
  title: "iKLOP",
  description: "iKLOP",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "https://res.cloudinary.com/caturteguh/image/upload/v1740639604/iklop/favicon_l5fobw.png",
        href: "https://res.cloudinary.com/caturteguh/image/upload/v1740639604/iklop/favicon_l5fobw.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "https://res.cloudinary.com/caturteguh/image/upload/v1740639604/iklop/favicon_l5fobw.png",
        href: "https://res.cloudinary.com/caturteguh/image/upload/v1740639604/iklop/favicon_l5fobw.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cfPoppins.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={iTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
