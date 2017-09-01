import React from 'react'
import MovieSearch from './movieSearch.js'
import ActorSearch from './actorSearch.js'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
class HomePage extends React.Component {

	// This will have two buttons to direct user to search for
	// movies or actors



	render() {
		return(
			<div>
				<div><Link to="/movie-search">Search Movies by Title</Link></div>
				<div><Link to="/actor-search">Search Movies by Actor</Link></div>
			</div>
		)
	}
}

export default HomePage