import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { grey } from "@mui/material/colors";
import Iconify from "@/components/Icon/iconify";
import useBreakpoints from "@/themes/breakpoints";

export default function AccountDevice({
  device,
  deviceName,
  current,
  userIcon,
  username,
  dateTime,
}: {
  device?: string;
  deviceName?: string;
  current?: boolean;
  userIcon?: string;
  username?: string;
  dateTime?: string;
}) {
  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Grid size={onlyMediumScreen ? 12 : 6}>
      <Stack>
        <Card
          variant="outlined"
          sx={{
            p: 2,
          }}
        >
          <CardActions
            sx={{
              p: 0,
              pb: 2,
              mb: 2,
              borderBottom: `1px solid ${grey[300]}`,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              minHeight={30.75}
            >
              <Stack direction="row" gap={1} alignItems="center">
                <Iconify
                  name={
                    device == "tv"
                      ? "mdi:television"
                      : device == "browser"
                      ? "mdi:laptop"
                      : "mdi:cellphone-android"
                  }
                  size={20}
                />
                <Typography fontSize="1rem" fontWeight={600}>
                  {deviceName}
                </Typography>
              </Stack>
              {current ? (
                <Chip
                  size="small"
                  variant="outlined"
                  label="Current Device"
                  color="primary"
                />
              ) : (
                <Button variant="outlined" color="error" size="small">
                  Sign Out
                </Button>
              )}
            </Stack>
          </CardActions>
          <CardContent sx={{ p: "0 !important" }}>
            <Stack gap={1.5}>
              <Stack direction="row" gap={1.5} alignItems="center">
                {username ? (
                  <>
                    <Avatar sx={{ width: 24, height: 24, bgcolor: "red" }}>
                      <Typography fontSize="0.7rem" color="white">
                        {userIcon}
                      </Typography>
                    </Avatar>
                    <Typography fontSize="1rem" color={grey[700]}>
                      {username} (Last watched)
                    </Typography>
                  </>
                ) : (
                  <>
                    <Iconify
                      name="mdi:account-alert-outline"
                      size={24}
                      color={grey[700]}
                    />
                    <Typography fontSize="1rem" color={grey[700]}>
                      No profile to show
                    </Typography>
                  </>
                )}
              </Stack>
              <Stack direction="row" gap={1.5} alignItems="center">
                <Iconify
                  name="mdi:clock-time-eight-outline"
                  size={24}
                  color={grey[700]}
                />
                <Typography fontSize="1rem" color={grey[700]}>
                  {dateTime}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Grid>
  );
}
