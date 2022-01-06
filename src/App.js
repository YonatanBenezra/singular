import BackgroundImage from './assets/background-image.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './containers/WelcomePage'
import { AnimatePresence } from 'framer-motion'
import LoginPage from './containers/LoginPage'

function App() {
	return (
		<AnimatePresence exitBeforeEnter>
			<div className="App">
				<Router>
					<div className="app_wrap">
						<div>
							<img className="app_bg_img" src={BackgroundImage} alt="background-img" />
						</div>

						<div className="app_content">
							<div className="content">
								<div className="pages">
									<Routes>
										<Route path="" element={<WelcomePage />} />
										<Route path="/login" element={<LoginPage />} />
									</Routes>
								</div>
							</div>
						</div>
					</div>
				</Router>
			</div>
		</AnimatePresence>
	)
}

export default App
