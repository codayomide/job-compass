import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import Navbar from "./Navbar";

const Login = () => {
    const [token, setToken] = useState(null);
    const [loginErrors, setLoginErrors] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
    }, []);
     
    const onFormSubmit = (data) => {
        fetch('https://drab-tan-chimpanzee-hose.cyclic.app/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            const token = data.accessToken;

            localStorage.setItem('token', token);

            setToken(token);
            console.log(token)

            window.location.href = '/dashboard';

            setLoginErrors(data.message);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return ( 
        <div id="login-page">
            <Navbar />
            <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
            <h2>Log in</h2>

            <div className="form-main">
                <div className="input-wrapper">
                    <label htmlFor="userlogin"></label>
                    <input
                    type="text"
                    placeholder="Username"
                    {...register("username", {
                        required: 'This field is required', 
                        pattern: {
                            value: /(?!.*\s)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$|^(?!.*\s)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*/
                            ,
                            message: 'Please enter a valid email or username'
                        },
                        minLength: {
                            value: 6,
                            message: 'Please enter a valid email or username'
                        }
                    })}
                    aria-invalid={errors.username ? "true" : "false"}
                    />
                    {errors.username && <p role="alert">{errors.username.message}</p>}
                </div>
        
                <div className="input-wrapper">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder="Password"
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
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p role="alert">{errors.password.message}</p>}
                </div>

                <button className="submit-btn">Log in</button>
                
                {loginErrors && <p role="alert">{loginErrors}</p>}
                </div>
            </form>
        </div>
    );
}
 
export default Login;
