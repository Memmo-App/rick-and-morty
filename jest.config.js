module.exports = {
	setupFilesAfterEnv: ["./jest.setup.js"],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/utils/mockStyles.js',
	}
};