const debug = process.env.NODE_ENV !== "production";

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	exportPathMap: function () {
		return {
		  "/": { page: "/" },
		}
	},
};
