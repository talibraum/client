import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
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
          events between
        </DialogTitle>

        <DialogContent
          className="dialog-content"
          sx={{ justifyContent: "center" }}
        >
          <Box sx={{ width: "100%", justifyContent: "center" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid >
                <Typography fontSize={20} gutterBottom>
                  {startDate ? startDate.format("YYYY-MM-DD") : "Start date not set"}
                </Typography>
              </Grid>
              <Grid >
                <ArrowForwardRoundedIcon/>
              </Grid>
              <Grid >
                <Typography  fontSize={20} gutterBottom>
                  {endDate ? endDate.format("YYYY-MM-DD") : "End date not set"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
