import  express from 'express'
import cors from 'cors';
const app = express();
// const Convex = require('convex');

// const ConvexHttpClient = require("convex/browser")
// const api = require("./convex/_generated/api")
import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api.js";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const port = 3000;
app.use(cors())
app.use(express.json())


const client = new ConvexHttpClient(process.env["CONVEX_URL"]);
// client.query(api.task.get).then();
app.get('/', async(req, res) => {
    try {
        let item = await client.query(api.task.get)

        res.status(201).json({ message: 'Items fetched successfully',data:item });

    } catch (error) {
        
    }
    // console.log(item);
    // res.json(item);
});



app.get('/:id',async(req,res)=>{
    const id = req.params.id
    try {
        let item = await client.query(api.task.getByid,{id})
console.log(item);
        res.status(201).json({ message: 'Item fetch successfully',data:item });

    } catch (error) {
        
    }

})
app.post('/create',async(req,res)=>{

    try {
       const result =  await client.mutation(api.task.create,req.body);
        res.status(201).json({ message: 'Item created successfully',data:result });
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});