import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RecipeFeed from './components/RecipeFeed'
import RecipeDetail from './components/RecipeDetail'
import About from './components/About.js'
import Creator from './Creator.js'

class Route_Handler extends Component {
  render() {
    return (
		<Router>
			<Navbar />
        	<div className ="content">
        		<Route exact path="/" component={RecipeFeed} />
        		<Route exact path="/new" component={RecipeFeed} />
        		<Route exact path="/views" component={RecipeFeed} />
        		<Route exact path="/favourite" component={RecipeFeed} />
				<Route exact path="/id/:id" component={RecipeDetail} />
				<Route exact path="/about" component={About} />
				<Route exact path="/create" component={Creator} />
			</div>
        	<Footer />
		</Router>
    );
  }
}

export default Route_Handler;
