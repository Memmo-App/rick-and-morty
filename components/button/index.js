import { StyledButton } from "./styledButton";

const Button = ({ children, onHandleClick }) => {
	return (
		<StyledButton onClick={onHandleClick}>
			{children}
		</StyledButton>
	)
}

export default Button;