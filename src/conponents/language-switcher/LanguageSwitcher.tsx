import styles from "@/styles/components/LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
	return (
		<div className={styles.switcherContainer}>
			<div className={`${styles.switcherItem} ${styles.active}`}>RU</div>
			<div className={`${styles.switcherItem}`}>EN</div>
		</div>
	);
}
