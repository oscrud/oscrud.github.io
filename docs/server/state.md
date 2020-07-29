---
title: Server State
sidebar_label: Server State
keywords:
- documentation
- oscrud
- state
- custom
description: add custom data to oscrud server
---

Get &  Set application level state, you will have it when u have the server instance.

```go
package oscrud

func main() {
    oscrud.SetState("state", "some_str")
    state := oscrud.GetState("state")
    log.Println(state) // some_str
}
```