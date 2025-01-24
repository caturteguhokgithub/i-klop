"use client";

import BreadcrumbPage from "@/components/Breadcrumb/breadcrumb";
import DialogComponent from "@/components/Dialog/dialog";
// import EmptyState from "@/components/EmptyState/empty";
import SnackbarSuccess from "@/components/Snackbar/snack";
import Iconify from "@/components/Icon/iconify";
import DashboardLayout from "@/components/LayoutDashboard/layout";
import { Button, Card } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import FormBilling from "./partials/form";
import TableBilling from "./partials/table";

export default function BillingPage() {
  const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
  const [snackSuccess, setSnackSuccess] = React.useState(false);

  const breadcrumbData = [
    { label: "Billing & Pelanggan", href: "/" },
    { label: "Manajemen Pelanggan", href: "/about" },
    { label: "List" },
  ];

  return (
    <Fragment>
      <DashboardLayout
        title="Penagihan"
        breadcrumbs={<BreadcrumbPage breadcrumbData={breadcrumbData} />}
        actionButton={
          <Button
            startIcon={<Iconify name="line-md:plus" />}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setModalOpenAdd(true)}
          >
            Tambah Penagihan
          </Button>
        }
      >
        <Card variant="outlined">
          <TableBilling />
        </Card>
      </DashboardLayout>
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenAdd}
        dialogClose={() => setModalOpenAdd(false)}
        title="Tambah Penagihan"
        labelCancel="Batal"
        labelSubmit="Simpan"
        handleModalCancel={() => setModalOpenAdd(false)}
        handleModalSubmit={() => {
          setModalOpenAdd(false);
          setSnackSuccess(true);
        }}
      >
        <FormBilling mode="add" />
      </DialogComponent>
      <SnackbarSuccess
        handleSnackOpen={snackSuccess}
        handleSnackClose={() => setSnackSuccess(false)}
      />
    </Fragment>
  );
}
