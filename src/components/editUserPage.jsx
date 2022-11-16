import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditUserPage = () => {
	const {userId} = useParams()
	
	return ( 
		<>
			<h1>User Edit Page</h1>
			<hr />
			<div>
				<button>
					<h3>
						<Link to="../">
							Back to User Page
						</Link>
					</h3>
				</button>
				<button>
                    <h3>
                        <Link to="../../">
							Users List Page
						</Link>
                    </h3>
                </button>
			</div>
			<br />
			<div>
                <button>
                    <h3>
                        <Link to={`/users/${+userId - 1}`}>
							{'<<< Previous user page'}
						</Link>
                    </h3>
                </button>
                <button>
                    <h3>
                        <Link to={`/users/${+userId + 1}`}>
							{'Next user profile >>>'}
						</Link>
                    </h3>
                </button>
            </div>
		</>
	 );
}
 
export default EditUserPage;







