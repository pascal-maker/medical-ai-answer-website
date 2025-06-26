# Medical AI Student Answer Website (Vibecoding)

A modern, scalable platform for medical entrance exam preparation, inspired by Asclepia. Built with Next.js, NestJS, and PostgreSQL.

## 🚀 Features

### Core Features (MVP)
- **Timed MCQ Practice Sessions** - Replicate official test environments
- **Full Exam Simulator** - 240-minute timed exams with progress tracking
- **Detailed Explanations** - Rich corrections with course summaries
- **Flash Questions** - Spaced repetition for rapid recall
- **Progress Dashboard** - Track performance over time

### Advanced Features (v1+)
- **Adaptive Learning** - Personalized question weighting based on performance
- **Topic Filtering** - Advanced filtering by subject, difficulty, year
- **Performance Analytics** - Score tracking, peer comparisons, predictive milestones
- **Community Features** - Leaderboards, discussion forums, peer challenges

## 🏗️ Architecture

```
┌──────────────────────┐
│   Next.js Frontend   │  ← React 19 + TypeScript + TailwindCSS
└──────────────────────┘
           │
           ▼
┌──────────────────────┐
│   NestJS Backend     │  ← Node 20 + TypeScript + Prisma
└──────────────────────┘
           │
           ▼
┌──────────────────────┐
│   PostgreSQL 16      │  ← Relational data + JSONB for flexibility
└──────────────────────┘
           │
           ▼
┌──────────────────────┐
│   Redis 8            │  ← Session cache, leaderboards, flash repetition
└──────────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript 5.x** - Type safety
- **TailwindCSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **React Query** - Server state management
- **React Hook Form + Zod** - Form handling and validation

### Backend
- **NestJS 11** - Node.js framework
- **Prisma** - Type-safe database ORM
- **PostgreSQL 16** - Primary database
- **Redis 8** - Caching and sessions
- **JWT** - Authentication
- **Stripe** - Payment processing

### DevOps
- **Docker** - Containerization
- **GitHub Actions** - CI/CD
- **AWS Fargate** - Serverless deployment
- **Terraform** - Infrastructure as Code

## 📦 Project Structure

```
├── frontend/                 # Next.js application
│   ├── app/                 # App Router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   └── types/               # TypeScript type definitions
├── backend/                 # NestJS application
│   ├── src/
│   │   ├── modules/         # Feature modules
│   │   ├── common/          # Shared utilities
│   │   └── prisma/          # Database schema and migrations
│   └── test/                # Backend tests
├── shared/                  # Shared types and utilities
└── docker-compose.yml       # Local development setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker and Docker Compose
- PostgreSQL 16
- Redis 8

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd medical-ai-student-answer-website
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the development environment:**
   ```bash
   # Start all services
   npm run dev
   
   # Or start individually
   npm run dev:frontend  # Frontend on http://localhost:3000
   npm run dev:backend   # Backend on http://localhost:3001
   ```

4. **Set up the database:**
   ```bash
   cd backend
   npx prisma migrate dev
   npx ts-node src/prisma/seed.ts
   ```

## 📋 Development Roadmap

| Phase | Timeline | Features |
|-------|----------|----------|
| **MVP** | 6 weeks | Basic MCQ practice, exam simulator, user auth |
| **v1** | 4 weeks | Adaptive sessions, dashboards, media explanations |
| **v2** | 6 weeks | Community features, advanced question types |
| **v3** | 4 weeks | AI hints, mobile app, teacher mode |

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend in development
- `npm run build` - Build all applications
- `npm run test` - Run tests across all workspaces
- `npm run lint` - Lint all code
- `npm run type-check` - Type check all TypeScript code

## 📚 Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [API Documentation](./backend/docs/api.md)
- [Database Schema](./backend/prisma/schema.prisma)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@medical-ai-platform.com or create an issue in this repository. 
