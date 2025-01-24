import React from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import type { TableColumnsType, TableProps } from "antd";
import { Table, Tag } from "antd";
import { Icon } from "@iconify/react";
import DialogDelete from "@/components/Dialog/delete";
import DialogComponent from "@/components/Dialog/dialog";
import FormDevice from "./form";
import SnackbarAlert from "@/components/Snackbar/snack";
import { deviceStatus, deviceType } from "@/dummy/dummy";
import useBreakpoints from "@/themes/breakpoints";

interface DataType {
  key?: React.Key;
  name: string;
  type: string;
  ipAddress: string;
  status: string;
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

const TableDevice: React.FC = () => {
  const [dataDevice, setDataDevice] = React.useState<DataType[]>([]);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
  const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
  const [modalOpenView, setModalOpenView] = React.useState(false);
  const [snackSuccess, setSnackSuccess] = React.useState(false);
  const [snackDelete, setSnackDelete] = React.useState(false);

  React.useEffect(() => {
    const initialData = Array.from({ length: 123 }).map((_, i) => ({
      key: (i + 1).toString(),
      name: `Device ${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`,
      type: `${deviceType[Math.floor(Math.random() * deviceType.length)]}`,
      ipAddress: `192.168.${Math.floor(
        Math.random() * (99 - 10 + 1) + 10
      )}.${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`,
      status: `${
        deviceStatus[Math.floor(Math.random() * deviceStatus.length)]
      }`,
      createdAt: "2023-12-12 12:00:00",
    }));
    setDataDevice(initialData);
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
      sorter: true,
      width: 90,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: true,
    },
    {
      title: "IP Address",
      dataIndex: "ipAddress",
      key: "ipAddress",
      width: 180,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 200,
      sorter: true,
      render: (status: string) => (
        <Tag color={status === "pending" ? "red" : "green"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,
      sorter: (a: any, b: any) => a.createdAt.length - b.createdAt.length,
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
        dialogOpen={modalOpenAdd}
        dialogClose={() => setModalOpenAdd(false)}
        title="Tambah Device"
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
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenEdit}
        dialogClose={() => setModalOpenEdit(false)}
        title="Ubah Device"
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
        title="Detail Device"
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
};

export default TableDevice;
