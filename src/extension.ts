import * as vscode from "vscode";

import { BSLDebugAdapterDescriptorFactory } from "./bslDebugAdapter/descriptionFactory";
import { BSLDebugAdapterTrackerFactory } from "./bslDebugAdapter/trackerFactory";
import { BSLDebugConfigurationProvider } from "./bslDebugAdapter/configurationProvider";
import { DEBUG_TYPE } from "./const";

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider(DEBUG_TYPE, new BSLDebugConfigurationProvider()));
    context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory(DEBUG_TYPE, new BSLDebugAdapterDescriptorFactory(context)));
    context.subscriptions.push(vscode.debug.registerDebugAdapterTrackerFactory(DEBUG_TYPE, new BSLDebugAdapterTrackerFactory()));
}