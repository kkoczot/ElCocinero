import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import About from './pages/About'
import Desserts from './pages/Desserts'
import Home from './pages/Home'
import MainCourse from './pages/MainCourse'
import Menu from './pages/Menu'
import More from './pages/More'
import NotFound from './pages/NotFound'
import Salads from './pages/Salads'

import Layout from './components/Layout'

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />} >
		<Route index element={<Home />} />
		<Route path='home' element={<Home />} />

		<Route path='menu' element={<Menu />} />
		<Route path='main_course' element={<MainCourse />} />
		<Route path='desserts' element={<Desserts />} />
		<Route path='salads' element={<Salads />} />
		<Route path='more' element={<More />} />
		
		<Route path='about' element={<About />} />
		<Route path='*' element={<NotFound />} />
	</Route>
))

export default function App() {
	return (
		<RouterProvider router={router} />
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
