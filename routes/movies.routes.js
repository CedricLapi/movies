
const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {

    //FIND ALL
    app.get('/api/movies', MovieController.findAllMovies);


    //CREATE
    app.post('/api/movies', MovieController.createNewMovie);


    //GET ONE
    app.get('/api/movies/:id', MovieController.getOneMovie);


    //UPDATE
    app.put('/api/movies/:id', MovieController.updateMovie);


    //DELETE
    app.delete('/api/movies/:id', MovieController.deleteMovies);
    
}