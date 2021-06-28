const withImages = require('next-images')

module.exports = withImages({
	webpack: (config, { webpack }) => {
		config.plugins.push(new webpack.IgnorePlugin(/\/test\//));
    config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false
		};

    return config;
  },
 	esModule: true,
 	images: {
    disableStaticImages: true,
		domains: ['rickandmortyapi.com'],
  },
});