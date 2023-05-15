## Usage

A SolidJS + TypeScript + vite template designed specifically for KaiOS v2.5

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Additional Notes (pretty much how this template works)

- KaiOS v2.5 is "partial es6" because of this, transpilers like babel will assume it is es5 which makes the code really bulky, thankfully this template uses esbuild to transpile.
- "partial es6" refers to KaiOS not supporting literally 2 es6 features (es modules and `for (const`).
- because we are not using babel, all polyfills will have to be manually added to the project, this template has core-js and a [polyfills.js](./scripts/polyfills.js) file.
