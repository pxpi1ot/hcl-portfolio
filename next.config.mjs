import { build } from "velite";
/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	// othor next config here...
	webpack: config => {
		config.plugins.push(new VeliteWebpackPlugin());
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn3.easylink.cc",
				port: "",
				pathname: "/**",
			},
		],
	},
};

class VeliteWebpackPlugin {
	static started = false;
	constructor(/** @type {import('velite').Options} */ options = {}) {
		this.options = options;
	}
	apply(/** @type {import('webpack').Compiler} */ compiler) {
		compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
			if (VeliteWebpackPlugin.started) return;
			VeliteWebpackPlugin.started = true;
			const dev = compiler.options.mode === "development";
			this.options.watch = this.options.watch ?? dev;
			this.options.clean = this.options.clean ?? !dev;
			await build(this.options); // start velite
		});
	}
}
