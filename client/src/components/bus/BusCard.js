import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { getBusById } from "../../actions/bus";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    alignItems: "center",
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
}));
const BusCard = ({ getBusById, bus, date }) => {
  {
    const classes = useStyles();

    return (
      <Fragment>
        <Grid item key={bus._id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <Avatar className={classes.avatar}>
              <DirectionsBusIcon />
            </Avatar>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h7" component="h2">
                {bus.name}
              </Typography>
              <Typography gutterBottom variant="h7" component="h2">
                {bus.origin} to {bus.destination}
              </Typography>
              <Typography>Start Time: {bus.startTime}</Typography>
              <Typography>End Time: {bus.endTime}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => getBusById(bus, date)}
                size="small"
                color="secondary"
              >
                View Seats
              </Button>
            </CardActions>

          </Card>
        </Grid>
      </Fragment>
    );
  }
};

export default connect(null, { getBusById })(BusCard);
