module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 1000, // Set to a high value to effectively disable max line length
  overrides: [
    {
      files: ['*.ts', '*.js'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
