import Ball1 from '../../assets/balls/Ball1.svg'
import Ball2 from '../../assets/balls/Ball2.svg'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Game from './game'

const LogicalPuzzle = () => {
	return (
		<div className="logical_puzzle">
			<div className="game">
				<h6>Drag each shape to its natural place</h6>
				<DndProvider backend={HTML5Backend}>
					<Game />
				</DndProvider>

				<div className="button_row">
					<button
					//  className="active"
					>
						NEXT GAME
					</button>
				</div>

				<div className="rules_row">
					<div className="single_rule">
						<img src={Ball1} alt="Ball1" />
						<div className="text">Can never be close</div>
					</div>

					<div className="single_rule">
						<img src={Ball2} alt="Ball2" />
						<div className="text">Can not be at the left end</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogicalPuzzle
