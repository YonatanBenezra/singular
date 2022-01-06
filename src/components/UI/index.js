export const LoginInput = ({ placeholder, type }) => {
	return <input className="login_input" type={type} placeholder={placeholder} />
}

export const GradientButton = ({ text, width }) => {
	return (
		<button className="gradient_button" style={{ width: width }}>
			{text}
		</button>
	)
}
