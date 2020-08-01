const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { movieId } = req.params;
    const { name } = req.body;

    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(400).json({ error: 'Movie not found' });
    }

    const [actor] = await Actor.findOrCreate({
      where: { name },
    });

    await movie.addActor(actor);

    return res.json(actor);
  },

  async delete(req, res) {
    const { movieId } = req.params;
    const { name } = req.body;

    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(400).json({ error: 'Movie not found' });
    }

    const [actor] = await Actor.findOne({
      where: { name },
    });

    await movie.removeTech(actor);
    return res.json(actor);
  },
};
