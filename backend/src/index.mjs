import express from 'express';
import mongoConnect from './dbConnector.mjs';
import userRouter from './routes/userRoute.mjs'
import cors from 'cors';


const app = express();
mongoConnect();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(userRouter);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

app.get('/', (req, res) => {
    res.send('Hello, this is my first Express.js app!');
})

