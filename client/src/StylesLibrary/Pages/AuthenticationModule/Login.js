import React from "react";
import { LoginPageContainer } from "StylesLibrary/Atoms/AuthenticationModule/LoginPageContainer.js";
import AuthInputTextBox from "StylesLibrary/Molecules/AuthenticationModule/AuthInputTextBox.js";
import AuthButton from "StylesLibrary/Molecules/AuthenticationModule/AuthButton.js";

const Login = () => {
	return (
		<LoginPageContainer>
			<AuthInputTextBox />
			<AuthInputTextBox />
			<AuthButton />
		</LoginPageContainer>
	);
};

export default Login;
