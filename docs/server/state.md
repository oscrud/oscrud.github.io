---
title: Server State
sidebar_label: Server State
keywords:
- documentation
- oscrud
- server
- state
- example
description: server state of oscrud server
---

Get & Set application level state, you will have it when u have the server instance.


| Method                        | Description                        |
| ----------------------------- | ---------------------------------- |
| SetState(string, interface{}) | Set value by key to server state   |
| GetState(string) interface{}  | Get value by key from server state |

```go
package main

import (
	oscrud "github.com/oscrud/core"
)

func main() {
    server := oscrud.NewOscrud()
    server.SetState("state_key", "some_str")
    log.Println(server.GetState("state_key")) // some_str
    log.Println(server.GetState("state")) // nil
}
```
