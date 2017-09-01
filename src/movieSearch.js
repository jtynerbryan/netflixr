import React from 'react'
import MovieResults from './movieResults'
import {Route} from 'react-router-dom'

class MovieSearch extends React.Component {

	state = {
		searchResults: []
	}

	handleChange = (event) => {
		this.setState({
			searchResults: event.target.value
		})
	}

	handleClick = (event) => {
		console.log(this.state)
		event.preventDefault()
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=305a31b8b260d70c65fd389cc6b7f2e7&query=${this.state.searchResults.replace(/ /g, '+')}`)
		.then(res => res.json())
		.then(res => this.setState({
			searchResults: res
			}, () => this.props.history.push("/movie-search/movie-results")))	
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleClick}>
				  <label>Search movies by Title</label>
				  <input type="text" name="name" onChange={this.handleChange}/>
				  <input type="submit" value="Submit"/>
				</form>
				<Route path="/movie-search/movie-results" render={()=> <MovieResults movies={this.state.searchResults}/>}/>
			</div>	
		)
	}


}

export default MovieSearch