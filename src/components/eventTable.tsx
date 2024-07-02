import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Event from "../event.entity";

interface props {
  events: Event[];
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Event;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: "event_name", numeric: false, disablePadding: true, label: "Event Name" },
  { id: "event_date", numeric: false, disablePadding: false, label: "Event Date" },
  { id: "event_address", numeric: false, disablePadding: false, label: "Address" },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            style={{ width: headCell.id === "event_name" ? "40%" : "30%" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


function EnhancedTableToolbar() {

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      
      }}
    >
      {
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      }
    </Toolbar>
  );
}

export default function EnhancedTable({ events }: props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const visibleRows = React.useMemo(
    () => events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage,events]
  );

  return (
    <Box sx={{ width: "100%", justifyContent: "center" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ width: "100%" }}
            aria-labelledby="tableTitle"
            size={ "medium"}
          >
            <EnhancedTableHead />
            <TableBody>
              {visibleRows.map((event) => {

                return (
                  <TableRow key={event.id}>
                    <TableCell align="center" style={{ width: "40%" }}>
                      {event.event_name}
                    </TableCell>
                    <TableCell align="center" style={{ width: "30%" }}>
                      {event.event_date}
                    </TableCell>
                    <TableCell align="center" style={{ width: "30%" }}>
                      {event.event_address}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
