const Gender = require('../models/Gender');
const Movie = require('../models/Movie');

module.exports = {
  async index(req, res) {
    const { movieId } = req.params;
    const movie = await Movie.findByPk(movieId, {
      include: { association: 'genders' },
    });

    return res.json(movie);
  },

  async store(req, res) {
    const { movieId } = req.params;
    const { gender } = req.body;

    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      return res.status(400).json({ error: 'User not found' });
    }

    const gender_created = await Gender.create({
      gender,
      movieId,
    });
    return res.json(gender_created);
  },
};
