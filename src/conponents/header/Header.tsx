import { Anton } from "@next/font/google";

import styles from "../../styles/Header.module.scss";
const font_Anton = Anton({ weight: "400", preload: false });

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={`${styles.logoContainer} ${font_Anton.className}`}>
					Vanya Krivilyov<span>&#95;</span>
				</div>
			</div>
		</header>
	);
}
