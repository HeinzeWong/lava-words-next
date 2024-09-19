/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'landingpage.huglemon.com',
			},
		],
	},
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: [
				'html-loader',
				'markdown-loader'
			],
		});
		return config;
	},
};

export default nextConfig;
