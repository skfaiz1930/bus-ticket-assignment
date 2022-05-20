import React, { useState } from "react";
import { connect } from "react-redux";
import { updateBus } from "../../actions/bus";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 100,
    padding: 5,
    background: "white",
    borderRadius: 5,
    border: 0,
    height: 600,
    width: 400,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EditBus = ({ updateBus, bus }) => {
  const classes = useStyles();
  const reloadPage = () => {
    window.location.reload();
  };

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startTime: "",
    endTime: "",
    hoursTaken: "",
    seatPrice: "",
  });

  const { origin, destination, startTime, endTime, hoursTaken, seatPrice } =
    formData;

  // console.log(formData);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    updateBus({
      origin,
      destination,
      startTime,
      endTime,
      hoursTaken,
      seatPrice,
      busId: bus._id,
    });
    setFormData({
      origin: "",
      destination: "",
      startTime: "",
      endTime: "",
      hoursTaken: "",
      seatPrice: "",
    });
  };

  return (
    <div className={classes.root}>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update Bus Details{" "}
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="origin"
                  variant="outlined"
                  required
                  fullWidth
                  id="origin"
                  label="Origin"
                  autoFocus
                  onChange={onChange}
                  value={bus.origin}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="destination"
                  label="Destination"
                  name="destination"
                  value={bus.destination}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="startTime"
                  label="Start Time"
                  name="startTime"
                  value={bus.startTime}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="endTime"
                  label="End Time"
                  name="endTime"
                  value={bus.endTime}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="hoursTaken"
                  label="Hours Taken"
                  name="hoursTaken"
                  value={bus.hoursTaken}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="seatPrice"
                  label="Per Seat Price"
                  name="seatPrice"
                  value={bus.seatPrice}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              value="Edit Bus"
              onClick={() => {
                reloadPage();
              }}
            >
              Update
            </Button>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};

EditBus.propTypes = {
  updateBus: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAuthenticated,
});

export default connect(mapStateToProps, { updateBus })(EditBus);
