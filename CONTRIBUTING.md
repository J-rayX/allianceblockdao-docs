# Contributing to AllianceBlock DAO Documentation

Thank you for your interest in contributing to the AllianceBlock DAO documentation! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Issues

- Check if the issue already exists in our [GitHub Issues](link-to-issues)
- If not, create a new issue, providing as much relevant information as possible
- Use a clear, descriptive title
- Include steps to reproduce if reporting a bug

### Submitting Changes

1. Fork the repository
2. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes
4. Test your changes locally using `npm run dev` or `yarn dev`
5. Commit your changes:
```bash
git commit -am 'Add description of your changes'
```
6. Push to your fork:
```bash
git push origin feature/your-feature-name
```
7. Create a Pull Request

### Pull Request Guidelines

- Give your PR a clear, descriptive title
- Describe your changes in detail
- Link to any related issues
- Ensure your PR only includes the changes related to your feature/fix
- Make sure the documentation builds correctly
- Preview links will be automatically generated for your PR

## Documentation Style Guide

### File Structure
- Place new documentation in the appropriate section
- Use kebab-case for filenames: `my-new-page.md`

### Markdown Guidelines
- Use H1 (#) for page titles
- Use H2 (##) for major sections
- Use H3 (###) for subsections
- Use code blocks with appropriate language tags
```js
// JavaScript code here
```

### Content Guidelines
- Be clear and concise
- Use active voice
- Provide examples where appropriate
- Link to other relevant documentation
- Keep the target audience in mind (both technical and non-technical users)

## Local Development

### Setting Up Your Environment

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Visit `http://localhost:4321` in your browser

### Testing Your Changes

- Ensure all links work
- Check that code examples are correct and properly formatted
- Verify that images are displayed correctly
- Test on both desktop and mobile views

## Getting Help

If you need help with contributing:
- Join the [AllianceBlock DAO Discord](https://discord.com/invite/hF7AGgt)
- Open an issue with your question

## Code of Conduct

Please follow our [Code of Conduct](link-to-code-of-conduct) when contributing to this project.

## License

By contributing to this documentation, you agree that your contributions will be licensed under the same license as the original documentation.