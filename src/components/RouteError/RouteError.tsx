import { Link, useRouteError } from "react-router";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";

export function RouteError() {
	const error = useRouteError();
	const message = error instanceof Error ? error.message : "Не удалось загрузить страницу";

	return (
		<div className="stack">
			<Title size="lg">Что-то пошло не так</Title>
			<Paragraph>
				{message}. <Link to="/">Вернуться на главную</Link>
			</Paragraph>
		</div>
	);
}
