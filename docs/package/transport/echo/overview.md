---
title: Websocket
sidebar_label: Websocket
keywords:
- documentation
- oscrud
- websocket
- transport
description: readonly websocket transport for oscrud handler
---

Http transport for oscrud and build using [echo](https://github.com/labstack/echo).


### Usage

| Method                                     | Usage                                                   |
| ------------------------------------------ | ------------------------------------------------------- |
| New() *Transport                           | Default constructor for initialization                  |
| UsePort(port int)                          | Specify which port to receiving requests                |
| UseMultipart(maxMemory int64)              | Specify the max memory limit for form multipart parsing |
| UseCustomResponse(builder ResponseBuilder) | Customize response                                      |



### Installation

```
$ go get github.com/oscrud/echo
```

### Example 

```go
package main

import (
    "github.com/oscrud/echo"
)

func main() {
    t := echo.New(nil)
    t.UsePort(3000) // specify port
    t.UseMultipart(5 << 30)
    t.UseCustomResponse(func(ctx echo.Context, response oscrud.Response) error {
        return nil
    })
}

```