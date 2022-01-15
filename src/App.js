import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BackgroundImage from './assets/background-image.svg'

import WelcomePage from './containers/WelcomePage'
import LoginPage from './containers/LoginPage'
import CreatePasswordPage from './containers/CreatePasswordPage'
import HomePage from './containers/HomePage'

import Rules from './containers/LogicalPuzzle/Rules'
import LogicalPuzzle from './containers/LogicalPuzzle/LogicalPuzzle'

import CardsGame from './containers/CardsGame/CardsGame'
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
										<Route path="/welcome" element={<WelcomePage />} />
										<Route path="/login" element={<LoginPage />} />
										<Route path="/create-password" element={<CreatePasswordPage />} />
										<Route path="/" element={<HomePage />} />
										<Route path="/logical-puzzle/rules" element={<Rules />} />
										<Route path="/logical-puzzle" element={<LogicalPuzzle />} />
										<Route path="/cards-game" element={<CardsGame />} />
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
