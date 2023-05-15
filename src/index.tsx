/* @refresh reload */
import { render } from "solid-js/web";

/**
 * import polyfills manually
 */
import "core-js/actual/array/flat";
import "core-js/actual/array/find-last";
import "core-js/actual/array/to-sorted";
import "core-js/actual/string/match-all";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?");
}

render(() => <App />, root!);
