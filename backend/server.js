const express = require("express");
const cors = require("cors");
const drugsRoutes = require("./src/drugs/routes");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.get('/',(re,res)=>{
       res.send("From backend side");
})

app.use('/api/v1/drugs', drugsRoutes);


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


