import Movie from "../models/movie.model.js";

export const MovieIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const MovieCreate = async (req, res) => {
  console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const MovieUpdate = (req, res) => {
  res.send("Updated a movie");
};

export const MovieDelete = (req, res) => {
  res.send("Deleted a movie");
};
