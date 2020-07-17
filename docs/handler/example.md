---
title: Example Handler
---

For endpoint, must have a handler that calling `End()` method, if not will throwing error due to context haven't end yet. Why with this design, because of we make handler can be invoke until `After` middleware options and can be apply for profiler, logger about `context`.

```go
func Example(ctx oscrud.Context) oscrud.Context {
    return ctx.String(200, "Example Handler").End()
}

func main() {
    server := oscrud.NewOscrud()
    server.RegisterEndpoint("GET", "/example", Example)
}
```
