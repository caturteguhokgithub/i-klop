import React from "react";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import FieldLabelInfo from "@/components/FieldLabelInfo/field";
import Grid from "@mui/material/Grid2";

export default function FormDevice({ mode }: { mode?: string }) {
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
            <FieldLabelInfo title="Email" />
            {mode == "add" ? (
              <TextField
                placeholder="Input email"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="friedabarnett@retrack.com"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>friedabarnett@retrack.com</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Phone" />
            {mode === "add" ? (
              <TextField
                placeholder="Input phone"
                variant="outlined"
                size="small"
              />
            ) : mode === "edit" ? (
              <TextField
                value="+62 953 5954 9709"
                variant="outlined"
                size="small"
              />
            ) : (
              <Typography>+62 953 5954 9709</Typography>
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
