import "./formelements.scss";

const FormElement = ({ title, type, onChange, name, value }) => {
  return (
    <div className="group">
      <input
        type={type}
        required
        onChange={onChange}
        name={name}
        value={value}
        className="form-input"
      />
      {title && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {" "}
          {title}{" "}
        </label>
      )}
    </div>
  );
};

export default FormElement;
