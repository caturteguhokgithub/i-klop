import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import React from "react";
import { Alert } from "@mui/material";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

export default function SnackbarAlert({
  handleSnackOpen,
  handleSnackClose,
  isDelete,
}: {
  isDelete?: boolean;
  handleSnackOpen?: boolean;
  handleSnackClose?: () => void;
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={handleSnackOpen}
      onClose={handleSnackClose}
      TransitionComponent={SlideTransition}
      message="Data Berhasil Disimpan"
      autoHideDuration={4000}
    >
      {isDelete ? (
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Data berhasil dihapus
        </Alert>
      ) : (
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Data berhasil disimpan
        </Alert>
      )}
    </Snackbar>
  );
}
