---
title: Middleware Options
sidebar_label: Middleware Options
keywords:
- documentation
- oscrud
- middleware
- options
description: middleware options for oscrud server
---

Middleware options is for applying `before` and `after` lifecycle to endpoint or server. So if both server and endpoint middleware specified, will run based on : ***Incoming Request --> `server.Before` -> `endpoint.Before` -> Main handler -> `endpoint.After` -> `server.After` -> Outgoing Response***.


```go
// MiddlewareOptions :
type MiddlewareOptions struct {
	Before []Handler
	After  []Handler
}
```