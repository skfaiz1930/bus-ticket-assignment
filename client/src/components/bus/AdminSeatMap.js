import React, { Fragment } from "react";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Badge from "@material-ui/core/Badge";
import UserInfoDialog from "../ticket/UserInfoDialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  userinfo: {
    margin: theme.spacing(3, -1, 2),
    backgroundColor: green[500],
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, -1, 2),
    color: "white",
    backgroundColor: red[500],
  },
}));
const AdminSeatMap = ({
  date,
  bus,
  seats,
  setSeat,
  cancelTickets,
  selectedSeat,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="tableContainer">
        <h1 className="large text-primary m-1 pos">Seat Map</h1>
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seat, seatNumber) => {
                if (seat == 0 && selectedSeat == seatNumber + 1) {
                  return (
                    <td className="selected">
                      <Badge badgeContent={seatNumber + 1} color="secondary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: green[500] }}
                        />
                      </Badge>
                    </td>
                  );
                }
                if (seat === 1)
                  return (
                    <td
                      className="available"
                      onClick={() => {
                        setSeat(seatNumber + 1);
                      }}
                    >
                      <Badge badgeContent={seatNumber + 1} color="primary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: grey[500] }}
                        />
                      </Badge>
                    </td>
                  );
                else {
                  if (selectedSeat == seatNumber + 1) {
                    return (
                      <td className="selected">
                        <Badge badgeContent={seatNumber + 1} color="primary">
                          <EventSeatIcon
                            style={{ fontSize: 50, color: green[500] }}
                          />
                        </Badge>
                      </td>
                    );
                  }
                  return (
                    <td
                      className="reserved"
                      onClick={() => {
                        setSeat(seatNumber + 1);
                      }}
                    >
                      <Badge badgeContent={seatNumber + 1} color="primary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: red[500] }}
                        />
                      </Badge>
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          size="small"
          value="View Booking"
          className={classes.userinfo}
        >
          <UserInfoDialog />
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small"
          value="Cancel all Bookings"
          className={classes.submit}
          onClick={() => cancelTickets(date, bus)}
        >
          Cancel all Bookings
        </Button>
      </div>
    </Fragment>
  );
};

export default AdminSeatMap;
