## Toolchain
For development and building, we use [Vite](https://vite.dev/).

## Linting and style formatting
We use [Biome](https://biomejs.dev/guides/getting-started/) in lieu of ESLint and Prettier. It is recommended to install the Visual Studio Code extension and follow the setup in the `settings.json` template for better IDE integration.

## Component Library
The template uses [shadcn/ui](https://ui.shadcn.com/docs). This combines [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) and the [Radix UI](https://www.radix-ui.com/) component library, which allows for easy, scalable open-sourced, accessible and customizable component creation for your own component library.

Note that Tailwind v4 does not require a separate configuration JSON file, and has been re-designed for a more seamless integration with frameworks, such as Vite. The `tailwindcss.config.js` file exists for use with the Visual Studio Code TailwindCSS extension only, so that Intellisense will work properly. If you are not using the VSCode extension, you can safely remove this file. The `settings.json` file template is configured to help the extension work correctly in your IDE.

## Testing
### Unit Testing
We use [vitest](https://vitest.dev/guide/) for the unit testing of component logic. We also use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) (RTL) to simulate how the User interacts with the application and follow the best practices of the library. `vitest` is currently in development of there own libraries to replace `jsdom` and all the other spin-offs, but it is still in development and experimental phases. When these become live, we will most likely update the template to use the native tools. Reference: `@vitest/browser` and this sample template for getting started: [vitest with React](https://github.com/vitest-tests/browser-examples/tree/main/examples/react).

### Integration
While `vitest` is sufficient for low-level and shallow unit testing, [Microsoft's Playwright](https://playwright.dev/docs/intro) fills in the gap for all higher level front-end testing needs.
