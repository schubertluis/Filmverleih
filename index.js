import express from "express";

//app initialisieren
const app = express();

//wo läuft die app
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
// app.get("/", (req, res) => {
//   res.json({ hello: "World!" });
// });

const films = [
  {
    horror: [
      { id: 0, title: "Scary Movie", year: 2000, Availabe: "yes" },
      { id: 1, title: "Scary Movie2", year: 2002, Availabe: "no" },
      { id: 2, title: "Scary Movie3", year: 2003, Availabe: "yes" },
    ],
    comedy: [
      { id: 0, title: "Funny Movie", year: 2000, Availabe: "yes" },
      { id: 1, title: "Funny Movie2", year: 2002, Availabe: "no" },
      { id: 2, title: "Funny Movie3", year: 2003, Availabe: "yes" },
    ],
    drama: [
      { id: 0, title: "Exciting Movie", year: 2000, Availabe: "yes" },
      { id: 1, title: "Exciting Movie2", year: 2002, Availabe: "no" },
      { id: 2, title: "Exciting Movie3", year: 2003, Availabe: "yes" },
    ],
  },
];

app.get("/", (req, res) => {
  res.status(200).send(films);
});
