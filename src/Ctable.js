import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";

const columns = [
  { id: "State", label: "상태", minWidth: 50, align: "center" },
  { id: "Date", label: "요청일", minWidth: 80, align: "center" },
  {
    id: "Mdivision",
    label: "대분류",
    minWidth: 50,
    align: "center",
  },
  {
    id: "Sdivision",
    label: "소분류",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Item",
    label: "품목",
    minWidth: 80,
    align: "center",
  },
  {
    id: "Place",
    label: "장소",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Site",
    label: "요청사이트",
    minWidth: 130,
    align: "center",
  },
  {
    id: "Manager",
    label: "담당자",
    minWidth: 60,
    align: "center",
  },
];

function tableData(
  State,
  Date,
  Mdivision,
  Sdivision,
  Item,
  Place,
  Site,
  Manager
) {
  const item = Mdivision / Sdivision;
  return { State, Date, Mdivision, Sdivision, Item, Place, Site, Manager };
}

const rows = [
  tableData(
    "확인",
    "2023-01-24",
    "전산",
    "전상 장비 이용 문의",
    "고장 신청",
    "-",
    "뚝섬SP",
    "담당자"
  ),
  tableData(
    "처리중",
    "2023-01-24",
    "전산",
    "전상 장비 이용 문의",
    "고장 신청",
    "-",
    "뚝섬SP",
    "담당자"
  ),
  tableData(
    "완료",
    "2023-01-24",
    "전산",
    "전상 장비 이용 문의",
    "고장 신청",
    "-",
    "뚝섬SP",
    "담당자"
  ),
  tableData(
    "완료",
    "2023-01-24",
    "전산",
    "전상 장비 이용 문의",
    "고장 신청",
    "-",
    "뚝섬SP",
    "담당자"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box borderTop={3} width={"100%"}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ bottom: "bottom" }}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
