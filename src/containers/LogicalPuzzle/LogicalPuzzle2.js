import Ball1 from '../../assets/balls/Ball1.svg'
import Ball2 from '../../assets/balls/Ball2.svg'

const LogicalPuzzle = () => {
	return (
		<div className="logical_puzzle">
			<div className="game">
				<h6>Drag each shape to its natural place</h6>

				<div className="game_container">
					<div className="draggable_balls_row">
						<div className="img_container">
							<img src={Ball1} alt="Ball1" />
						</div>
						<div className="img_container">
							<img src={Ball1} alt="Ball2" />
						</div>
						<div className="img_container">
							<img src={Ball2} alt="Ball2" />
						</div>
					</div>

					<div className="droppable_balls_row">
						<div className="droppable_balls_placeholder"></div>
						<div className="droppable_balls_placeholder"></div>
						<div className="droppable_balls_placeholder"></div>
					</div>
				</div>

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
