import { DebugAdapterTracker, DebugSession } from "vscode";
import { isNumber } from "util";

export class BSLDebugAdapterTracker implements DebugAdapterTracker {

    session: DebugSession;

    constructor(session: DebugSession) {
        this.session = session;
    }

    onWillStartSession() {
        console.log(`start ${this.session.id}`);
    }

    onWillStopSession() {
        console.log(`stop ${this.session.id}`);
    }

    onWillReceiveMessage(message: any) {
        console.log(`===> ${JSON.stringify(message, undefined, 2)}`);
    }

    onDidSendMessage(message: any) {
        console.log(`<=== ${JSON.stringify(message, undefined, 2)}`);
    }

    onError(error: Error) {
        console.log(`error: ${error}`);
    }

    onExit(code: number | undefined, signal: string | undefined) {
        if (isNumber(code)) {
            console.log(`exit with code ${code}`);
        } else {
            console.log(`exit with signal ${signal}`);
        }
    }
}