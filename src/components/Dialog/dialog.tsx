import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  SxProps,
} from "@mui/material";
import iTheme from "@/themes/themes";
import { Icon } from "@iconify/react";

export default function DialogComponent({
  title,
  dialogOpen,
  dialogClose,
  children,
  dialogFooter,
  width,
  tableMode,
  headerAction,
  noDivider,
  closeButton,
  onFocus,
  zIndex,
  maxwidth,
  maxHeight,
  sx,
  handleModalCancel,
  handleModalSubmit,
  labelCancel,
  labelSubmit,
}: {
  title?: React.ReactNode;
  dialogOpen: boolean;
  dialogClose?: () => void;
  children?: React.ReactNode;
  dialogFooter?: React.ReactNode;
  width?: number | string;
  tableMode?: boolean;
  headerAction?: React.ReactNode;
  noDivider?: boolean;
  closeButton?: boolean;
  onFocus?: any;
  zIndex?: number;
  maxwidth?: number | string;
  maxHeight?: number | string;
  sx?: SxProps;
  handleModalCancel?: () => void;
  handleModalSubmit?: () => void;
  labelCancel?: string;
  labelSubmit?: string;
}) {
  return (
    <Dialog
      open={dialogOpen}
      keepMounted
      onClose={dialogClose}
      onFocus={onFocus}
      sx={{
        ...sx,
        zIndex: zIndex,
        ".MuiPaper-root": {
          minWidth: width ? width : 800,
          maxWidth: maxwidth,
          maxHeight: maxHeight,
          [iTheme.breakpoints.down("md")]: {
            minWidth: "90%",
          },
          ".quill": {
            //   height: "calc(100vh - 400px)",
            ".ql-container": {
              //    height: "calc(100% - 44px)",
              minHeight: 320,
            },
          },
        },
      }}
    >
      {title && (
        <DialogTitle
          component="div"
          sx={{
            pb: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            [iTheme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            },
          }}
        >
          {title}
          {headerAction}
        </DialogTitle>
      )}
      {closeButton && (
        <IconButton
          aria-label="close"
          onClick={dialogClose}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Icon icon="line-md:close-small" />
        </IconButton>
      )}
      <DialogContent
        dividers={noDivider}
        sx={{ p: tableMode ? 0 : "16px 24px", position: "relative" }}
      >
        {children}
      </DialogContent>
      {(labelCancel || labelSubmit) && (
        <DialogActions sx={{ p: 2, px: 3 }}>
          {labelCancel && (
            <Button onClick={handleModalCancel}>{labelCancel}</Button>
          )}
          {labelSubmit && (
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={handleModalSubmit}
            >
              {labelSubmit}
            </Button>
          )}
        </DialogActions>
      )}
      {dialogFooter}
    </Dialog>
  );
}
