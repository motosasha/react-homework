import { useState } from "react";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import { SearchIcon } from "@components/Icons/SearchIcon/SearchIcon";
import "./Search.css";

export function Search({
  placeholder = "Поиск фильмов...",
  onSearch,
  className = "",
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <form className={`search ${className}`} onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<SearchIcon />}
      />
      <Button type="submit">Найти</Button>
    </form>
  );
}
