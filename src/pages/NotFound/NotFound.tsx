import { Link } from "react-router";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";

export default function NotFound() {
	return (
		<div className="stack">
			<Title size="lg">Страница не найдена</Title>
			<Paragraph>
				Такой страницы нет. <Link to="/">Вернуться на главную</Link>
			</Paragraph>
		</div>
	);
}
