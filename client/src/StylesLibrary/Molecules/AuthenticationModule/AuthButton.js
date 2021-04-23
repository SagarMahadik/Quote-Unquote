import React from "react";
import {
	InputButtonStyle,
	InputButtonText,
	InputButtonContainer,
} from "StylesLibrary/Atoms/AuthenticationModule/AuthButton.js";

const AuthButton = ({ onClick, buttonSelected }) => {
	return (
		<>
			<InputButtonStyle
				selected={buttonSelected}
				onClick={(e) => onClick(e)}
			>
				<InputButtonText selected={buttonSelected}>
					Login
				</InputButtonText>
			</InputButtonStyle>
		</>
	);
};

export default AuthButton;
