---
title: Register Endpoint
sidebar_label: Register Endpoint
keywords:
- documentation
- oscrud
- endpoint
description: register endpoint to oscrud server
---

For registering endpoint with specified method, endpoint & handler, and also able to apply endpoint level options ( mean only work on the specifed endpoint ).

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

    // options can be apply in one line also.
	server.RegisterEndpoint("GET", "/test", func(ctx oscrud.Context) oscrud.Context {
		return ctx.String(200, "Hello World").End()
	}, event, middleware)
}
```
