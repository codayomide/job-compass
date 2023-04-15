import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    
  const onFormSubmit = data => console.log(data);

  return ( 
    <div id="signup-page">
      <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
        <h2>Sign Up</h2>

        <div className="form-main">
          <div className="input-wrapper">
            <label htmlFor="email"></label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^(?=[^\s@]{1,64}@)[^\s@]+@[^\s@]+\.[^\s@.]+$/ })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">Invalid Email</p>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="username"></label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true, pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$" ,minLength: 8, maxLength: 256})}
              aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username && <p role="alert">Invalid Username</p>}
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="password"></label>
            <input
              type="text"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8, maxLength: 256})}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert">Invalid Password</p>}
          </div>
          
          <button className="submit-btn">Sign Up</button>
        </div>
      </form>    
    </div>
  );
}
 
export default SignUp;