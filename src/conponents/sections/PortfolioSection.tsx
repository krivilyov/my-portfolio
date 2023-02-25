import { Poppins } from "@next/font/google";
import Image from "next/image";
import sovet_direktorov from "./imgs/sovet_direktorov.png";
import sioni from "./imgs/sioni.png";
import vermt from "./imgs/vermt.png";
import oblog from "./imgs/oblog.png";

import styles from "@/styles/sections/PorfolioSection.module.scss";

const font_Poppins = Poppins({ weight: "600", preload: false });

export default function PorfolioSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={`${styles.sectionTitle} ${font_Poppins.className}`}>
					Работы
				</h2>
				<div className={styles.portfolioContainer}>
					<div className={styles.portfolioWrapper}>
						<div className={styles.portfolioItem}>
							<div className={styles.header}></div>
							<div className={styles.content}>
								<Image
									className={styles.contentImg}
									alt="Сайт совета директоров"
									src={sovet_direktorov}
									placeholder="blur"
								/>
							</div>
							<div className={styles.description}>
								<div className={styles.type}>Website</div>
								<div className={styles.title}>
									Совета директоров профессиональных образовательных организаций
									Пермского края{" "}
								</div>
							</div>
						</div>
						<div className={styles.portfolioItem}>
							<div className={styles.header}></div>
							<div className={styles.content}>
								<Image
									className={styles.contentImg}
									alt="Сайт гостиницы Сиони"
									src={sioni}
									placeholder="blur"
								/>
							</div>
							<div className={styles.description}>
								<div className={styles.type}>Website</div>
								<div className={styles.title}>Гостиница “Сиони”</div>
							</div>
						</div>
						<div className={styles.portfolioItem}>
							<div className={styles.header}></div>
							<div className={styles.content}>
								<Image
									className={styles.contentImg}
									alt="Верещагинский многопрофильный техникум"
									src={vermt}
									placeholder="blur"
								/>
							</div>
							<div className={styles.description}>
								<div className={styles.type}>Website</div>
								<div className={styles.title}>
									Верещагинский многопрофильный техникум
								</div>
							</div>
						</div>
						<div className={styles.portfolioItem}>
							<div className={styles.header}></div>
							<div className={styles.content}>
								<Image
									className={styles.contentImg}
									alt="Блог Главатских Ольги"
									src={oblog}
									placeholder="blur"
								/>
							</div>
							<div className={styles.description}>
								<div className={styles.type}>Website</div>
								<div className={styles.title}>Блог Главатских Ольги</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
