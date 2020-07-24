import { DebugAdapterDescriptor, DebugAdapterDescriptorFactory, DebugAdapterExecutable, DebugSession, ExtensionContext } from "vscode";
import path = require("path");
import { DEBUG_JAR } from "../const";

export class BSLDebugAdapterDescriptorFactory implements DebugAdapterDescriptorFactory {
    context: ExtensionContext;

    constructor(contextArg: ExtensionContext) {
        this.context = contextArg;
    }

    public async createDebugAdapterDescriptor(session: DebugSession, executable: DebugAdapterExecutable): Promise<DebugAdapterDescriptor> {

        const jarpath: string = this.context.asAbsolutePath(path.join('lib', DEBUG_JAR));

        if (!executable) {

            let command = "java.exe"
            const args: string[] = [];
            args.push("-jar", jarpath);
            args.push("--dap")

            executable = new DebugAdapterExecutable(command, args, {})
        }

        return executable;
    }
}