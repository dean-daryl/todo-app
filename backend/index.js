import express, {json} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRouter from './routes/taskRouter.js';
dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const PORT = process.env.PORT || 3000;

const mongoString = process.env.MONGO_URI;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(json());

app.use("/api",taskRouter);

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', () => {
  console.log('Connected to database');
});
