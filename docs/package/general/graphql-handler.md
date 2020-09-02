---
title: GraphQL Handler
sidebar_label: GraphQL Handler
keywords:
- documentation
- oscrud
- graphql
- handler
- third party
description: graphql handler for oscrud handler
---

graphQL handler for oscrud and build using [graphql-go](https://github.com/graphql-go/graphql).

### Usage 

| Method                               | Usage                                  |
| ------------------------------------ | -------------------------------------- |
| Handler(schema, options...) *Handler | Default constructor for initialization |

### Installation

```
$ go get github.com/oscrud/graphql-handler
```

### Example

```go
package main

import (
    graphql "github.com/graphql-go/graphql"
    gh "github.com/oscrud/graphql-handler"
)

func main() {
    schema := // graphql schema
    server := oscrud.NewServer()
    server.RegisterEndpoint("GET", "/graphql", gh.Handler(schema))
    server.Start()
}

```