---
title: Basic Exampe
sidebar_label: Basic Example
keywords:
- documentation
- oscrud
- example
description: a basic exmaple with oscrud handler
---

```go
package main

import (
	"net/http"

	"github.com/oscrud/oscrud"
)

// Example :
func Example(ctx *oscrud.Context) *oscrud.Context {
	return ctx.String(http.StatusOK, "This is an example")
}

func main() {
	server := oscrud.NewOscrud()
	server.RegisterEndpoint("GET", "/example", Example)
	server.Start()
}
```