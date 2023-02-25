import { Poppins } from "@next/font/google";
import JobItem from "../job-item/JobItem";
import { jobs } from "@/mocks/data";

import styles from "@/styles/sections/JobsSection.module.scss";

const font_Poppins = Poppins({ weight: "600", preload: false });

export default function JobsSection() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={`${styles.sectionTitle} ${font_Poppins.className}`}>
					Опыт работы
				</h2>
				<ul className={styles.jobsList}>
					{jobs && jobs.map((job) => <JobItem job={job} key={job.id} />)}
				</ul>
			</div>
		</div>
	);
}
