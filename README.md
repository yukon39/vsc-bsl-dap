# 1С:Enterprise Platform debug extension for Visual Studio Code

This extension for Visual Studio Code implements debugging protocol for [1C:Enterprise Platform](https://1c-dn.com/) framework.

Inspired by [BSL Language Server](https://github.com/1c-syntax/bsl-language-server)

## Features

* Supports both Enterprise Development Tools and Designer projects.
* Attach to existing Remote Debug server (dbgs) 
* Set breakpoints
* Pause & continue debugged processes
* Step In and Step Over execution features
* Navigate sources from current stack frame

## Getting started

Install, open folder with your project, create debbuging configuration. Provide:
* Remote debug server URL (usually http://localhost:1550)
* Name of datebase to debug (for file-based database framework assign debug alias "DefAlias")
* Path to sources inside your project 
* Start debugging from VS Code!

## Options 

> Extension provides only "attach" debugging mode. 

Attach mode parameters:
* debuggerURL - URL of remote debug server (dbgs). Default: "http://localhost:1550"
* infobaseAlias - Infobase debug alias. Default: "DefAlias"
* cwd - Working directory. Default: Current workspace root
* sources - destinations to files with source code:
    * path - Path to configuration sources:
        - For Designer project provide path to folder with `Configuration.xml` file. 
        - For EDT project provide path to project folder (contains `.project` file and `src` folder) 

