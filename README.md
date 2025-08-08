# Westpacs - Website Health Monitoring

Welcome to the Westpacs project. This project is dedicated to the Westpacs community and provides comprehensive website health monitoring capabilities.

## ✨ Features

- **Real-time Health Monitoring**: Live status monitoring of website services
- **Visual Status Dashboard**: User-friendly interface showing system health
- **RESTful Health API**: Programmatic access to health check data
- **Command-line Health Check**: Script for automated monitoring
- **Responsive Design**: Works on desktop and mobile devices
- **Auto-refresh**: Status updates automatically every 30 seconds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alzeidyk-svg/westpac.git
cd westpac
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
bun run build
# or
npm run build
```

The built files will be in the `out` directory, ready for static hosting.

## 📊 Health Monitoring Features

### 1. Main Website Status
- Visit the homepage to see the current website status
- Real-time status indicator with green (healthy) or red (unhealthy) status
- Last check timestamp
- Quick access to detailed status page

### 2. Detailed Status Dashboard
- Navigate to `/status` for comprehensive system monitoring
- Individual service status (Server, Database, Cache)
- System information (uptime, version, environment)
- Manual refresh capability
- Auto-refresh every 30 seconds

### 3. Health Check API
Access the health status programmatically:

```bash
# GET request to health endpoint
curl http://localhost:3000/api/health

# Example response:
{
  "status": "healthy",
  "message": "Website is running normally",
  "checks": {
    "server": "healthy",
    "database": "healthy", 
    "cache": "healthy",
    "timestamp": "2025-08-08T05:41:00.686Z",
    "uptime": 0,
    "version": "1.0.0",
    "environment": "development"
  },
  "timestamp": "2025-08-08T05:41:00.686Z"
}
```

### 4. Command-line Health Check
Use the included health check script for monitoring:

```bash
# Check localhost:3000 (default)
node health-check.js

# Check custom URL
node health-check.js https://yoursite.com

# With environment variables
HEALTH_CHECK_HOST=yoursite.com HEALTH_CHECK_PORT=443 HEALTH_CHECK_PROTOCOL=https node health-check.js
```

## 🛠️ Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production 
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `node health-check.js` - Run health check script

## 🏗️ Project Structure

```
westpac/
├── src/
│   ├── app/
│   │   ├── api/health/       # Health check API endpoint
│   │   ├── status/           # Detailed status page
│   │   ├── business/         # Business banking page
│   │   ├── personal/         # Personal banking page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage with status widget
│   └── lib/                  # Utility functions
├── health-check.js           # CLI health check script
├── package.json
├── next.config.js
└── tailwind.config.ts
```

## 🌐 Deployment

The project is configured for static export and can be deployed to:

- **Netlify**: Configured with `netlify.toml`
- **GitHub Pages**: Use the `out` directory after build
- **Vercel**: Direct deployment from repository
- **Any static hosting**: Deploy the `out` directory

### Environment Variables (Optional)

For production deployments, you can configure:

```env
HEALTH_CHECK_HOST=your-domain.com
HEALTH_CHECK_PORT=443
HEALTH_CHECK_PROTOCOL=https
HEALTH_CHECK_TIMEOUT=10000
```

## 🔧 Customization

### Adding New Health Checks
Edit `src/app/api/health/route.ts` to add custom health checks:

```typescript
const checks = {
  server: 'healthy',
  database: await checkDatabase(), // Add your DB check
  cache: await checkCache(),       // Add your cache check
  // Add more services...
};
```

### Styling
The project uses Tailwind CSS. Modify styles in:
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Configuration: `tailwind.config.ts`

## 📝 API Documentation

### Health Check Endpoint

**GET /api/health**

Returns the current health status of the website and its services.

**Response Format:**
```json
{
  "status": "healthy" | "unhealthy",
  "message": "string",
  "checks": {
    "server": "healthy" | "unhealthy",
    "database": "healthy" | "unhealthy",
    "cache": "healthy" | "unhealthy",
    "timestamp": "ISO date string",
    "uptime": "number (seconds)",
    "version": "string",
    "environment": "string"
  },
  "timestamp": "ISO date string"
}
```

**Status Codes:**
- `200`: Healthy status
- `500`: Unhealthy status or error

## 🤝 Contributing

We welcome contributions from the Westpacs community. Please read our contributing guidelines before submitting a pull request.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📜 License

This project is licensed under the ISC License.