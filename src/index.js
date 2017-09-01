import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieSearch from './movieSearch.js'
import ActorSearch from './actorSearch.js'
import HomePage from './homePage.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
	<Router>
		<div>
			<App />


			<Route exact path="/" component={HomePage}/>
			<Route path="/movie-search" component={MovieSearch}/>
			<Route path="/actor-search" component={ActorSearch}/>
		</div>
	</Router>, 
	document.getElementById('root')
	);

registerServiceWorker();
