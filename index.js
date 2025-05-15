const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');


// middleware
app.use(cors({
    origin: [],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())






const uri = "mongodb+srv://INNORA:xHa8wfocjKAuLCO1@cluster0.hiz8ocw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const roomCollections = client.db('INNORA').collection('allRooms')


        app.get('/rooms', async (req,res) => {
            const result = await roomCollections.find().toArray()
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

























app.get('/',(req,res) => {
    res.send('hello')
})










app.listen(port,() => {
    console.log('server running on port : ',port)
})