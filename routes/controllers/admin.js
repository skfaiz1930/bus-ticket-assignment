const jwt = require("jsonwebtoken");
const config = require("config");
const Admin = require("../../models/Admin");
const Ticket = require("../../models/Ticket");
const Bus = require("../../models/Bus");

// Register a new Admin
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let admin = await Admin.findOne({ email });

    if (admin) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Bus operator already exists" }] });
    }

    let buses = [];
    admin = new Admin({
      name,
      email,
      password,
      buses,
    });

    await admin.save();

    const payload = {
      user: {
        id: admin.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    if (password != user.password) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Add a bus
exports.addBus = async (req, res) => {
  const {
    origin,
    destination,
    startTime,
    endTime,
    hoursTaken,
    boardingPointName,
    droppingPointName,
    seatPrice,
  } = req.body;

  try {
    const own = await Admin.findOne({ _id: req.user.id });
    bus = new Bus({
      name: own.name,
      origin: origin,
      destination: destination,
      owner: req.user.id,
      startTime: startTime,
      endTime: endTime,
      hoursTaken: hoursTaken,
      boardingPointName: boardingPointName,
      droppingPointName: droppingPointName,
      seatPrice: seatPrice,
    });
    await bus.save();

    res.json({ msg: "Bus added successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// get a specific bus
exports.getBus = async (req, res) => {
  try {
    const bus = await Bus.findOne({ _id: req.params.id });
    res.json(bus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// delete a specific bus
exports.deleteBus = async (req, res) => {
  console.log(req.params.id);
  try {
    const bus = await Bus.findOne({ _id: req.params.id });
    if (!bus) {
      return res.status(404).json({ msg: "Bus not found" });
    }
    await Bus.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Bus deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//update a specific admin bus
exports.updateBus = async (req, res) => {
  console.log(req.body);
  try {
    const bus = await Bus.findOne({ _id: req.body.busId });
    if (!bus) {
      return res.status(404).json({ msg: "Bus not found" });
    }
    await Bus.findOneAndUpdate({ _id: req.body.busId }, req.body);
    res.json({ msg: "Bus updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//get searched buses of an admin
exports.getMyBuses = async (req, res) => {
  try {
    const buses = await Bus.find({
      owner: req.user.id,
    });
    return res.json(buses);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

// get all bus of an admin
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find({
      owner: req.user.id,
    });
    return res.json(buses);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

//Get info about a booked ticket
exports.ticketInfo = async (req, res) => {
  const { date, bus, seat } = req.body;
  try {
    const ticket = await Ticket.findOne({
      date: date,
      bus: bus,
      seat: seat,
    });
    return res.json(ticket);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};
//Cancel all Tickets of a bus
exports.cancelTickets = async (req, res) => {
  const { date, bus } = req.body;
  try {
    await Ticket.deleteMany({ date: date, bus: bus });
    res.json({ msg: "All Booking Removed Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};
