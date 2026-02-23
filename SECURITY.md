# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to the maintainer. All security vulnerabilities will be promptly addressed.

## Security Best Practices Implemented

### 1. Input Sanitization
- All user inputs are sanitized before storage
- HTML content is cleaned to prevent XSS attacks
- URL and image data are validated separately from text

### 2. Data Storage
- No sensitive data stored in localStorage without encryption
- Session-based authentication (clears on browser close)
- No credentials hardcoded in source code

### 3. Content Security
- Base64 images allowed but with size limits
- External URLs validated before display
- Script injection prevention in HTML content

### 4. Best Practices
- Never commit `.env` files or API keys
- Always use environment variables for secrets
- Keep dependencies updated
- Review code for security issues regularly

## Dependencies Security

This project uses:
- React 18 with TypeScript
- Vite for build tooling
- Various UI libraries (shadcn/ui, Tailwind CSS)

All dependencies are regularly updated to patch security vulnerabilities.
