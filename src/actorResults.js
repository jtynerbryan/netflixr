import React from 'react'

const ActorResults = (props) => {
	console.log(props)
		return(
			<div>
			{props.actors.results.map((actor, index) => {
				return <div key={index}><h2>{actor.name}</h2>
							{actor.known_for.map((movie, index) => {
								return <div key={index}>
									   	<h4>{movie.title}</h4>
									   	<h5>Release Date: {movie.release_date}</h5>
									   	<p>{movie.overview}</p>
									   </div>
							})}
					   </div>

			})}
			</div>	
	)

}

export default ActorResults

