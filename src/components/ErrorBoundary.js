import React, { useState, useEffect } from 'react';

const ErrorBoundary = (props) => {
	
	const [hasError, updateHaserror] = useState(false);

	useEffect((error, info) => {
		if(error&&info){
		updateHaserror(true);}
	});
	 console.log('e');
	if(hasError){
		return <h1> Fail </h1>
	}
	return props.children
}


export default ErrorBoundary;