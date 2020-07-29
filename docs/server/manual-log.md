---
title: Manually Log
sidebar_label: Manual Log
keywords:
- documentation
- oscrud
- logger
description: manually log to oscrud server
---

Logging some operation with content, server context will run through loggers and call log function.

```go
package oscrud

func main() {
    oscrud.Log("Request", "request started")
}
```