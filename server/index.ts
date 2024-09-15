import express from 'express';
const app = express();

app.get('/api/test', (req, res)=> {
    res.json({message: "Hello from backend"})
})

app.listen('5000', ()=>{
    console.log("backend running on port 5000");
})