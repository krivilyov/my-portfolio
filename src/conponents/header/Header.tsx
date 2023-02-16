import { Anton } from "@next/font/google";
import Link from "next/link";
import LanguageSwitcher from "@/conponents/language-switcher/LanguageSwitcher";

import styles from "@/styles/components/Header.module.scss";
const font_Anton = Anton({ weight: "400", preload: false });

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={`${styles.logoContainer} ${font_Anton.className}`}>
					<div className={styles.logoText}>Vanya Krivilyov</div>
					<div className={styles.cursor}>
						<svg
							width="17"
							height="3"
							viewBox="0 0 17 3"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M16.1895 0V2.67188H0.0703125V0H16.1895Z" fill="black" />
						</svg>
					</div>
				</div>
				<div className={styles.menuContainer}>
					<ul className={styles.menu}>
						<li className={`${styles.menuItem} ${styles.active}`}>
							<Link href="/">Обо мне</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/">Навыки</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/">Образование</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/">Опыт работы</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/">Портфолио</Link>
						</li>
						<li className={styles.menuItem}>
							<Link href="/">Контакты</Link>
						</li>
					</ul>
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
}
