## Toolchain
For development and building, we use [Vite](https://vite.dev/).

## Linting and style formatting
We use [Biome](https://biomejs.dev/guides/getting-started/) in lieu of ESLint and Prettier. It is recommended to install the Visual Studio Code extension and follow the setup in the `settings.json` template for better IDE integration.

## Component Library
The template uses [shadcn/ui](https://ui.shadcn.com/docs). This combines [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) and the [Radix UI](https://www.radix-ui.com/) component library, which allows for easy, scalable open-sourced, accessible and customizable component creation for your own component library.

Note that Tailwind v4 does not require a separate configuration JSON file, and has been re-designed for a more seamless integration with frameworks, such as Vite. The `tailwindcss.config.js` file exists for use with the Visual Studio Code TailwindCSS extension only, so that Intellisense will work properly. If you are not using the VSCode extension, you can safely remove this file. The `settings.json` file template is configured to help the extension work correctly in your IDE.

