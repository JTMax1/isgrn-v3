# ISGRN - Intelligent Solutions Global Resources Nigeria

A modern, responsive website for Intelligent Solutions Global Resources Nigeria, built with Next.js and React.

## What This Project Does

This is a corporate website for ISGRN (Intelligent Solutions Global Resources Nigeria) that showcases the company's services, team, and value propositions. The website features:

- Modern, responsive design with React and TypeScript
- Component-based architecture using Radix UI primitives
- Server-side rendering and static generation with Next.js
- Smooth navigation and user interactions
- Company information including:
  - Hero section
  - About the company
  - Services offered
  - Value propositions
  - Clients and partners showcase
  - Management team profiles
  - Frequently asked questions (FAQ)
  - Contact information

Built with:
- **Next.js 16** - React framework with App Router
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling (via UI components)
- **Lucide React** - Icon library

## Installation / Setup

### Prerequisites

- **Node.js** (version 20 or higher recommended)
- **pnpm** package manager

If you don't have pnpm installed, you can install it globally:

```bash
npm install -g pnpm
```

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd isgrn-v3
```

2. Install dependencies:
```bash
pnpm i
```

## How to Run

### Development Mode

Start the development server:

```bash
pnpm run dev
```

This will:
- Start the Next.js development server on port 3000
- Enable hot module replacement (HMR) for instant updates
- Access the site at `http://localhost:3000`

### Production Build

Build the project for production:

```bash
pnpm run build
```

This will create an optimized production build in the `.next` directory.

### Start Production Server

After building, you can start the production server:

```bash
pnpm run start
```

## Example Usage

Once the development server is running:

1. **Navigate the website** - The main page displays all sections in a single-page application format
2. **Browse services** - Scroll or use navigation to explore company services
3. **View team members** - Check out the management team section
4. **Contact form** - Use the contact section to get in touch with the company
5. **FAQ section** - Find answers to common questions

The website is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile devices

## Project Structure

```
isgrn-v3/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (Next.js App Router)
├── components/           # React components
│   ├── ui/              # Reusable UI components (Radix UI based)
│   ├── figma/           # Figma-specific components
│   ├── About.tsx
│   ├── ClientsPartners.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── ManagementTeam.tsx
│   ├── Navigation.tsx
│   ├── Services.tsx
│   └── ValuePropositions.tsx
├── styles/              # Style files
│   └── globals.css
├── public/              # Static assets
├── index.css            # Global styles
├── package.json         # Dependencies and scripts
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Basic Troubleshooting

### Port 3000 Already in Use

If you see an error that port 3000 is already in use:

**Solution 1** - Kill the process using port 3000:
```bash
# On Linux/Mac
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Solution 2** - Change the port by passing a flag:
```bash
pnpm run dev -- -p 3001
```

### Dependencies Installation Fails

If `pnpm i` fails:

1. Clear the pnpm cache:
```bash
pnpm store prune
```

2. Remove node_modules and try again:
```bash
rm -rf node_modules
pnpm i
```

3. Ensure you're using a compatible Node.js version:
```bash
node --version  # Should be v20 or higher
```

### Build Errors

If you encounter TypeScript or build errors:

1. Check that all dependencies are installed:
```bash
pnpm i
```

2. Clear Next.js cache:
```bash
rm -rf .next
pnpm run build
```

### Styles Not Loading

If components appear unstyled:

1. Ensure all dependencies are installed
2. Check browser console for errors
3. Try clearing browser cache and reloading the page

## Support

For issues or questions about this project, please check:
- The project's issue tracker (if available)
- Contact the ISGRN development team

## License

This is proprietary software for Intelligent Solutions Global Resources Nigeria.
