import "./Paragraph.css";

export const Paragraph = ({
  children,
  size = "md",
  muted = false,
  className = "",
}) => {
  return (
    <p
      className={`paragraph paragraph-${size} ${muted ? "paragraph-muted" : ""} ${className}`}
    >
      {children}
    </p>
  );
};
