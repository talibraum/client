import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Dayjs } from "dayjs";
import "./modal.css";


interface propsForEventsList {
  open: boolean;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  closeList: () => void;
}

export default function EventList({
  open,
  startDate,
  endDate,
  closeList,
}: propsForEventsList) {
  const handleClose = () => {
    closeList();
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CloseIcon onClick={handleClose} className="close-button" />

        <DialogTitle
          fontSize={36}
          id="customized-dialog-title"
          className="dialog-title"
        >
          select date mklmlk
        </DialogTitle>

        <DialogContent
          className="dialog-content"
          sx={{ justifyContent: "center" }}
        >
          <Box sx={{ width: "100%", justifyContent: "center" }}>
            <Grid
              container
              maxWidth="sm"
              rowSpacing={2}
              sx={{ width: "100%", justifyContent: "center" }}
            ></Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
