import express from "express";

//app initialisieren
const app = express();

//wo läuft die app
const port=4000;
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
app.get("/", (req, res)=>{
    res.json({hello: "World!"});
});

const films=[
    {
        
    }
]