import React from "react";
import {
  Box,
  FormControl,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FieldLabelInfo from "@/components/FieldLabelInfo/field";
import Grid from "@mui/material/Grid2";
import { green, red } from "@mui/material/colors";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";

export default function FormBilling({ mode }: { mode?: string }) {
  const [status, setStatus] = React.useState("");

  const handleChangeToggle = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => {
    setStatus(newStatus);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const dateFormat = "YYYY/MM/DD";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Customer Name" />
            {mode == "add" ? (
              <TextField
                placeholder="Input customer name"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="Kennedy Blankenship"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>Kennedy Blankenship</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Amount" />
            {mode == "add" ? (
              <TextField
                placeholder="Input amount"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="Rp 752.315"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>Rp 752.315</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Due Date" />
            {mode === "add" ? (
              <DatePicker onChange={onChange} />
            ) : mode === "edit" ? (
              <DatePicker
                onChange={onChange}
                defaultValue={dayjs("2024/09/02", dateFormat)}
              />
            ) : (
              <Typography>2024-09-02</Typography>
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
                value="paid"
                sx={{
                  width: "50%",
                  color: green[600],
                  "&.Mui-selected": {
                    bgcolor: green[600],
                    color: "white",
                  },
                }}
              >
                Paid
              </ToggleButton>
              <ToggleButton
                value="unpaid"
                sx={{
                  width: "50%",
                  color: red[600],
                  "&.Mui-selected": {
                    bgcolor: red[600],
                    color: "white",
                  },
                }}
              >
                Unpaid
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
