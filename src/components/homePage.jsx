import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return ( 
		<>
			<h1>Home Page</h1>
			<hr />
			<button>
				<h3>
					<Link to="users">Users List Page</Link>
				</h3>
			</button>
		</>
	 );
}
 
export default HomePage;







