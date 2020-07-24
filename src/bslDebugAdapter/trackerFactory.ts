
import { DebugAdapterTrackerFactory, DebugSession, DebugAdapterTracker, ProviderResult } from "vscode";
import { BSLDebugAdapterTracker } from "./tracker";

export class BSLDebugAdapterTrackerFactory implements DebugAdapterTrackerFactory {

    createDebugAdapterTracker(session: DebugSession): ProviderResult<DebugAdapterTracker> {
        return new BSLDebugAdapterTracker(session);
    }
}