const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const app = express();

const server = http.createServer(app);



//Connect Database
connectDB();
// //Init Middlew:are

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/produit', require('./routes/api/produit'));


server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);