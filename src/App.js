import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import EditUserPage from './components/editUserPage';
import HomePage from './components/homePage';
import UserPage from './components/userPage';
import UsersListPage from './components/usersListPage';

function App() {
  return (
	<Routes>
		<Route index element={<HomePage />} />
		<Route path="users/*" element={<UsersListPage />}>
			<Route path=":userId/*" element={<UserPage />}>
				<Route path=":edit" element={<EditUserPage />}/>
			</Route>
		</Route>
		<Route path="*" element={<Navigate to="/"/>}/>
	</Routes>
  );
}

export default App;
