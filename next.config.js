/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
};

const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `@import "break_points.scss";`,
	},
};

module.exports = nextConfig;
