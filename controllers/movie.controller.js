
const Movie = require('../models/movie.model');

module.exports = {
    //Find all movies
    findAllMovies: (req, res) => {
    Movie.find()
        .then((allMovies) => {
            console.log(allMovies);
            res.json({ movies: allMovies })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
},

    //Create
    createNewMovie: (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            console.log(newlyCreatedMovie);
            res.json({ movie: newlyCreatedMovie })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: 'Something went wrong', error: err })
        });},

        // Get One movie
        getOneMovie: (req, res) => {
            Movie.findById(req.params.id)
                .then((oneMovie) => {
                    console.log(oneMovie);
                    res.json(oneMovie);
                } )
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                });},
                
        //UPDATE
        updateMovie: (req, res) => {
            Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
                .then((updatedMovie) => {
                    console.log(updatedMovie);
                    res.json(updatedMovie);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                });},


        //DEL
        deleteMovies: (req, res) => {
            Movie.findByIdAndDelete(req.params.id)
                .then((deletedMovie) => {
                    console.log(deletedMovie);
                    res.json(deletedMovie)
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                });
        }

    }

 