// import { Header } from "@components/Header/Header";
import { Layout } from "@components/Layout/Layout";
import { Button } from "@components/Button/Button";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Input } from "@components/Input/Input";
import { SearchIcon } from "@components/Icons/SearchIcon/SearchIcon";
import { Search } from "@components/Search/Search";
import "@styles/app.css";

export default function App() {
  return (
    <Layout moviesCount={3}>
      <Title size="lg">Поиск фильмов</Title>
      <Search onSearch={(query) => console.log(query)} />
      <hr />

      <Title as="h1" size="xl">
        Title
      </Title>
      <Paragraph>Hello World!</Paragraph>
      <hr />
      <div className="row">
        <Button onClick={() => console.log("simple")}>Обычная</Button>
        <Button onClick={() => console.log("secondary")} variant="secondary">
          Вторичная
        </Button>
        <Button onClick={() => console.log("small")} variant="ghost" size="sm">
          Маленькая
        </Button>
        <Button onClick={() => console.log("remove")} variant="danger">
          Удалить
        </Button>
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
      <hr />
      <Input placeholder="Введите текст..." />
      <Input placeholder="Поиск..." icon={<SearchIcon size={18} />} />
      <Input
        placeholder="Поиск..."
        icon={<SearchIcon size={18} />}
        iconPosition="right"
      />
    </Layout>
  );
}
