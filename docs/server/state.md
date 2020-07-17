---
title: Server State
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