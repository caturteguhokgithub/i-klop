import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FieldLabelInfo from "@/components/FieldLabelInfo/field";
import Grid from "@mui/material/Grid2";
import { green, grey, red } from "@mui/material/colors";

export default function FormDevice({ mode }: { mode?: string }) {
  const [type, setType] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChangeToggle = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => {
    setStatus(newStatus);
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Name" />
            {mode == "add" ? (
              <TextField
                placeholder="Input name"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="Device 839"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>Device 839</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Type" />
            {mode === "add" || mode === "edit" ? (
              <Select
                displayEmpty
                size="small"
                value={mode === "add" ? type : "Firewall"}
                onChange={handleChangeSelect}
                renderValue={(value: any) => {
                  if (!value) {
                    return (
                      <Typography color={grey[500]}>Choose type</Typography>
                    );
                  }
                  return value;
                }}
              >
                <MenuItem selected disabled>
                  Choose type
                </MenuItem>
                <MenuItem value="Firewall">Firewall</MenuItem>
                <MenuItem value="Switch">Switch</MenuItem>
                <MenuItem value="Router">Router</MenuItem>
                <MenuItem value="Access Point">Access Point</MenuItem>
              </Select>
            ) : (
              <Typography>Access Point</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="IP Address" />
            {mode === "add" ? (
              <TextField
                placeholder="Input IP Address"
                variant="outlined"
                size="small"
                slotProps={{
                  inputLabel: { shrink: true },
                  htmlInput: {
                    inputMode: "numeric",
                    //   pattern: "^([0-9]{1,3}.){3}[0-9]{1,3}$",
                  },
                }}
              />
            ) : mode === "edit" ? (
              <TextField
                value="192.168.1.225"
                variant="outlined"
                size="small"
                slotProps={{
                  inputLabel: { shrink: true },
                  htmlInput: {
                    inputMode: "numeric",
                    //   pattern: "^([0-9]{1,3}.){3}[0-9]{1,3}$",
                  },
                }}
              />
            ) : (
              <Typography>192.168.1.225</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Status" />
            <ToggleButtonGroup
              color="primary"
              value={status}
              exclusive
              onChange={handleChangeToggle}
            >
              <ToggleButton
                value="running"
                sx={{
                  width: "50%",
                  color: green[600],
                  "&.Mui-selected": {
                    bgcolor: green[600],
                    color: "white",
                  },
                }}
              >
                Running
              </ToggleButton>
              <ToggleButton
                value="pending"
                sx={{
                  width: "50%",
                  color: red[600],
                  "&.Mui-selected": {
                    bgcolor: red[600],
                    color: "white",
                  },
                }}
              >
                Pending
              </ToggleButton>
            </ToggleButtonGroup>
          </FormControl>
        </Grid>
        {mode === "view" && (
          <Grid size={12} sx={{ pb: 2 }}>
            <FormControl fullWidth>
              <FieldLabelInfo title="Created Date" />
              <Typography>21 Jun 2024 12:22</Typography>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
