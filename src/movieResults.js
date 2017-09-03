import React from 'react'

const MovieResults = (props) => {
	console.log(props)
	return(
			<div>

				{props.movies.results.map((movie, index) => { 
					return <div key={index}>
						<h1>{movie.title}</h1>
						<img className="center-block img-responsive" width="240px" height="320px" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}  alt="Poster not available" data-reactid=".2.1.0.0.1.0.0.0"/>
						<h4>Release Date: {movie.release_date}</h4>
						<p>{movie.overview}</p>
					</div>
				})}
			</div>	
	)

}

export default MovieResults



// overview

//release_date

				// <h1>{props.movies.results[0].title}</h1>
				// <h4>Release Date: {props.movies.results[0].release_date}</h4>
				// <p>{props.movies.results[0].overview}</p>

				//{"images/" + this.props.image}