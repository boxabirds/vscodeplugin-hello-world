"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
let tsStatusBarItem;
let outputChannel;
// This method is called when your extension is activated
// Your extension is activated the very first time a command is executed
function activate(context) {
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
        }
        else {
            vscode.window.showWarningMessage('No active text editor to insert text into.');
            outputChannel.appendLine('Command: helloworld.insertText failed - no active editor.');
        }
    });
    context.subscriptions.push(cmdInsertText);
    // Command to show a quick pick menu
    let cmdShowQuickPick = vscode.commands.registerCommand('helloworld.showQuickPick', async () => {
        const options = ['Option Alpha', 'Option Bravo', 'Option Charlie'];
        const selection = await vscode.window.showQuickPick(options, {
            placeHolder: 'Select an option from TypeScript',
            title: 'TypeScript Quick Pick Demo'
        });
        if (selection) {
            vscode.window.showInformationMessage(`You selected: ${selection}`);
            outputChannel.appendLine(`Command: helloworld.showQuickPick - selected: ${selection}`);
        }
        else {
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
function deactivate() {
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
//# sourceMappingURL=extension.js.map