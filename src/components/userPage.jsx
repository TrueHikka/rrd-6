import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const UserPage = () => {
	const {userId, edit} = useParams()

	return edit === "edit" ? <Outlet /> : ( 
		<>
			<h1>User Page</h1>
			<hr />
			<div>
				<button>
					<h3>
						<Link to="../">Users List Page</Link>
					</h3>
				</button>
				<button>
					<h3>
						<Link to={`edit`}>User Edit Page</Link>
					</h3>
				</button>
			</div>
			<h3>User id: {userId}</h3>
		</>
	 );
}
 
export default UserPage;







