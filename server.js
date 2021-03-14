require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const MONGO_SECRET = process.env.MONGO_SECRET;
const userRoutes =  require('./routes/userRoutes');

app.use(express.json());

//connect database

const connectDB = async () => {
    try{
        await connect(
            `mongodb+srv://admin:${MONGO_SECRET}@cluster0.mn72v.mongodb.net/test`,
            { useUnifiedTopology: true, useNewUrlParser: true }
          );
    }catch(e){
        console.log(e.message)
    }
};

app.use('/api/users' , userRoutes)





connectDB();

app.listen(PORT, () => {
  console.log(`server stared at port ${PORT}`);
});
