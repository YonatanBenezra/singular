import BackgroundImage from './assets/background-image.svg'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages'

function App() {
	return (
		<div className="App">
			<Router>
				<div className="app_wrap">
					<div>
						<img className="app_bg_img" src={BackgroundImage} alt="background-img" />
					</div>

					<div className="app_content">
						<div className="content">
							<Navbar />

							<div className="pages">
								<Routes>
									<Route path="" element={<WelcomePage />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
