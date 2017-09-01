import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieSearch from './movieSearch'
import ActorSearch from './actorSearch'
import ActorResults from './actorResults'
import MovieResults from './movieResults'
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
			<Route path="/actor-results" component={ActorResults}/>
		</div>
	</Router>, 
	document.getElementById('root')
	);

registerServiceWorker();
