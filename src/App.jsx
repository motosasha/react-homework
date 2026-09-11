import { Button } from "@components/Button/Button";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";
import "@styles/app.css";

export default function App() {
  return (
    <div className="container">
      <Title as="h1" size="xl">
        Title
      </Title>
      <Paragraph>Hello World!</Paragraph>
      <hr />
      <div className="row">
        <Button>Обычная</Button>
        <Button variant="secondary">Вторичная</Button>
        <Button variant="ghost" size="sm">
          Маленькая
        </Button>
        <Button variant="danger">Удалить</Button>
      </div>
      <hr />
      <div className="stack">
        <Title>Обычный заголовок</Title>
        <Title as="h1" size="xl">
          Большой заголовок
        </Title>
        <Title as="h3" size="sm">
          Маленький заголовок
        </Title>
      </div>
      <hr />
      <div className="stack">
        <Paragraph>Обычный текст параграфа.</Paragraph>

        <Paragraph size="sm" muted>
          Второстепенный текст меньшего размера.
        </Paragraph>

        <Paragraph size="lg">Более крупный текст.</Paragraph>
      </div>
    </div>
  );
}
