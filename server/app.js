const cors = require("cors");
const dotenv = require("dotenv");
const express =  require("express");
const cookieParser = require('cookie-parser')
const app = express();

app.use(cors());


app.use(cookieParser())

dotenv.config({path : './config.env'});
require('./db/conn'); 

app.use(express.json()); 

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));

app.use(require('./router/auth'));



const PORT = process.env.PORT;



// const middleware = (req , res , next) => {
//     console.log("middleware running");
//     next();
// }

// app.get('/', (req,res) => {
//     res.send('Server is Running currently at Home');
// });

// app.get('/login', (req,res) => {
//     res.send('Log In to Service');
// });

// app.get('/signup', (req,res) => {
//     res.send('Sign up for service');
// });

// app.get('/addr', middleware, (req,res) => {
//     res.send('Add a new Ride');
// });

// app.get('/ride',middleware , (req,res) => {
//     res.send('Search for a Ride');
// });



app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});