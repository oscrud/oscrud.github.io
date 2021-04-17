---
title: Middleware
sidebar_label: Middleware
keywords:
- documentation
- oscrud
- middleware
- example
description: middleware of oscrud server
---

`oscrud.Middleware` is for process *pre-request* and *post-request*. So for exmaple middleware must implement with following interface. Inside function receiving `service` and handler's name and `request, response` as go struct so you can run with `json.Marhsal` or any other marshal method since `struct tag` will be implement too when generating code.

```go
// MiddlewareContext :
type MiddlewareContext struct {
    
}

// PreRequest :
func (mc MiddlewareContext) PreRequest(ctx context.Context, service string, request interface{}) context.Context {
    return ctx
}

// PostRequest :
func (mc MiddlewareContext) PostRequest(ctx context.Context, service string, response interface{}, err error) context.Context {
    return ctx
}
```