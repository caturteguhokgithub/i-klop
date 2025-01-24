import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import Grid from "@mui/material/Grid2";
import useBreakpoints from "@/themes/breakpoints";

const QcItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Iconify name={icon} />
            <Typography fontSize="1.2rem" fontWeight={600}>
              {label}
            </Typography>
          </Stack>
          <Iconify name="line-md:chevron-right" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function Quicklink() {
  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Grid container spacing={2}>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem
          icon="mdi:cards-playing-diamond-multiple-outline"
          label="Change Plan"
        />
      </Grid>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem icon="mdi:credit-card-outline" label="Manage Payment Method" />
      </Grid>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem icon="mdi:monitor-cellphone" label="Manage Access & Devices" />
      </Grid>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem icon="mdi:lock-outline" label="Update Password" />
      </Grid>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem icon="mdi:account-convert-outline" label="Transfer Profile" />
      </Grid>
      <Grid size={onlyMediumScreen ? 12 : 6}>
        <QcItem icon="mdi:gear-outline" label="Edit Settings" />
      </Grid>
    </Grid>
  );
}
