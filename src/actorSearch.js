import React from 'react'

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
		.then(res => console.log(res))
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleClick}>
				  <label>Search movies by Actor name</label>
				  <input type="text" name="name" onChange={this.handleChange}/>
				  <input type="submit" value="Submit"/>
				</form>
			</div>	
		)
	}


}

export default ActorSearch