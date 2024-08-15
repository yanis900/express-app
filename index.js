const express = require('express');
const fs = require('node:fs/promises');

const app = express();

app.get("/", async (req, res) =>{
    try {
        res.send(await fs.readFile("./index.html", "utf8", (err, html)) );
        
    } catch (error) {
    res.status(500).send("sorry, out of order");
    
}
  });

app.listen(3000, () => console.log('App available on port 3000'));
