---
title: Example
sidebar_label: Example
keywords:
- documentation
- oscrud
- handler
description: example of oscrud handler
---

You can customize some builder to build handler, there's an example with [graphql](https://github.com/oscrud/graphql-handler).

```go
func Example(ctx oscrud.Context) oscrud.Context {
    return ctx.String(200, "Example Handler")
}

func main() {
    server := oscrud.NewOscrud()
    server.RegisterEndpoint("GET", "/example", Example)
}
```
