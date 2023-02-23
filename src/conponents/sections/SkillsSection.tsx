import Image from "next/image";
import php_icon from "./imgs/php_icon.svg";
import js_icon from "./imgs/js_icon.svg";
import MySQL_icon from "./imgs/MySQL_icon.svg";
import HTML_icon from "./imgs/HTML_icon.svg";
import docker_icon from "./imgs/docker_icon.svg";
import git_icon from "./imgs/git_icon.svg";
import Nginx_icon from "./imgs/Nginx_icon.svg";
import Linux_icon from "./imgs/Linux_icon.png";

import styles from "@/styles/sections/SkillsSection.module.scss";

export default function SkillsSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.skillsContainer}>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov PHP knowledge"
							src={php_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>PHP</h4>
							<div className={styles.skillDescription}>
								Vanilla, Silex, Yii, Yii2
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov JS knowledge"
							src={js_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>JavaScript</h4>
							<div className={styles.skillDescription}>
								Vanilla, jQuery, React (Hooks), Next.js, Node.js, Nest.js
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov MySQL knowledge"
							src={MySQL_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>MySQL</h4>
							<div className={styles.skillDescription}>
								Хранение и выборка данных
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov HTML and CSS knowledge"
							src={HTML_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>HTML, CSS</h4>
							<div className={styles.skillDescription}>
								Адаптивная верстка (break points, scale), препроцессоры LESS,
								SASS.
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov docker knowledge"
							src={docker_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>Docker</h4>
							<div className={styles.skillDescription}>
								Для обеспечения быстрого развёртывания единой среды разработки
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov knowledge"
							src={git_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>Git</h4>
							<div className={styles.skillDescription}>
								Система контроля версий для работы в команде
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov Nginx knowledge"
							src={Nginx_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>Сервер NGINX</h4>
							<div className={styles.skillDescription}>
								Настройка и использование сервера NGINX
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<Image
							className={styles.skillImg}
							alt="Vanya Krivilyov Linux knowledge"
							src={Linux_icon}
						/>
						<div className={styles.skillDescriptionContainer}>
							<h4>Unix-подобные ОС</h4>
							<div className={styles.skillDescription}>
								В работе в основном использую MacOS и Windows.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
