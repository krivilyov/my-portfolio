import kilo_logo from "@/conponents/sections/imgs/kilo_logo.svg";
import miro_logo from "@/conponents/sections/imgs/miro_logo.svg";
import rigintel_logo from "@/conponents/sections/imgs/rigintel_logo.svg";

export const jobs = [
	{
		id: 1,
		logo: rigintel_logo,
		period: "Июнь 2022 — По настоящее время (9 месяцев)",
		technologies: [
			"HTML",
			"CSS",
			"SASS",
			"JavaScript",
			"React (hooks)",
			"Charts",
		],
		description:
			"Поддержка веб-сайта компании, front end разработка продукта IR-TEST (react app с дашбордами и виджетами)",
	},
	{
		id: 2,
		logo: miro_logo,
		period: "Август 2019 — Май 2022 (2 года и 10 месяцев)",
		technologies: [
			"HTML",
			"CSS",
			"LESS",
			"SASS",
			"JavaScript",
			"React (hooks)",
			"PHP",
		],
		description:
			"Работа в команде website - создание лендингов, поддержка легаси кода, интеграция с contentful, zapier, hubspot, zendesk. Создание компонентов на react для интеграции их с конструктором лендингов.",
	},
	{
		id: 3,
		logo: kilo_logo,
		period: "Май 2016 — Август 2019 (3 года и 4 месяца)",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"JQuery",
			"PHP",
			"Yii framework",
			"MySQL",
			"ООП",
			"Git",
		],
		description:
			"Создание сайтов и интернет-магазинов на фрэймворке yii. Написание логики front end на JavaScript/PHP и back end на PHP",
	},
];
