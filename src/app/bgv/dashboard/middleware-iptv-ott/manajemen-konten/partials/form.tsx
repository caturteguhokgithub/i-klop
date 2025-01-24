import React from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import FieldLabelInfo from "@/components/FieldLabelInfo/field";
import Grid from "@mui/material/Grid2";
import { grey } from "@mui/material/colors";

export default function FormContent({ mode }: { mode?: string }) {
  const [type, setType] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Title" />
            {mode == "add" ? (
              <TextField
                placeholder="Input title"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : mode == "edit" ? (
              <TextField
                value="Francesca Todd"
                variant="outlined"
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            ) : (
              <Typography>Francesca Todd</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Genre" />
            {mode === "add" || mode === "edit" ? (
              <Select
                displayEmpty
                size="small"
                value={mode === "add" ? type : "Drama"}
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
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Documentary">Documentary</MenuItem>
                <MenuItem value="Western">Western</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
              </Select>
            ) : (
              <Typography>Thriller</Typography>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Duration" />
            {mode === "add" ? (
              <TextField
                placeholder="Input duration"
                variant="outlined"
                size="small"
                type="number"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">min</InputAdornment>
                    ),
                  },
                }}
              />
            ) : mode === "edit" ? (
              <TextField
                value="68"
                variant="outlined"
                size="small"
                type="number"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">min</InputAdornment>
                    ),
                  },
                }}
              />
            ) : (
              <Typography>68 min</Typography>
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
