import React from 'react'

const MovieResults = (props) => {
	console.log(props)
	return(
			<div>

				{props.movies.results.map((movie, index) => { 
					return <div key={index}>
						<h1>{movie.title}</h1>
						<p>Rating: {movie.vote_average}/10 ({movie.vote_count} votes)</p>
						<h4>Release Date: {movie.release_date}</h4>
						<img width="240px" height="320px" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}  alt="Poster not available"/>
						<p>{movie.overview}</p>
					</div>
				})}
			</div>	
	)

}

export default MovieResults