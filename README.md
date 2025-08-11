# GovHub

GovHub is an experimental platform for exploring and discussing U.S. congressional legislation. It presents each bill in a GitHub‑style interface with summaries, PDF viewing, and discussion threads to make the legislative process easier to follow.

## Live Prototype

A working prototype is available at [govhub-five.vercel.app](https://govhub-five.vercel.app).

## Features

- **Bill Explorer** – Detailed bill pages with summaries, full-text PDFs, and metadata
- **Discussions** – GitHub-like threaded comments with Markdown support
- **Legislative Context** – Tabs for actions, amendments, sponsors, and related bills
- **Responsive UI** – Built with Tailwind CSS and optimized for desktop and mobile
- **Mock Data** – Uses sample data while Congress.gov API integration is under development

## Tech Stack

- Next.js 15 (App Router) & React 19
- TypeScript
- Tailwind CSS
- Lucide React icons, ReactMarkdown, Sonner toasts, React-PDF

## Project Structure

```
app/            Next.js routes and layouts
components/     UI components including bill tabs
lib/            Data fetchers, utilities, and mock data
public/         Static assets
```

## Getting Started

Prerequisites: Node.js 18+ and npm.

```
git clone https://github.com/immanuel-peter/govhub.git
cd govhub
npm install
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! Open an issue or submit a pull request to discuss changes.

---

**GovHub** — making government data easier to explore.
