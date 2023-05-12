import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
	const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

	const handleUsernameBlur = () => {
		setIsUsernameFocused(false);
	};

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

	const handleEmailBlur = () => {
		setIsEmailFocused(false);
	};

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

	const handlePassWordBlur = () => {
		setIsPasswordFocused(false);
	};

	const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

	const handleConfirmPassWordBlur = () => {
		setIsConfirmPasswordFocused(false);
	};

	const passwordRef = useRef();

  const onFormSubmit = async (data) => {
		try {
      const response = await fetch('https://drab-tan-chimpanzee-hose.cyclic.app/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
    	console.error(error);
    }
  };

  return ( 
    <div id="signup-page">
      <Navbar />
      <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
        <h2>Sign Up</h2>

        <div className="form-main">

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
							onBlur={handleUsernameBlur}
              aria-invalid={errors.username ? "true" : "false"}
            />

            {errors.username && <p role="alert">{errors.username.message}</p>}
          </div>

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
							onBlur={handleEmailBlur}
              aria-invalid={errors.email ? "true" : "false"}
            />

            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="password">{isPasswordFocused ? "Password" : null}</label>
            <input
              type="password"
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
						onBlur={handlePassWordBlur}
						aria-invalid={errors.password ? "true" : "false"}
						ref={passwordRef}
					/>
					{errors.password && <p role="alert">{errors.password.message}</p>}
				</div>

				<div className="input-wrapper">
            <label htmlFor="confirmPassword">{isConfirmPasswordFocused ? "Confirm Password" : null}</label>
            <input
              type="password"
              {...register("password", {
                required: 'This field is required',
                minLength: {
                  value: 8,
								message: 'Password is too short'
							},
							maxLength: {
								value: 60,
								message: 'Password is too long'
							},
							validate: (value) => value === passwordRef.current.value || "Passwords do not match"
						})}
						placeholder={isConfirmPasswordFocused ? null : "Confirm Password"}
						onFocus={handleConfirmPasswordFocus}
						onBlur={handleConfirmPassWordBlur}
						aria-invalid={errors.confirmPassword ? "true" : "false"}
					/>
					{errors.confirmPassword && <p role="alert">{errors.confirmPassword.message}</p>}
				</div>
				
				<button className="submit-btn">Sign Up</button>
			</div>
		</form>    
		</div>
	);
}
 
export default SignUp;