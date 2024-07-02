import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import SelectDate from "./selectDate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Dayjs } from "dayjs";
import "./modal.css";
import EventList from "./eventsList";
import { ApiService } from "../data/api";
import LoadingGif from "./loadingGif";
import Swal from "sweetalert2";

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);
  const [listShown, setlistShown] = React.useState(false);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const openList = () => {
    setlistShown(true);
  };

  const closeList = () => {
    setlistShown(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchEvents = async () => {
    const startDateInMilliseconds = startDate ? startDate.valueOf() : null;
    const endDateInMilliseconds = endDate ? endDate.valueOf() : null;
    if (startDateInMilliseconds !== null && endDateInMilliseconds !== null) {
      if (startDateInMilliseconds > endDateInMilliseconds) {
        Swal.fire({
          icon: "error",
          text: "end date must be after start date",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: "sweetalert-z-index",
          },
        });
      } else {
        try {
          setLoading(true);
          const response = await ApiService.Events.getEventsBetweenDates(
            startDateInMilliseconds,
            endDateInMilliseconds
          );
          setLoading(false);

          if (response.data.length === 0) {
            Swal.fire({
              icon: "info",
              text: "no events were found between these dates",
              showConfirmButton: false,
              timer: 2000,
              customClass: {
                container: "sweetalert-z-index",
              },
            });
          } else {
            setEvents(response.data);
            setOpen(false);
            openList();
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "failed to find events",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              container: "sweetalert-z-index",
            },
          });
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "please fill in all fields",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: "sweetalert-z-index",
        },
      });
    }
  };

  React.useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <React.Fragment>
      <LoadingGif loading={loading} />
      <EventList
        open={listShown}
        startDate={startDate}
        endDate={endDate}
        closeList={closeList}
      />
      <Button variant="outlined" onClick={handleClickOpen}>
        התחל בחיפוש
      </Button>
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
          select date range
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
            >
              <Grid item xs={9}>
                <Typography gutterBottom>select start date</Typography>
                <SelectDate
                  text="start date"
                  selectedDate={startDate}
                  setSelectedDate={setStartDate}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography gutterBottom>select end date</Typography>
                <SelectDate
                  text="end date"
                  selectedDate={endDate}
                  setSelectedDate={setEndDate}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions
          className="dialog-actions"
          sx={{ justifyContent: "center" }}
        >
          <Button onClick={searchEvents}>search events</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
