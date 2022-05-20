import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { getBusById, deleteBus } from "../../actions/bus";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditBus from "../../containers/bus/EditBus";
import Avatar from "@material-ui/core/Avatar";
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
  editAvatar: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(3),
  },
  deleteAvatar: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    margin: theme.spacing(3),
  },
}));
const AdminBusCard = ({ getBusById, deleteBus, bus, date }) => {
  const [modal, setModal] = React.useState(false);
  const reloadPage = () => {
    window.location.reload();
  };
  {
    const classes = useStyles();

    return (
      <>
        <Fragment>
          <Grid item key={bus._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
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
              <Grid container>
                <Grid item xs={3}>
                  <Avatar className={classes.editAvatar}>
                    <Button onClick={() => setModal(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </Button>
                  </Avatar>
                </Grid>
                <Grid item xs={3}>
                  <Avatar className={classes.deleteAvatar}>
                    <Button
                      onClick={() => {
                        deleteBus(bus._id);
                        reloadPage();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                    </Button>
                  </Avatar>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Fragment>
        {modal ? <EditBus bus={bus} /> : null}
      </>
    );
  }
};

export default connect(null, { getBusById, deleteBus })(AdminBusCard);
