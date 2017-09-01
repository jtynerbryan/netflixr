import React from 'react'

const MovieResults = (props) => {
	console.log(props)
	return(
			<div>
				Am I working
				{props.movies.results[0].title}
			</div>	
	)

}

export default MovieResults