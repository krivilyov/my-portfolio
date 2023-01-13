import { Open_Sans } from "@next/font/google";
import "../styles/global.scss";

const font = Open_Sans({ weight: "400", preload: false });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={font.className}>
			<head />
			<body>{children}</body>
		</html>
	);
}
