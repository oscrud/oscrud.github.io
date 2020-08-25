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
func Example(ctx *oscrud.Context) *oscrud.Context {
    // Before accessing form must ParseForm() first
    if err := ctx.ParseForm(false); err != nil {
        return ctx.Error(400, err)
    }
    return ctx.String(200, "Example Handler")
}

func main() {
    server := oscrud.NewOscrud()
    server.RegisterEndpoint("GET", "/example", Example)
}
```
