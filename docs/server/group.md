---
title: Group Register
sidebar_label: Group Register
keywords:
- documentation
- oscrud
- group
description: register group to oscrud server
---

`Group` is for group up a path and options, easier for those versioning or nested path.

```go
package main

import (
    "github.com/oscrud/oscrud"
)

func Example(ctx *oscrud.Context) *oscrud.Context {
    return ctx.String(200, "Example Handler")
}

func main() {
    server := oscrud.NewOscrud()
    group := server.Group("/v1")
    group.RegisterEndpoint("GET", "/example", Example) // registered at /v1/example
}
```