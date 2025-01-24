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
import TablePayment from "./partials/table";
import FormPayment from "./partials/form";

export default function PaymentPage() {
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
        title="Pembayaran"
        breadcrumbs={<BreadcrumbPage breadcrumbData={breadcrumbData} />}
        actionButton={
          <Button
            startIcon={<Iconify name="line-md:plus" />}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setModalOpenAdd(true)}
          >
            Tambah Pembayaran
          </Button>
        }
      >
        <Card variant="outlined">
          <TablePayment />
        </Card>
      </DashboardLayout>
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenAdd}
        dialogClose={() => setModalOpenAdd(false)}
        title="Tambah Pembayaran"
        labelCancel="Batal"
        labelSubmit="Simpan"
        handleModalCancel={() => setModalOpenAdd(false)}
        handleModalSubmit={() => {
          setModalOpenAdd(false);
          setSnackSuccess(true);
        }}
      >
        <FormPayment mode="add" />
      </DialogComponent>
      <SnackbarSuccess
        handleSnackOpen={snackSuccess}
        handleSnackClose={() => setSnackSuccess(false)}
      />
    </Fragment>
  );
}
