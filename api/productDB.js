require("dotenv").config();

const connectDB = require("./db/connect")

const Product = require("./models/Product")

const ProductJson = require("./visual data.json")

const start = async () => {

    try {

        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        console.log("success");


    } catch (error) {

        console.log("error");
        
    }

}

start();