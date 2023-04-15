import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
		
	const onFormSubmit = data => console.log(data);

	const [isEmailFocused, setIsEmailFocused] = useState(false);
	const [isUsernameFocused, setIsUsernameFocused] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);

	const handleEmailFocus = () => {
		setIsEmailFocused(true);
	};

	const handleUsernameFocus = () => {
		setIsUsernameFocused(true);
	};

	const handlePasswordFocus = () => {
		setIsPasswordFocused(true);
	};

	return ( 
		<div id="signup-page">
		<form className="form" onSubmit={handleSubmit(onFormSubmit)}>
			<h2>Sign Up</h2>

			<div className="form-main">
				<div className="input-wrapper">
					<label htmlFor="email">{isEmailFocused ? "Email" : null}</label>

					<input
						type="text"
						{...register("email", {
							required: "This field is required",
							pattern: {
								value: /^(?=[^\s@]{1,64}@)[^\s@]+@[^\s@]+\.[^\s@.]+$/,
								message: 'Invalid Email'
							}
						})}
						placeholder={isEmailFocused ? null : "Email"}
						onFocus={handleEmailFocus}
						aria-invalid={errors.email ? "true" : "false"}
					/>

					{errors.email && <p role="alert">{errors.email.message}</p>}
				</div>

				<div className="input-wrapper">
					<label htmlFor="username">{isUsernameFocused ? "Username" : null}</label>

					<input
						type="text"
						{...register("username", {
							required: 'This field is required',
							pattern: {
								value: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
								message: 'Invalid Username'
							}, 
							minLength: {
								value: 6,
								message: 'Username is too short'
							},
							maxLength: 256
						})}
						placeholder={isUsernameFocused ? null : "Username"}
						onFocus={handleUsernameFocus}
						aria-invalid={errors.username ? "true" : "false"}
					/>

					{errors.username && <p role="alert">{errors.username.message}</p>}
				</div>
				
				<div className="input-wrapper">
					<label htmlFor="password">{isPasswordFocused ? "Password" : null}</label>
					<input
						type="text"
						{...register("password", {
							required: 'This field is required',
							minLength: {
								value: 8,
								message: 'Password is too short'
							},
							maxLength: {
								value: 60,
								message: 'Password is too long'
							}
						})}
						placeholder={isPasswordFocused ? null : "Password"}
						onFocus={handlePasswordFocus}
						aria-invalid={errors.password ? "true" : "false"}
					/>
					{errors.password && <p role="alert">{errors.password.message}</p>}
				</div>
				
				<button className="submit-btn">Sign Up</button>
			</div>
		</form>    
		</div>
	);
}
 
export default SignUp;