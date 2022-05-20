import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const UserInfoItem = ({ ticket }) => {
  return (
    <Fragment>
      <div className="userinfo">
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h7" component="h2" gutterBottom>
            Name:{ticket.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Phone:{ticket.phone}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Email:{ticket.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Seat:{ticket.seat}
          </Typography>
        </Grid>
      </div>
    </Fragment>
  );
};

export default UserInfoItem;
