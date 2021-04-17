---
title: Example
sidebar_label: Example
keywords:
- documentation
- oscrud
- handler
- example
description: example handler of oscrud server
---

All request and response is define by developer, so we suggest to have 1 handler 1 file structure so can view like a documentation. This structure have show at [scaffold](https://github.com/oscrud/scaffold).

```go
package main

import (
	"context"
	"errors"

	"github.com/oscrud/scaffold/model"
)

// ExampleRequest :
type ExampleRequest struct {
	Name  string `json:"name"`
	Error bool   `json:"error"`
}

// ExampleResponse :
type ExampleResponse struct {
	Result model.User `json:"result"`
}

// Errors :
var (
	ExampleErrorRequest = errors.New("example of error retusrns")
)

// Example :
func (srv ExampleService) Example(ctx context.Context, req *ExampleRequest) (*ExampleResponse, error) {
	if req.Error {
		return nil, ExampleErrorRequest
	}
	response := new(ExampleResponse)
	response.Result = model.User{Name: req.Name}
	return response, nil
}
```