import { useState } from "react";
import { signUpByEmailAndPassword } from "../../firebase/fb-config";
import Button from "../button/button";
import FormElement from "../form-element/formElement";
import "./signup.scss";

const defaultformValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formState, setFormState] = useState(defaultformValue);
  const { displayName, email, password, confirmPassword } = formState;

  const formSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      signUpByEmailAndPassword(email, password, displayName);

      setFormState(defaultformValue);
    }
  };

  const formOnChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h1>don't have an account?</h1>
      <span>sign in with email and password</span>
      <form onSubmit={formSubmit}>
        <FormElement
          title="Display Name"
          type="text"
          onChange={formOnChange}
          name="displayName"
          value={displayName}
        />

        <FormElement
          title="email"
          type="email"
          onChange={formOnChange}
          name="email"
          value={email}
        />

        <FormElement
          title="password"
          type="password"
          onChange={formOnChange}
          name="password"
          value={password}
        />

        <FormElement
          title="confirm password"
          type="password"
          onChange={formOnChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button title="sign up" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
