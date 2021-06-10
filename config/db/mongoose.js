const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/mern', { 
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(() => console.log("Database succesfully connected"))
   .catch((error) => console.log(error));

module.exports = mongoose;