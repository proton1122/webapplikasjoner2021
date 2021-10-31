// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const movies = [
    {
        title: "Movie1",
        description: "Description1"
    },
    {
        title: "Movie2",
        description: "Description2"
    },
    {
        title: "Movie3",
        description: "Description3"
    },
    {
        title: "Movie4",
        description: "Description4"
    },
    {
        title: "Movie5",
        description: "Description5"
    },
    {
        title: "Movie6",
        description: "Description6"
    },
    {
        title: "Movie7",
        description: "Description7"
    },
]

export default function handler(req, res) {

    if(req.method === 'GET') {
        //console.log("Method: GET")
        res.status(200).json(movies)
    }

    if(req.method === 'POST') {

        if(req.body.method === "addMovie") {
            //console.log("Method: addMovie")
            const movie = {title: req.body.title, description: req.body.description}
            movies.push(movie)
            res.status(201).json(movies)
        }

        if(req.body.method === "getMovie") {
            //console.log("Method: getMovie")
            const movieList = movies.filter((movie) => {
                return movie.title === req.body.movieTitle
            })


            if(movieList.length == 0) {
                // couldn't get this to work
                //res.status(404).json(req.body)
            }
            else {
                res.status(200).json(movieList[0])
            }
        }
    }


  }
  