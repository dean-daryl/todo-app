import express, {json} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRouter from './routes/taskRouter.js';
dotenv.config();

const app = express();
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
