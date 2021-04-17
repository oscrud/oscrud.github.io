---
title: Configuration
sidebar_label: Config
keywords:
- documentation
- oscrud
- config
- example
description: config of oscrud server
---

Configuration is using `json` formatted file and based on `.oscrud.json` named file. 

```json
{
    "watcher": ".", // Directory for hot reload watch changes
    "port": "12345", // Port for server 
    "env": { // Environment Variables
        "SOME_ENV": "SOME_VALUE"
    },
    "clients": { // For generate client currently only support "go"
        "go": {
            "name": "example",
            "directory": "client"
        }
    }
}
```