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
            <label htmlFor=""></label>
            <input type="text" placeholder="Your email" />
          </div>
          
          <div className="input-wrapper">
            <label htmlFor=""></label>
            <input type="text" placeholder="Your password" />
          </div>
          
          <button className="submit-btn">Sign Up</button>
        </div>
      </form>    
    </div>
  );
}
 
export default SignUp;