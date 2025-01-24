import React, { Fragment } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface BreadcrumbData {
  label: string;
  href?: string;
}

interface BreadcrumbPageProps {
  breadcrumbData: BreadcrumbData[];
}

const BreadcrumbPage: React.FC<BreadcrumbPageProps> = ({ breadcrumbData }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        color: grey[200],
        lineHeight: 1,
        ".MuiBreadcrumbs-separator": {
          mx: 0.5,
          fontSize: 14,
        },
      }}
    >
      {breadcrumbData.map((item, index) => {
        const isLastItem = index === breadcrumbData.length - 1;

        return (
          <Fragment key={index}>
            {isLastItem ? (
              <Link key={index} underline="none">
                <Typography
                  fontSize={13}
                  fontWeight={600}
                  color={grey[200]}
                  sx={{ cursor: "default" }}
                  lineHeight={1.5}
                >
                  {item.label}
                </Typography>
              </Link>
            ) : (
              <Link underline="hover" href={item.href} key={index}>
                <Typography fontSize={13} color={grey[100]} lineHeight={1}>
                  {item.label}
                </Typography>
              </Link>
            )}
          </Fragment>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbPage;
