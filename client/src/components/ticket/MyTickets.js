import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import Button from "@material-ui/core/Button";
import formatDate from "../../utils/formatDate";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  icon: {},

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
  avatar: {
    alignItems: "center",
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function myTickets({ tickets, cancelTicket }) {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="md">
        <Typography component="h1" variant="h3">
          My Tickets
        </Typography>
        <br />
        <Grid container spacing={4}>
          {tickets.map((ticket) => (
            <Grid item key={ticket.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Avatar className={classes.avatar}>
                  <ConfirmationNumberIcon />
                </Avatar>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h7" component="h2">
                    {ticket.origin} to {ticket.destination}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="h2">
                    {formatDate(ticket.date)}
                  </Typography>
                  <Typography>Start Time: {ticket.startTime}</Typography>
                  <Typography>End Time: {ticket.endTime}</Typography>
                  <Typography>Seat No.: {ticket.seat}</Typography>
                  
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => cancelTicket(ticket.id)}
                    size="large"
                    color="secondary"
                  >
                    cancel Ticket
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
