import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.get('/api/test', (req, res:any)=> {
    res.json({message: "Hello from backend"})
})

app.listen('5000', ()=>{
    console.log("backend running on port 5000");
})