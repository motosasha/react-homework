import { useState, type SubmitEventHandler } from "react";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import { useAuth } from "@context/AuthContext";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setError("");

    const user = login(name);

    if (!user) {
      setError("Введите имя");
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Вход</h2>

      <Input
        name="name"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (error) setError("");
        }}
      />

      {error && <p className={styles.error}>{error}</p>}

      <Button type="submit">Войти</Button>
    </form>
  );
}
