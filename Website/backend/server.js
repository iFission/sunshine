const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const websiteRoutes = express.Router();
const PORT = 3000;

let Forms = require('./models/request.model')
let RainbowIDs = require('./models/rainbowids.model')

app.use(cors());
app.use(bodyParser.json());

/*
----------------------------
connect to Mongodb
----------------------------
*/
mongoose.connect('mongodb://127.0.0.1:27017/website',
    { useUnifiedTopology: true, useNewURLParser: true })
    .then(() => {
        console.log("Connected");
    })
    .catch (err => console.log(err));
const connection = mongoose.connection;
connection.once('open', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Mongodb database connection established successfully.\n");
    }
})
/*
----------------------------
send data to routing algo / send to Alex
----------------------------
*/

//first endpoint, retrieve all the forms
websiteRoutes.route('/forms').get(function (req, res) {
    Forms.find(function (err, forms) {
        if (err) {
            console.log(err);
        } else {
            //attach what we are getting from the database to the response object
            res.json(forms);
        }
    })
})

//retrieve only one specific form
websiteRoutes.route('/forms/:id').get(function (req, res) {
    let id = req.params.id;
    Forms.findById(id, function (err, forms) {
        res.json(forms);
    });
});

//post form
websiteRoutes.route('/forms/add').post(function (req, res) {
    // add via query
    // console.log(req.query);
    // let forms = new Forms(req.query);
    // forms.save()
    //     .then(forms => {
    //         res.status(200).json({ 'Forms': 'form added successfully by query' })
    //     })
    //     .catch(err => {
    //         res.status(400).send('Adding new form via query failed')
    //     })

    //add via Website
    console.log(req.body);
    let forms = new Forms(req.body);
    forms.save()
        .then(forms => {
            res.status(200).json({ 'Forms': 'form added successfully' })
        })
        .catch(err => {
            res.status(400).send('Adding new form failed');
        });
})

//update post
websiteRoutes.route('/forms/update/:id').post(function (req, res) {
    //retrieve the form item which needs to be updated
    Forms.findById(req.params.id, function (err, forms) {
        if (!forms)
            res.status(404).send('data not found');
        else
            forms.firstName = req.query.firstName;
        forms.lastName = req.query.lastName;
        forms.email = req.query.email;
        forms.info = req.query.info;
        forms.skill = req.query.skill;
        // forms.skillOne = req.body.skillOne;
        // forms.skillTwo = req.body.skillTwo;
        forms.save().then(Forms => {
            res.json('Forms updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

websiteRoutes.route('/forms/:id').delete(function (req, res) {
    Forms.findByIdAndRemove(
        { _id: req.params.id }
    )
        .then(function (forms) {
            res.send("Form with id " + req.params.id + " has been deleted successfully.")
        });
});

/*
----------------------------
get data from routing algo / from Alex
----------------------------
*/

//retrieve IDs
websiteRoutes.route('/agents/request/add').get(function (req, res) {
    RainbowIDs.find(function (err, rainbowIDs) {
        if (err) {
            console.log(err);
        } else {
            //attach what we are getting from the database to the response object
            res.json(rainbowIDs);
        }
    })
})

/*
----------------------------
send data to open chat / send to Jielin
----------------------------
*/








/*
----------------------------
router is being used as middleware 
----------------------------
*/
app.use('/', websiteRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});




/*
----------------------------
ref for Alice cause she noob
----------------------------
With this code we’re creating an Express server,
attaching the cors and body-parser middleware and
making the server listening on port 4000.

express: fast and lightweight web framework for Node.js.

body-parser: Node.js body parsing middleware.

cors: CORS is a node.js package for providing an Express
middleware that can be used to enable CORS with various options.
It's a mechanism that allows restricted resources on a web page
to be requested from another domain outside the domain from
which the first resource was served.

mongoose: A Node.js framework which lets us access MongoDB in
an object-oriented way.

Nodemon is a utility that will monitor for any changes in your
source and automatically restart your server.
*/
