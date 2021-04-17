---
title: Server Metadata
sidebar_label: Server Metadata
keywords:
- documentation
- oscrud
- server
- metadata
- example
description: server metadata of oscrud server
---

Metadata is like state but is for single request, so won't have value in another request. 

| Method                                                     | Description                                   |
| ---------------------------------------------------------- | --------------------------------------------- |
| InjectContext(context.Context, string, string) Context     | Inject metadata with specified key to context |
| DeflateContext(context.Context, string) string             | Deflate metadata by key from context          |
| InjectMetadata(context.Context, map[string]string) Context | Inject metadata to context                    |
| DeflateMetadata(context.Context) map[string]string         | Deflate metadata from context                 |


```go
package main

import (
	"context"
	"errors"

	oscrud "github.com/oscrud/core"
)

// ExampleRequest :
type ExampleRequest struct {}

// ExampleResponse :
type ExampleResponse struct {}

// Example :
func (srv ExampleService) Example(ctx context.Context, req *ExampleRequest) (*ExampleResponse, error) {

    ctx = oscrud.InjectContext(ctx, "key", "value")
    value := oscrud.DeflateContext(ctx, "key") // value
    value2 := oscrud.DeflateContext(ctx, "key2") // nil

    ctx = oscrud.InjectMetadata(ctx, map[string]string{"key": "value"})
    value3 := oscrud.DeflateMetadata(ctx, "key") // {"key":"value"}

}
```