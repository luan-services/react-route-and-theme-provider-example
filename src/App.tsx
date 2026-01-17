import './App.css'
import {Routes, Route} from "react-router";
import Layout from "./layout/Layout";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {

	return (
		<Routes>
			<Route element={<Layout/>}>
				<Route index path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} /> 
			</Route>
		</Routes>
	)
}

export default App