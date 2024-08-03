import express from 'express';
import userRouter from './routes/userRoute.mjs'
import cartRouter from './routes/cartRoute.mjs'
import cors from 'cors';
import sessionDatabaseHandler from './utils/sessionHandler.mjs'
import loginRouter from './routes/login.mjs'
import logoutRouter from './routes/logoutRouter.mjs'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
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

  