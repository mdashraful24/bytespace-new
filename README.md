# ByteSpace

ByteSpace is a modern learning platform landing page designed to help people discover courses, choose learning paths, grow their skills, and connect with a creative learning community.

**Live demo:** [bytespace-new-dun.vercel.app](https://bytespace-new-dun.vercel.app/)

[![ByteSpace landing page screenshot](https://drive.google.com/uc?export=view&id=1yyyHz56scYpCTfSuv69UXMEcrAuZxRua)](https://drive.google.com/file/d/1yyyHz56scYpCTfSuv69UXMEcrAuZxRua/view?usp=sharing)

If the preview does not load, [open the screenshot in Google Drive](https://drive.google.com/file/d/1yyyHz56scYpCTfSuv69UXMEcrAuZxRua/view?usp=sharing).

## Key Features

- Responsive landing page for desktop and mobile screens
- Hero section with primary calls to action and featured course cards
- Course discovery and learning path sections
- Growth and creator-focused content sections
- Community showcase and brand logo band
- Dedicated sign-in and sign-up routes
- Reusable React components with locally managed visual assets

## Technologies

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4 with PostCSS
- [Lucide React](https://lucide.dev/) for icons
- [Biome](https://biomejs.dev/) for formatting and linting
- [Bun](https://bun.sh/) as the package manager

## Dependencies

### Runtime

- `next`
- `react`
- `react-dom`
- `lucide-react`

### Development

- `@biomejs/biome`
- `@tailwindcss/postcss`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `babel-plugin-react-compiler`
- `tailwindcss`
- `typescript`

Exact versions and ranges are defined in [`package.json`](package.json).

## Run Locally

### Prerequisites

- Node.js 20 or newer
- Bun 1.4.2 or newer

### Installation

Clone the repository and install its dependencies:

```bash
git clone <repository-url>
cd bytespace-new
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
bun run dev      # Start the development server
bun run build    # Create a production build
bun run start    # Serve the production build
bun run lint     # Check the project with Biome
bun run format   # Format files with Biome
```

## Other Links

- [Next.js documentation](https://nextjs.org/docs)
- [React documentation](https://react.dev/)
