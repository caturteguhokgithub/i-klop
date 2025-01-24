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

export default function FormPayment({ mode }: { mode?: string }) {
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
            <FieldLabelInfo title="Billing ID" />
            {mode == "add" ? (
              <TextField
                placeholder="Input billing ID"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="20240104-CC-226"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>20240104-CC-226</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Payment Date" />
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
            <FieldLabelInfo title="Method" />
            {mode == "add" ? (
              <TextField
                placeholder="Input method"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="Bank BCA (DC)"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>Bank BCA (DC)</Typography>
            )}
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
