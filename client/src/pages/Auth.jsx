import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/AuthPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, isMember } = values;
    if(!email || !password || (!isMember && !name) || (!isMember && !confirmPassword)){
      displayAlert();
      return;
    } 
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <div className="title-form"><h3>{values.isMember ? "Sign In" : "Register"}</h3></div>
        {showAlert && <Alert/>}
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* confirm-password field */}
        {!values.isMember && (
          <FormRow
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            handleChange={handleChange}
          />
        )}
        <button type="submit" className="btn btn-block">
          {values.isMember ? "Login" : "Sign Up"}
        </button>
        <p>
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" onClick={toggleMember}
          className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>      
    </Wrapper>
  );
};

export default Register;
