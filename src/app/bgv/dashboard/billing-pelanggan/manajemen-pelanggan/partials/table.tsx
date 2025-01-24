import React from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { Icon } from "@iconify/react";
import DialogDelete from "@/components/Dialog/delete";
import DialogComponent from "@/components/Dialog/dialog";
import FormDevice from "./form";
import SnackbarAlert from "@/components/Snackbar/snack";
import { emailRandom, nameRandom } from "@/dummy/dummy";
import useBreakpoints from "@/themes/breakpoints";

interface DataType {
  key?: number;
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
}
const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export default function TableCustomer() {
  const [dataDevice, setDataDevice] = React.useState<DataType[]>([]);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
  const [modalOpenView, setModalOpenView] = React.useState(false);
  const [snackSuccess, setSnackSuccess] = React.useState(false);
  const [snackDelete, setSnackDelete] = React.useState(false);

  React.useEffect(() => {
    const initialData = Array.from({ length: 123 }).map((_, i) => ({
      key: i + 1,
      name: `${nameRandom[Math.floor(Math.random() * nameRandom.length)]}`,
      email: `${emailRandom[Math.floor(Math.random() * emailRandom.length)]}`,
      phone: `+62 ${Math.floor(
        Math.random() * (999 - 100 + 1) + 100
      )} ${Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)} ${Math.floor(
        Math.random() * (9999 - 1000 + 1) + 1000
      )}`,
      createdAt: "2023-12-12 12:00:00",
    }));
    setDataDevice(initialData);
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
      sorter: (a: DataType, b: DataType) => (a.key ?? 0) - (b.key ?? 0),
      width: 90,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: DataType, b: DataType) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,
      sorter: (a: DataType, b: DataType) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateA - dateB;
      },
    },
    {
      title: "Action",
      key: "operation",
      width: 150,
      align: "center",
      render: () => (
        <Stack direction="row" justifyContent="center" gap={0.5}>
          <Box>
            <Tooltip title="View" placement="top">
              <IconButton
                onClick={() => setModalOpenView(true)}
                sx={{
                  border: "1px solid",
                  borderColor: green[600],
                  borderRadius: 2,
                  bgcolor: green[50],
                }}
              >
                <Icon icon="mdi:eye" height={14} color={green[600]} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Edit" placement="top">
              <IconButton
                onClick={() => setModalOpenEdit(true)}
                sx={{
                  border: "1px solid",
                  borderColor: blue[600],
                  borderRadius: 2,
                  bgcolor: blue[50],
                }}
              >
                <Icon icon="mdi:pencil" height={14} color={blue[600]} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Delete" placement="top">
              <IconButton
                onClick={() => setModalDelete(true)}
                sx={{
                  border: "1px solid",
                  borderColor: red[600],
                  borderRadius: 2,
                  bgcolor: red[50],
                }}
              >
                <Icon icon="mdi:delete" height={14} color={red[600]} />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      ),
    },
  ];

  const { onlyMediumScreen } = useBreakpoints();

  return (
    <>
      <Box
        sx={{
          ".ant-table-pagination": {
            px: 2,
          },
        }}
      >
        <Table<DataType>
          size="small"
          columns={columns}
          dataSource={dataDevice}
          showSorterTooltip={{ target: "sorter-icon" }}
          onChange={onChange}
          scroll={{
            x: onlyMediumScreen ? 1400 : "auto",
            // y: onlyMediumScreen ? "80vh" : "auto",
          }}
        />
      </Box>
      <DialogDelete
        title="Hapus Data"
        handleOpenModal={modalDelete}
        handleCloseModal={() => setModalDelete(false)}
        handleDelete={() => {
          setModalDelete(false);
          setSnackDelete(true);
        }}
      />
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenEdit}
        dialogClose={() => setModalOpenEdit(false)}
        title="Ubah Pelanggan"
        labelCancel="Batal"
        labelSubmit="Simpan"
        handleModalCancel={() => setModalOpenEdit(false)}
        handleModalSubmit={() => {
          setModalOpenEdit(false);
          setSnackSuccess(true);
        }}
      >
        <FormDevice mode="edit" />
      </DialogComponent>
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenView}
        dialogClose={() => setModalOpenView(false)}
        title="Detail Pelanggan"
      >
        <FormDevice mode="view" />
      </DialogComponent>
      <SnackbarAlert
        handleSnackOpen={snackSuccess}
        handleSnackClose={() => setSnackSuccess(false)}
      />
      <SnackbarAlert
        isDelete
        handleSnackOpen={snackDelete}
        handleSnackClose={() => setSnackDelete(false)}
      />
    </>
  );
}
