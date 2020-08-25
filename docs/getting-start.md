---
title: Getting Started
sidebar_label: Getting Started
keywords:
- documentation
- oscrud
- getting start
- example
description: getting start and example of oscrud server
---

If you doesn't have *Go* installed on your pc. You can get it [here](https://golang.org/doc/install).

```
$ go get -u github.com/oscrud/oscrud
```

After complete installation, you can Go with your beloved framework and here an hello world example. You can choose your own transport from lists, currently only supported Echo. For future will implement [service discovery](https://github.com/hashicorp/mdns) by default.

```go
package oscrud

import (
    "github.com/oscrud/oscrud"
)

func main() {
	server := oscrud.NewOscrud()
	server.RegisterTransport(e.NewEcho(echo.New()).UsePort(3000))
	server.RegisterEndpoint("GET", "/test", func(ctx *oscrud.Context) *oscrud.Context {
		return ctx.String(200, "Hello World").End()
	})
	server.Start()
}

$ curl -v localhost:3000/test

> GET /test HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Content-Type: text/plain; charset=UTF-8
< Date: Fri, 31 Jan 2020 16:04:49 GMT
< Content-Length: 11
< 
* Connection #0 to host localhost left intact
Hello World
```