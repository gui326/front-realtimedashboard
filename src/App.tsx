import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

export default function App(){
	return(
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />}/>

					<Route path="/cadastro" element={<Register />}/>

					<Route path="/" element={ <MainTemplate /> }>

						<Route path="/" element={ <Dashboard /> } />

						<Route path="venda-produtos" element={ <Products /> } />

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}