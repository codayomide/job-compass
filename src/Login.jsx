import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onFormSubmit = data => console.log(data);

    return ( 
        <div id="login-page">
            <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Log in</h2>

                <div className="form-main">
                    <div className="input-wrapper">
                        <label htmlFor="userlogin"></label>
                        <input
                        type="text"
                        placeholder="Username/Email"
                        {...register("usernameOrEmail", {
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
                        aria-invalid={errors.usernameOrEmail ? "true" : "false"}
                        />
                        {errors.usernameOrEmail && <p role="alert">{errors.usernameOrEmail.message}</p>}
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="password"></label>
                        <input
                            type="text"
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
                
                    <button className="submit-btn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
 
export default Login;