import SignUp from "../sign-up/sign-up";
import SignIn from "../signin/signin";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
