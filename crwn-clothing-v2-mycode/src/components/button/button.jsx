import "./button.scss";

const ButtonClassName = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ name, title, ...otherprop }) => {
  return (
    <button
      {...otherprop}
      className={`${ButtonClassName[name]} button-container`}
    >
      {title}
    </button>
  );
};

export default Button;
