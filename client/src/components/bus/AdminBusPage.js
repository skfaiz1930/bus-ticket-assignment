import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BusCard from "./AdminBusCard";
import BusItem from "../../containers/bus/BusItem";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  icon: {},
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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Bus({ bus, date }) {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div class="flex-container">
        <div class="flex-child magenta">
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h3">
              Admin Buses
            </Typography>
            <br />
            <Grid container spacing={4}>
              {bus.buses.map((bus) => (
                <BusCard key={bus._id} bus={bus} date={date} />
              ))}
            </Grid>
          </Container>
        </div>

        <div class="flex-child green">
          <BusItem />
        </div>
      
      </div>
      <main></main>
    </Fragment>
  );
}
