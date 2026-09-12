import { Header } from "@components/Header/Header";
import "./Layout.css";

export function Layout({ children, moviesCount = 0, className = "" }) {
  return (
    <div className={`layout ${className}`}>
      <Header moviesCount={moviesCount} />
      <main className="layout__content">{children}</main>
    </div>
  );
}
