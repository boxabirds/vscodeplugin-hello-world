# VS Code Hello World Plugin in TypeScript

This extension is a demonstration of how to build a VS Code plugin using TypeScript.

It showcases several common plugin features:
- Registering commands
- Displaying informational, warning, and error messages
- Inserting text into the editor
- Using quick pick menus
- Managing status bar items

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [VS Code](https://code.visualstudio.com/)

## Setup & Building

1.  **Clone the repository (or ensure you are in the project directory).**
2.  **Install TypeScript dependencies:**
    ```bash
    npm install
    ```
3.  **Compile the TypeScript code:**
    ```bash
    npm run compile
    ```
    Or, to watch for changes and recompile automatically:
    ```bash
    npm run watch
    ```

## Running the Extension in VS Code

1.  Open this project folder in VS Code (`code .`).
2.  Ensure you have compiled the TypeScript (`npm run compile`).
3.  Press `F5` (or go to `Run > Start Debugging`). This will open a new VS Code window (the Extension Development Host) with the plugin activated.
4.  In the Extension Development Host window, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for commands prefixed with "Hello TS:".

## Development

-   The TypeScript code for the extension is in `src/extension.ts`.

### Packaging the Extension

To create a `.vsix` package for distribution:

1.  Install `vsce` (VS Code Extension Manager) globally if you haven't already:
    ```bash
    npm install -g @vscode/vsce
    ```
2.  Package the extension:
    ```bash
    vsce package
    ```
    This will create a `.vsix` file in the project root.

## Feature Demonstrations

-   **Hello TS: Show Info Message**: Displays an informational message.
-   **Hello TS: Show Warning Message**: Displays a warning message.
-   **Hello TS: Show Error Message**: Displays an error message.
-   **Hello TS: Insert Text**: Inserts predefined text into the active editor.
-   **Hello TS: Show Quick Pick**: Shows a selection list.
-   **Hello TS: Update Status Bar**: Updates the text of a custom status bar item.

Remember to replace `"publisher": "your-publisher-name"` in `package.json` with your actual publisher name if you plan to publish the extension.
