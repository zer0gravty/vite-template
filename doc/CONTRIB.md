## Toolchain
For development and building, we use [Vite](https://vite.dev/).

## Linting and style formatting
We use [Biome](https://biomejs.dev/guides/getting-started/) in lieu of ESLint and Prettier. It is recommended to install the Visual Studio Code extension and follow the setup in the `settings.json` template for better IDE integration.

## Routing
We've opted for the robust suite of libraries from Tanstack and use [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) for the application route layer.

## Components and CSS/Styling
The template uses [shadcn/ui](https://ui.shadcn.com/docs). This combines [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) and the [Radix UI](https://www.radix-ui.com/) component library, which allows for easy, scalable open-sourced, accessible and customizable component creation for your own component library.

Note that Tailwind v4 does not require a separate configuration JSON file, and has been re-designed for a more seamless integration with frameworks, such as Vite. The `tailwindcss.config.js` file exists for use with the Visual Studio Code TailwindCSS extension only, so that Intellisense will work properly. If you are not using the VSCode extension, you can safely remove this file. The `settings.json` file template is configured to help the extension work correctly in your IDE.

This project does not use Sass. Sass is great but a lot of the features that Sass has provided over the years have no been implemented as vanilla CSS features into all major browsers, is being implemented, or is being reviewed before the CSS standards board. Feel free to set up Sass, but we highly encourage to use vanilla CSS where (if at all) Tailwind falls short.

## Testing
### Unit Testing
We use [vitest](https://vitest.dev/guide/) for the unit testing of component logic. We also use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) (RTL) to simulate how the User interacts with the application and follow the best practices of the library. `vitest` is currently in development of there own libraries to replace `jsdom` and all the other spin-offs, but it is still in development and experimental phases. When these become live, we will most likely update the template to use the native tools. Reference: `@vitest/browser` and this sample template for getting started: [vitest with React](https://github.com/vitest-tests/browser-examples/tree/main/examples/react).

NOTE: the convention for unit tests is to name each test file with the file under test suffixed with `test.ts` or `test.tsx`. `vitest` by default will scan for anything ending patterned to to a glob string with "spec" or "Test" in the name. This has been overridden to only look for "test". Why? Playwright examples default to "spec.ts" and we need the `vitest` runner to ignore Playwright test files. This has been pre-configured in the `vite.config.ts` file. Thas said - End to End/Integration tests will by convention end in `spec.ts` to delineate the difference.

In addition, the pattern has been set so that you can create a test file directly next to files in the `routes` directory that TanStack Router uses. By default, TanStack Router will attempt to convert any file in the `routes` directory into a route within the route tree file. The configuration has also bee nupdated to ignore any files with the word `test` in it (TanStack Router will ignore test files and not crash your application).

### Integration
While `vitest` is sufficient for low-level and shallow unit testing, [Microsoft's Playwright](https://playwright.dev/docs/intro) fills in the gap for all higher level front-end testing needs.

### Miscellaneous Libaries
- [TanStack Query](https://tanstack.com/query/latest): The template is set up to use TanStack Query for handling API logic and request state. Axios is not installed, as the need for Axios is greatly diminished with the Fetch API, especially when paired with TanStack Query.
- [Zustand](https://github.com/pmndrs/zustand): We favor `zustand` over Redux for global state management. Most of the time, global state can be avoided, but if you absolutely must, 

#### A note on libraries
We strive to use any web standard API where we can, unless an aboslute needs to lean on a utility or library created to augment the logic. If MDN has it, we will attempt to use the native JS API's over any unnecessary package, unless it's a clear advantage to use a 3rd party source. Adding a library to this template should consider these points:
- Is it modern?
- Is well maintained?
- Is it performative?
- Does it add a much greater benefit than rolling your own logic?
- Is it well-documented?
- Is it easy to work with and modify if needed?