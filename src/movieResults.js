import React from 'react'

const MovieResults = (props) => {
	console.log(props)
	return(
			<div>
				{props.movies.results.map((movie, index) => { 
					return <div key={index}>
						<h1>{movie.title}</h1>
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