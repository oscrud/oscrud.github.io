---
title: Errors List
sidebar_label: Errors List
keywords:
- documentation
- oscrud
- errors
- example
description: errors of oscrud server
---

# Command Line 

| Error  | Description                                     |
| ------ | ----------------------------------------------- |
| ED0001 | .oscrud.json doesn't found in current directory |
| ED0002 | invalid json format in config file              |
| ED0003 | command execution have errors occurs            |
| ED0004 | command error while waiting process             |
| ED0005 | fail to start windows process                   |
| ED0006 | File watcher having error when initialize       |

# Core Server 

| Error  | Description                                                                                   |
| ------ | --------------------------------------------------------------------------------------------- |
| ED0001 | failed to dial %v                                                                             |
| ED0002 | failed to listen %v                                                                           |
| ED0003 | invalid arguments at %v, it must be 'func(context.Context, interface{}) (interface{}, error)' |
| ED0004 | invalid first arguments at %v, first arugments must be context.Context                        |
| ED0005 | invalid second arguments at %v, second arguments must be error                                |
| ED0006 | missing mode arguments                                                                        |
| ED0007 | fail to read body, %v                                                                         |
| ED0008 | invalid json request, %v                                                                      |
| ED0009 | invalid password for devserver                                                                |
| ED0010 | fail to find registry function                                                                |
| ED0011 | fail to marshal request, %v                                                                   |
| ED0012 | fail to unmarshal request to source, %v                                                       |
| ED0013 | fail to marshal response, %v                                                                  |
| ED0014 | fail to unmarshal response to source, %v                                                      |