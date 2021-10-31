const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://admin:admin@practicecluster.gm4a9.mongodb.net/BitCoins?retryWrites=true&w=majority';
mongoose.connect(dbURI);

// connected , error ,diconnected are connection events

mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose encounter eror:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log("Mongoose Disconnected");
});


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// nodemon changes
process.once('SIGUSR2', () => {

    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// for app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// for heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app termination', () => {
        process.exit(0);
    });
});
// All the schema files are imported here
require('./Coins');
require('./Plans');
require('./Transactions');
require('./Blog');