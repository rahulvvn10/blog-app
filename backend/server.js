const express=require('express');   
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const categoryRoutes=require('./routes/categories');
const cors=require('cors');
const postRoutes=require('./routes/posts');
const app=express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/blog').then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});
app.use('/api/posts',postRoutes);
app.use('/api/categories',categoryRoutes);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});