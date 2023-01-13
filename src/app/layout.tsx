import Header from "@/conponents/header/Header";

import { Open_Sans } from "@next/font/google";
import "../styles/global.scss";

const font_Open_Sans = Open_Sans({ weight: "400", preload: false });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={font_Open_Sans.className}>
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
