import "./Title.css";

export const Title = ({
  children,
  as: Tag = "h2",
  size = "md",
  className = "",
}) => {
  return <Tag className={`title title-${size} ${className}`}>{children}</Tag>;
};
