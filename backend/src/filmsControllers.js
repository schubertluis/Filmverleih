import { check, validationResult } from "express-validator";

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

export const getFilms = (req, res) => {
  res.status(200).send(films);
};

export const findFilms = (req, res) => {
  let result = films.filter((film) => film.title == req.query.title);
  res.status(200).send(result);
};

export const findFilmsById = (req, res) => {
  let film = films.find((b) => b.id == req.params.id);
  res.status(200).send(film);
};

export const addFilm = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let film = req.body;
  films.push(film);
  res.status(201).send(`Added ${film.title} to film collection`);
};

// attached as second param in a route
export const newFilmValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
];
