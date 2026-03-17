import React from "react";

const LoginButton = () => {
	const LOGIN_URL = import.meta.env.PUBLIC_LOGIN;

	return (
		<button
			className="bg-transparent text-white"
			onClick={() => window.open(LOGIN_URL)}
		>
			Login
		</button>
	);
};

export default LoginButton;
