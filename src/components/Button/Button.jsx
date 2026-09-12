import "./Button.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
