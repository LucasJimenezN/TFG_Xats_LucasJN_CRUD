// Código del servidor
const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/users');
const participantsRoutes = require('./routes/participants');
const groupRoutes = require('./routes/group');
const conversationsRoutes = require('./routes/conversations');
const messahesRoutes = require('./routes/messages');
const logger = require('morgan')


const app = express();
app.use(logger('dev'));
const port = process.env.port || 3000;

// Middlewares -> prefigo de rutas
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', participantsRoutes);
app.use('/api', groupRoutes)
app.use('/api', conversationsRoutes);
app.use('/api', messahesRoutes);


// Rutas
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });


// Connexión MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        console.log('Database:', mongoose.connection.name);
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    }) ;

app.listen(port, () => {
    console.log('Server on port: ', port);
});

