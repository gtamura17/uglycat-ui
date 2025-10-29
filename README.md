# Amber AI

Intelligent Automation Platform - Standalone Project

## 🚀 Overview

Amber AI is a comprehensive intelligent automation platform that provides AI-powered solutions for businesses. This standalone project contains all the necessary components to run Amber AI independently.

## 📁 Project Structure

```
amber-ai/
├── app/                    # Next.js app directory
├── src/                    # Source code
├── packages/
│   ├── amber/             # Amber-specific packages
│   │   ├── config/        # Configuration management
│   │   ├── database/      # Database schema and migrations
│   │   └── lib/           # Core libraries
│   └── shared/            # Shared packages
│       ├── types/         # TypeScript type definitions
│       ├── ui/            # UI components library
│       └── utils/         # Utility functions
├── tests/                 # Test files
└── docs/                  # Documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **UI**: Radix UI + Tailwind CSS
- **Testing**: Vitest
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amber-ai
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Set up the database:
```bash
pnpm db:generate
pnpm db:push
```

5. Run the development server:
```bash
pnpm dev
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm type-check` - Run TypeScript type checking
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push database schema
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

## 🏗️ Architecture

Amber AI follows a modular architecture with clear separation of concerns:

- **Frontend**: Next.js application with React components
- **Backend**: API routes and server-side logic
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: Reusable component library
- **Configuration**: Centralized configuration management

## 📦 Packages

### Amber Packages
- `@amber/config` - Configuration management
- `@amber/database` - Database schema and operations
- `@amber/lib` - Core business logic

### Shared Packages
- `@shared/types` - TypeScript type definitions
- `@shared/ui` - UI component library
- `@shared/utils` - Utility functions

## 🔧 Configuration

Configuration is managed through environment variables and the `@amber/config` package. See `.env.example` for required variables.

## 🧪 Testing

Tests are written using Vitest and can be run with:
```bash
pnpm test
```

For UI testing:
```bash
pnpm test:ui
```

## 📚 Documentation

Detailed documentation is available in the `docs/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.