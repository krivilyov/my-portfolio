import HeroSection from "@/conponents/sections/HeroSection";
import AboutSection from "@/conponents/sections/AboutSection";
import SkillsSection from "@/conponents/sections/SkillsSection";
import EducationSection from "@/conponents/sections/EducationSection";
import JobsSection from "@/conponents/sections/JobsSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<EducationSection />
			<JobsSection />
		</>
	);
}
