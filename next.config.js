const withImages = require('next-images')

module.exports = withImages({
 esModule: true,
 images: {
    disableStaticImages: true,
		domains: ['rickandmortyapi.com'],
  }
});