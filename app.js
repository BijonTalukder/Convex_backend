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
app.get('/items', async(req, res) => {
    let item = await client.query(api.task.get)
    console.log(item);
    res.json(item)
});
//  app.route({
//     path: "/message",
//     method: "POST",
//     handler: httpAction(async ({ runMutation }, request) => {
//       const { author, body } = await request.json();
 
//       await runMutation(api.task.create, { body, author });
//       return new Response(null, {
//         status: 200,
//       });
//     })
//   });
app.post('/create',async(req,res)=>{

    try {

        
        // Perform mutation logic here
        await client.mutation(api.task.create,{text:"bijon",isCompleted:true});
        res.status(201).json({ message: 'Item created successfully' });
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});