import Link from "next/link";
import Image from "next/image";
import avatar from "./imgs/avatar.jpg";
import vk_logo from "./imgs/vk_logo.svg";
import facebook_logo from "./imgs/facebook_logo.svg";
import github_logo from "./imgs/github_logo.svg";
import habr_career_logo from "./imgs/habr_career_logo.svg";
import AboutChart from "@/conponents/charts/about-chart/AboutChart";

import styles from "@/styles/sections/AboutSection.module.scss";

export default function AboutSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.leftCol}>
					<div className={styles.leftColContentContainer}>
						<div className={styles.avatarContainer}>
							<Image
								className={styles.avatarImg}
								alt="Vanya Krivilyov avatar"
								src={avatar}
								placeholder="blur"
							/>
						</div>
						<ul className={styles.socialLinks}>
							<li>
								<Link href="/">
									<Image
										className={styles.socialVK}
										alt="Vanya Krivilyov VK social media"
										src={vk_logo}
									/>
								</Link>
							</li>
							<li>
								<Link href="/">
									<Image
										className={styles.socialFb}
										alt="Vanya Krivilyov Facebook social media"
										src={facebook_logo}
									/>
								</Link>
							</li>
							<li>
								<Link href="/">
									<Image
										className={styles.github}
										alt="Vanya Krivilyov github repositories"
										src={github_logo}
									/>
								</Link>
							</li>
							<li>
								<Link href="/">
									<Image
										className={styles.habr_career}
										alt="Vanya Krivilyov habr career"
										src={habr_career_logo}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.rightCol}>
					<div className={styles.rightColContentContainer}>
						<div className={styles.aboutDescription}>
							Ответственный и трудолюбивый. Люблю стабильность и надежность.
							Легко берусь за то, что интересно. Обожаю общаться с интересными
							людьми и терпеть не могу зануд.
						</div>
						<div className={styles.chartContainer}>
							<div className={styles.chartWrapper}>
								<AboutChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
