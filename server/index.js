import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

                                                 
app.use(express.json({limit: "30mb"}));                      //specifying the max size of image upload
app.use(express.urlencoded({limit: "30mb"}));
app.use(cors());

app.use('/posts', postRoutes);                              //routing specified for /posts

const MONGODB_CONNECTION_URL = 'mongodb+srv://wdong:dwk18615232860@cluster0.z2dx6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';      //connection to mongoDB cluster
const PORT = process.env.PORT || 4000;
mongoose.connect(MONGODB_CONNECTION_URL, {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))         //define the port for this server (specifically routing posts)
    .catch((error) => console.log(error.message));
