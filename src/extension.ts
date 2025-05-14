import * as vscode from 'vscode';

let tsStatusBarItem: vscode.StatusBarItem;
let outputChannel: vscode.OutputChannel;

// This method is called when your extension is activated
// Your extension is activated the very first time a command is executed
export function activate(context: vscode.ExtensionContext) {

    outputChannel = vscode.window.createOutputChannel('TypeScript Hello World');
    outputChannel.appendLine('TypeScript Hello World extension is now active!');

    // Initialise Status Bar Item
    tsStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    tsStatusBarItem.text = 'TS: Initialising...';
    tsStatusBarItem.tooltip = 'TypeScript Hello World Status';
    tsStatusBarItem.command = 'helloworld.updateStatusBar'; // Optional: command to run on click
    context.subscriptions.push(tsStatusBarItem);
    tsStatusBarItem.show();

    // Update status bar shortly after activation for an initial state
    setTimeout(() => {
        tsStatusBarItem.text = 'TS: Ready';
        outputChannel.appendLine('Status bar initialised.');
    }, 500);

    // Command to show an information message
    let cmdShowInfo = vscode.commands.registerCommand('helloworld.showInfoMessage', () => {
        vscode.window.showInformationMessage('Hello from TypeScript Hello World!');
        outputChannel.appendLine('Command: helloworld.showInfoMessage executed.');
    });
    context.subscriptions.push(cmdShowInfo);

    // Command to show a warning message
    let cmdShowWarning = vscode.commands.registerCommand('helloworld.showWarningMessage', () => {
        vscode.window.showWarningMessage('This is a warning from TypeScript Hello World!');
        outputChannel.appendLine('Command: helloworld.showWarningMessage executed.');
    });
    context.subscriptions.push(cmdShowWarning);

    // Command to show an error message
    let cmdShowError = vscode.commands.registerCommand('helloworld.showErrorMessage', () => {
        vscode.window.showErrorMessage('This is an error from TypeScript Hello World!');
        outputChannel.appendLine('Command: helloworld.showErrorMessage executed.');
    });
    context.subscriptions.push(cmdShowError);

    // Command to insert text into the active editor
    let cmdInsertText = vscode.commands.registerCommand('helloworld.insertText', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, 'Text inserted by TypeScript Hello World!\n');
            });
            outputChannel.appendLine('Command: helloworld.insertText executed.');
        } else {
            vscode.window.showWarningMessage('No active text editor to insert text into.');
            outputChannel.appendLine('Command: helloworld.insertText failed - no active editor.');
        }
    });
    context.subscriptions.push(cmdInsertText);

    // Command to show a quick pick menu
    let cmdShowQuickPick = vscode.commands.registerCommand('helloworld.showQuickPick', async () => {
        const options: string[] = ['Option Alpha', 'Option Bravo', 'Option Charlie'];
        const selection = await vscode.window.showQuickPick(options, {
            placeHolder: 'Select an option from TypeScript',
            title: 'TypeScript Quick Pick Demo'
        });

        if (selection) {
            vscode.window.showInformationMessage(`You selected: ${selection}`);
            outputChannel.appendLine(`Command: helloworld.showQuickPick - selected: ${selection}`);
        } else {
            outputChannel.appendLine('Command: helloworld.showQuickPick - no selection made.');
        }
    });
    context.subscriptions.push(cmdShowQuickPick);

    // Command to update the status bar item
    let cmdUpdateStatusBar = vscode.commands.registerCommand('helloworld.updateStatusBar', () => {
        const dateTime = new Date().toLocaleTimeString('en-GB');
        tsStatusBarItem.text = `TS: Updated ${dateTime}`;
        tsStatusBarItem.tooltip = `Status last updated at ${dateTime}`;
        vscode.window.showInformationMessage('Status Bar item has been updated!');
        outputChannel.appendLine('Command: helloworld.updateStatusBar executed.');
    });
    context.subscriptions.push(cmdUpdateStatusBar);

    outputChannel.appendLine('All commands registered and status bar initialised.');
}

// This method is called when your extension is deactivated
export function deactivate() {
    outputChannel.appendLine('Deactivating TypeScript Hello World extension.');
    if (tsStatusBarItem) {
        tsStatusBarItem.dispose();
    }
    if (outputChannel) {
        outputChannel.dispose();
    }
    // Any other cleanup can go here
    outputChannel.appendLine('TypeScript Hello World extension deactivated.');
}
