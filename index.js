const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://<username>:<password>@<clustername>.6si6q.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));