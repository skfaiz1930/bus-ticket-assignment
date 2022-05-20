import React, { Fragment } from "react";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Badge from "@material-ui/core/Badge";

import green from "@material-ui/core/colors/green";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  userinfo: {
    margin: theme.spacing(3, -1, 2),
    backgroundColor: green[500],
  },
  submit: {
    margin: theme.spacing(3, -1, 2),

    backgroundColor: green[500],
  },
}));
const UserSeatMap = ({ seats, setSeat, selectedSeat }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="tableContainer">
        <h1 className="large text-primary m-1 pos">Seat Map</h1>
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seat, seatNumber) => {
                if (seat == 1 && selectedSeat == seatNumber + 1) {
                  return (
                    <td className="">
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
                      <Badge badgeContent={seatNumber + 1} color="secondary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: grey[500] }}
                        />
                      </Badge>
                    </td>
                  );
                else {
                  return (
                    <td
                      className="reserved"
                      onClick={() => {
                        setSeat(seatNumber + 1);
                      }}
                    >
                      <Badge badgeContent={seatNumber + 1} color="secondary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: red[500] }}
                        />
                      </Badge>
                      {seatNumber + 1}
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>

        <Link to="/book">
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="small"
            value="Cancel all Bookings"
            className={classes.submit}
          >
            Book
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default UserSeatMap;
