import FormElement from "../form-element/formElement";
import Button from "../button/button";
import { useState } from "react";
import {
  signinUserWithGooglePopup,
  storeUsers,
  signinUser,
} from "../../firebase/fb-config";
import "./signin.scss";

const defaultformValue = {
  email: "",
  password: "",
};

const afterclick = async () => {
  const response = await signinUserWithGooglePopup();
  // console.log(response);
  storeUsers(response.user);
};

const SignIn = () => {
  const [formState, setFormState] = useState(defaultformValue);
  const { email, password } = formState;

  const formSubmit = (event) => {
    event.preventDefault();
    signinUser(email, password);
    setFormState(defaultformValue);
  };

  const formOnChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });

    // console.log(event.target.name, formState);
  };

  return (
    <div className="sign-up-container">
      <h1>have an account?</h1>
      <span>sign in with email and password</span>
      <form onSubmit={formSubmit}>
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

        <div className="buttonContainer">
          <Button title="sign in" type="submit" />
          <Button
            onClick={afterclick}
            title=" google sign in "
            type="button"
            name="google"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
