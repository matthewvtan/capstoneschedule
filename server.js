const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
const eventRoutes = express.Router();
const path = require("path");
require("dotenv").config();

let Event = require('./event.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/events', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

eventRoutes.route('/').get(function(req, res) {
  Event.find(function(err, events) {
    if (err) {
      console.log(err);
    } else {
      res.json(events);
    }
  });
});

eventRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Event.findById(id, function(err, event) {
    res.json(event);
  });
});

eventRoutes.route('/add').post(function(req, res) {
  let event = new Event(req.body);
  event.save()
    .then(event => {
      res.status(200).json({'event': 'event added successfully'});
    })
    .catch(err => {
      res.status(400).send('adding new event failed');
    });
});

eventRoutes.route('/update/:id').post(function(req, res) {
  Event.findById(req.params.id, function(err, event) {
    if (!event)
      res.status(404).send('data is not found');
    else
      event.title = req.body.title;
      event.phone = req.body.phone;
      event.address = req.body.address;
      event.job_address = req.body.job_address;
      event.start = req.body.start;
      event.end = req.body.end;
      event.work_requested = req.body.work_requested;
      event.date_repaired = req.body.date_repaired;
      event.performed_by = req.body.performed_by;
      event.repairs_performed = req.body.repairs_performed;
      event.labor = req.body.labor;
      event.hours = req.body.hours;
      event.materials = req.body.materials;
      event.room = req.body.room;
      event.completed = req.body.completed;
      
      event.save().then(event => {
        res.json('Event updated');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use('/events', eventRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on Port: ${port}`));

