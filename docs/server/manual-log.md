---
title: Manually Log
---

Logging some operation with content, server context will run through loggers and call log function.

```go
package oscrud

func main() {
    oscrud.Log("Request", "request started")
}
```