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
- [Deployment](#deployment)

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

The default locale of the application is set to Global English if no other locale parameter is added to the URL, or if locale can't be found. If the URL contains /uk or /gb, the locale is automatically set to GB English. If the URL contains /us the locale is automatically set to US English.

### Locale Selection

Users have the option to change the locale to suit their preferences. The locale selection feature is available in the application's header, allowing users to switch between different locales, such as UK/GB English.

### Content Variation

While the language remains constant (English), the content may vary based on the selected locale. For example, the application only displays TV shows available for the selected locale.

## Technical Overview

### API Integration

This web application integrates with the TVmaze Public REST API to fetch information about TV shows. The API is located at [https://api.tvmaze.com/](https://api.tvmaze.com/). Extensive documentation of the available endpoints can be found [here](https://www.tvmaze.com/api). By leveraging this API, the application dynamically retrieves show details, episode information, and more, providing users with a comprehensive TV show browsing experience.

### React Context

The application utilizes React Context to manage global state and share data across components efficiently. This allows for centralized state management, reducing prop drilling and making it easier to maintain and update application-wide data. React Context enables seamless communication between components, enhancing the overall user experience.

## Deployment

### Deploying to GitHub Pages

To deploy TV Maze web application to GitHub Pages, follow these steps:

1. **Update the `homepage` field in `package.json`:** Ensure that the `homepage` field in the `package.json` file reflects the correct URL where the application will be hosted. For example:
   ```json
   "homepage": "http://josefinelofgren.github.io/tv-maze",

2. **Build the application**
 Before deploying, you need to build the application for production. Run the following command:

```bash
npm run build
```

3. **Deploy to Github Pages**
Once the build process completes, you can deploy the application to GitHub Pages using the deploy script defined in package.json. Run the following command:

```bash
npm run deploy
```

4. **Verify deployment**
After the deployment script finishes running, visit the URL specified in the homepage field of the package.json in your web browser to verify that the application is live.
