import { useState } from "react";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import { login } from "@utils/auth";
import styles from "./LoginForm.module.css";

export function LoginForm({ onSuccess }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = login(name);
    if (!user) return;

    onSuccess?.(user);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Вход</h2>

      <Input
        name="name"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button type="submit">Войти</Button>
    </form>
  );
}
