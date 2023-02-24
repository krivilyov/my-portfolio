"use client";

import Image from "next/image";
import { useState } from "react";
import { Job } from "@/models/models";

import styles from "@/styles/components/JobItem.module.scss";

interface JobItemProps {
	job: Job;
}

export default function JobItem(props: JobItemProps) {
	const { logo, period, technologies, description } = props.job;

	const [jobIsOpen, setJobIsOpen] = useState(false);

	return (
		<li className={`${styles.jobItem} ${jobIsOpen ? styles.jobItemOpen : ""}`}>
			<div className={styles.job}>
				<Image className={styles.logo} alt="Rigintel" src={logo} />
				<div className={styles.period}>{period}</div>
				<ul className={styles.technologies}>
					{technologies &&
						technologies.map((technology, index) => (
							<li key={index + "_" + technology}>{technology}</li>
						))}
				</ul>
				<div
					className={styles.plusminus}
					onClick={() => setJobIsOpen(!jobIsOpen)}
				>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={styles.jobDescriptionContainer}>
				<div className={styles.jobDescription}>{description}</div>
			</div>
		</li>
	);
}
