import "./Input.css";

export const Input = ({
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {icon && iconPosition === "left" && (
        <span className="input-icon input-icon-left">{icon}</span>
      )}

      <input
        className={`input ${icon ? `input-with-icon-${iconPosition}` : ""}`}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className="input-icon input-icon-right">{icon}</span>
      )}
    </div>
  );
};
