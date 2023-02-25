import Image from "next/image";
import { Poppins } from "@next/font/google";
import pkts_icon from "./imgs/pkts_icon.svg";
import pnipu_icon from "./imgs/pnipu_icon.svg";
import rmc_icon from "./imgs/rmc_icon.svg";
import HTMLAcademy_icon from "./imgs/HTMLAcademy_icon.svg";
import skyeng_icon from "./imgs/skyeng_icon.png";

import styles from "@/styles/sections/EducationSection.module.scss";

const font_Poppins = Poppins({ weight: "600", preload: false });

export default function EducationSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={`${styles.sectionTitle} ${font_Poppins.className}`}>
					Образование
				</h2>
				<div className={styles.mainEducationContainer}>
					<div className={styles.educationItem}>
						<Image
							className={styles.educationIcon}
							alt="Perm College of Transport and Service"
							src={pkts_icon}
						/>
						<div className={styles.title}>
							Пермский колледж
							<br /> транспорта и сервиса
						</div>
						<div className={styles.subTitle}>Специальность</div>
						<div className={styles.description}>
							Техническое обслуживание и ремонт
							<br /> автомобильного транспорта
						</div>
					</div>
					<div className={styles.educationItem}>
						<Image
							className={styles.educationIcon}
							alt="Perm National Research Polytechnic University"
							src={pnipu_icon}
						/>
						<div className={styles.title}>
							Пермский национальный исследовательский политехнический
							университет
						</div>
						<div className={styles.subTitle}>Кафедра</div>
						<div className={styles.description}>
							Автомобили и автомобильное хозяйство
						</div>
					</div>
					<div className={styles.educationItem}>
						<Image
							className={styles.educationIcon}
							alt="Regional Intersectoral Institute of Retraining"
							src={rmc_icon}
						/>
						<div className={styles.title}>
							Институт повышения <br /> квалификации РМЦПК
						</div>
						<div className={styles.subTitle}>Специальность</div>
						<div className={styles.description}>
							Программирование и разработка <br /> интерактивных WEB-проектов
						</div>
					</div>
				</div>

				<div className={styles.addEducationContainer}>
					<div className={styles.addEducationItem}>
						<div className={styles.addEducationIconContainer}>
							<Image
								className={styles.addEducationIcon}
								alt="HTMLAcademy"
								src={HTMLAcademy_icon}
							/>
						</div>
						<div className={styles.title}>
							Профессиональный <br /> JavaScript ур. 2
						</div>
						<div className={styles.learningPeriod}>
							Март 2020 — Май 2020
							<br /> (2 месяца)
						</div>
						<div className={styles.description}>
							Разработка проекта Киномания. SPA приложение с выбором что
							посмотореть, голосованием и комментариями на ванильном JS.
						</div>
					</div>
					<div className={styles.addEducationItem}>
						<div className={styles.addEducationIconContainer}>
							<Image
								className={styles.addEducationIcon}
								alt="HTMLAcademy"
								src={HTMLAcademy_icon}
							/>
						</div>
						<div className={styles.title}>
							React. Разработка сложных клиентских приложений
						</div>
						<div className={styles.learningPeriod}>
							Сентябрь 2020 — Декабрь 2020 <br /> (3 месяца)
						</div>
						<div className={styles.description}>
							Разработка SPA приложения &quot;6 городов&quot; с возможностью
							просматривать предложения аренды, добавления в избранное,
							голосования и добавления отзывов.
						</div>
					</div>
					<div className={styles.addEducationItem}>
						<div className={styles.addEducationIconContainer}>
							<Image
								className={styles.addEducationIcon}
								alt="SkyEng"
								src={skyeng_icon}
							/>
						</div>
						<div className={styles.title}>
							Изучение <br /> английского языка
						</div>
						<div className={styles.learningPeriod}>
							Январь 2020 — По настоящее время <br />
							(3 года и 1 месяц)
						</div>
						<div className={styles.description}>
							Английский язык <br />{" "}
							<span className={styles.bold}>Intermediate</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
