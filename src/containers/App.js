import React, { useState, useEffect} from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


  

const App = () => {
	
	const [robots, updateRobots] = useState([]);
	const [searchfield, updateSearchfield] = useState('');

	/*componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response=>response.json())
		 .then{users => (robots:users)};
	} */

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response=>response.json())
		 .then(users => updateRobots(users));
	}, []);

console.log('a');
 	const onSearchChange = (event) => {{updateSearchfield(event.target.value)}};


	const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
			
	return !robots.length ?
 	<h1> Loading.. </h1> :
	(
	 <div className='tc'>
 	    <h1 className='f2'> Robofriends</h1>
	    <SearchBox searchChange={onSearchChange}/>
 	    <Scroll>
 	     <ErrorBoundary>
     	    <CardList robots={filteredRobots} />
     	 </ErrorBoundary>
	    </Scroll>
	 </div>
	)	
}



export default App;