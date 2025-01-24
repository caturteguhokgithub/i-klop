"use client";

import React, { Fragment } from "react";
import DashboardLayout from "@/components/LayoutDashboard/layout";
import { Button, Card } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import DialogComponent from "@/components/Dialog/dialog";
import SnackbarSuccess from "@/components/Snackbar/snack";
import FormDevice from "./partials/form";
import BreadcrumbPage from "@/components/Breadcrumb/breadcrumb";
import TableCustomer from "./partials/table";

export default function BillingManagementPage() {
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
        title="Manajemen Pelanggan"
        breadcrumbs={<BreadcrumbPage breadcrumbData={breadcrumbData} />}
        actionButton={
          <Button
            startIcon={<Icon icon="line-md:plus" />}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setModalOpenAdd(true)}
          >
            Tambah Pelanggan
          </Button>
        }
      >
        <Card variant="outlined">
          <TableCustomer />
        </Card>
      </DashboardLayout>
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenAdd}
        dialogClose={() => setModalOpenAdd(false)}
        title="Tambah Pelanggan"
        labelCancel="Batal"
        labelSubmit="Simpan"
        handleModalCancel={() => setModalOpenAdd(false)}
        handleModalSubmit={() => {
          setModalOpenAdd(false);
          setSnackSuccess(true);
        }}
      >
        <FormDevice mode="add" />
      </DialogComponent>
      <SnackbarSuccess
        handleSnackOpen={snackSuccess}
        handleSnackClose={() => setSnackSuccess(false)}
      />
    </Fragment>
  );
}
