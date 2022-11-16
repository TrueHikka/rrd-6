import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const UsersListPage = () => {
	const users = [
		{userId: 1},
		{userId: 2},
		{userId: 3},
		{userId: 4},
		{userId: 5}
	]

	const {userId} = useParams()

	return userId ? <Outlet /> : ( 
		<>
			<h1>Users List Page</h1>
			<hr />
			<button>
				<h3>
					<Link to="../">Home Page</Link>
				</h3>
			</button>
			<div>
				<ul>
					{users.map(u => (
						<li key={u.userId}>
							<Link to={`${u.userId}`}>
								{`USER PAGE - ${u.userId}`}
							</Link>
						</li>
					))}
					
				</ul>
			</div>
		</>
	 );
}
 
export default UsersListPage;







