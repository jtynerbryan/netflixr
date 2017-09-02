import React from 'react'
import ActorResults from './actorResults'
import {Route} from 'react-router-dom'

class ActorSearch extends React.Component {

	state = {
		searchResults: []
	}

	handleChange = (event) => {
		this.setState({
			searchResults: event.target.value
		})
	}

	handleClick = (event) => {
		event.preventDefault()
		fetch(`https://api.themoviedb.org/3/search/person?api_key=305a31b8b260d70c65fd389cc6b7f2e7&query=${this.state.searchResults.replace(/ /g, '+')}`)
		.then(res => res.json())
		.then(res => this.setState({
			searchResults: res
			}, () => this.props.history.push("/actor-search/actor-results")))
		
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleClick}>
				  <label>Search movies by Actor name</label>
				  <input type="text" name="name" onChange={this.handleChange}/>
				  <input type="submit" value="Submit"/>
				</form>
				<Route path="/actor-search/actor-results" render={()=> <ActorResults actors={this.state.searchResults}/>}/>
			</div>	
		)
	}




}

export default ActorSearch