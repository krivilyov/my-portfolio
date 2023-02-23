import Image from "next/image";
import table_cat from "./imgs/table_cat.svg";
import { Racing_Sans_One } from "@next/font/google";

import styles from "@/styles/sections/HeroSection.module.scss";
const font_Racing_Sans_One = Racing_Sans_One({ weight: "400", preload: false });

export default function HeroSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.col}>
					<div className={styles.quoteContainer}>
						<div
							className={`${styles.quoteSimbol} ${font_Racing_Sans_One.className}`}
						>
							&ldquo;
						</div>
						<div className={styles.quote}>
							Большинство хороших программистов делают свою работу не потому,
							что ожидают оплаты или признания, а потому что получают
							удовольствие от программирования.
						</div>
						<div className={styles.quoteSignature}>Linus Torvalds</div>
					</div>
				</div>
				<div className={styles.col}>
					<Image
						className={styles.table_catImg}
						alt="Programming space"
						src={table_cat}
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
}
