import Ball1 from '../../assets/balls/Ball1.svg'
import Ball2 from '../../assets/balls/Ball2.svg'
import { Link } from 'react-router-dom'

const Rules = () => {
	return (
		<div className="rules_page">
			<div className="rules_page_content">
				<h6>Follow the rules</h6>

				<div className="rules_ball_row">
					<div className="ball_image">
						<img src={Ball1} alt="Ball1" />
					</div>
					<div className="dots"> . . . . . . . . </div>

					<div className="rule">Can never be close to</div>

					<div className="dots"> . . . . . . . . </div>

					<div className="ball_image">
						<img src={Ball1} alt="Ball1" />
					</div>
				</div>

				<div className="rules_ball_row">
					<div className="ball_image">
						<img src={Ball2} alt="Ball2" />
					</div>
					<div className="dots"> . . . . . . . . </div>

					<div className="rule">Can never be close to</div>

					<div className="dots"> . . . . . . . . </div>

					<div className="ball_image">
						<img src={Ball2} alt="Ball2" />
					</div>
				</div>

				<div className="play_button">
					<Link to="/logical-puzzle">
						<button>Ok Let's play</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Rules
