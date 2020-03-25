/* 
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

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const formRoutes = express.Router();
const PORT = 4000;

let Forms = require('./forms.model')

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/forms', { useNewURLParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Mongodb database connection established successfully.\n");
})

//first endpoint, retrieve all the forms
formRoutes.route('/').get(function (req, res) {
    Forms.find(function (err, forms) {
        if (err) {
            console.log(err);
        } else {
            //attach what we are getting from the database to the responseobject
            res.json(forms);
        }
    })
})

//retrieve only one specific form
formRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Forms.findById(id, function (err, forms) {
        res.json(forms);
    });
});

formRoutes.route('/add').post(function (req, res) {
    let forms = new Forms(req.body);
    forms.save()
        .then(forms => {
            res.status(200).json({ 'Forms': 'form added successfully' })
        })
        .catch(err => {
            res.status(400).send('adding new form failed');
        })
})

formRoutes.route('/update/:id').post(function (req, res) {
    //retrieve the form item which needs to be updated
    Forms.findById(req.params.id, function (err, forms) {
        if (!forms)
            res.status(404).send('data not found');
        else
            forms.firstName = req.body.firstName;
            forms.lastName = req.body.lastName;
            forms.email = req.body.email;
            forms.info = req.body.info;
            forms.skillOne = req.body.skillOne;
            forms.skillTwo = req.body.skillTwo;


            forms.save().then(Forms => {
                res.json('Forms updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//router is being used as middleware 
app.use('/forms', formRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});