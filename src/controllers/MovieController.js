const Movie = require('../models/Movie');

module.exports = {
  async index(req, res) {
    const movies = await Movie.findAll();
    return res.json(movies);
  },

  async store(req, res) {
    const { title, value } = req.body;

    const movie = await Movie.create({ title, value });

    return res.json(movie);
  },
  async alter(req, res) {
    const { movieId, title, value } = req.body;
    const movie = await Movie.findByPk(id);
    const updatedMovie = await movie.update({ title, value });

    return res.json(updatedMovie);
  },
};
