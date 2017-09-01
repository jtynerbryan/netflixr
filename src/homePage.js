import React from 'react'
import MovieSearch from './movieSearch.js'
import ActorSearch from './actorSearch.js'

class HomePage extends React.Component {

	// This will have two buttons to direct user to search for
	// movies or actors


	render() {
		return(
			<div>
				<button>Search Movies by Title</button>
				<button>Search Movies by Actor</button>
			</div>
		)
	}
}

export default HomePage