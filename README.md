# TV Maze

This web application integrates with the TVmaze Public REST API to provide users with information about TV shows.

It's built using Next.js, TypeScript and Tailwind CSS to create a robust, type-safe, and well-styled web application.

## ToC

- [ToC](#toc)
- [Get Started](#get-started)
  - [Prerequisites](#prerequisites)
  - [How to run](#how-to-run)
- [Configuration and Localization](#configuration-and-localization)
- [Technical Overview](#technical-overview)

## Get Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### How to run

First, run:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Configuration and Localization

## Technical Overview

### API Integration

This web application integrates with the TVmaze Public REST API to fetch information about TV shows. The API is located at [https://api.tvmaze.com/](https://api.tvmaze.com/). Extensive documentation of the available endpoints can be found [here](https://www.tvmaze.com/api). By leveraging this API, the application dynamically retrieves show details, episode information, and more, providing users with a comprehensive TV show browsing experience.

### React Context

The application utilizes React Context to manage global state and share data across components efficiently. This allows for centralized state management, reducing prop drilling and making it easier to maintain and update application-wide data. React Context enables seamless communication between components, enhancing the overall user experience.
