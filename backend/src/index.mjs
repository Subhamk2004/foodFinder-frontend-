import express from 'express';
import userRouter from './routes/userRoute.mjs'
import cartRouter from './routes/cartRoute.mjs'
import cors from 'cors';
import sessionDatabaseHandler from './utils/sessionHandler.mjs'
import loginRouter from './routes/login.mjs'
import logoutRouter from './routes/logoutRouter.mjs'
import dotenv from 'dotenv';

dotenv.config();
console.log("Allowed Origins:", process.env.ALLOWED_ORIGINS);


const app = express();
// const allowedOrigins = "https://food-finder-lime.vercel.app" ? "https://food-finder-lime.vercel.app".split(',') : ['http://localhost:5173'];
const allowedOrigins = ['https://food-finder-lime.vercel.app' ,'http://localhost:5173', 'http://localhost:5000'];

app.use(cors({
  origin:'*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true,
}));

const PORT = process.env.PORT || 5000;
app.use(sessionDatabaseHandler);
app.use(userRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(cartRouter);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

  