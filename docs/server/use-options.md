---
title: Using Options
sidebar_label: Using Options
keywords:
- documentation
- oscrud
- options
- middleware
description: register options to oscrud server
---

For apply server-level options ( mean apply to all endpoints ).

```go
package oscrud

func main() {
    server := oscrud.NewOscrud()
    middleware := oscrud.MiddlewareOptions{
        Before: []oscrud.Handler{
            func(ctx oscrud.Context) oscrud.Context {
                log.Println("I'm Before Middleware")
                return ctx
            }
        },
    }
    event := oscrud.EventOptions{
        OnComplete: func(ctx oscrud.Context) {
            log.Println("This running from go-routine as event-drive OnComplete().")
        },
    }
    // You can just apply all in one line.
    server.UseOptions(middleware, event)
}
```
