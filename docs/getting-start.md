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

If you doesn't have *Go* installed on your pc. You can get it [here](https://golang.org/doc/install). After installed *Go* on your pc, you can install CLI and go module with command below.

```
$ go get -u github.com/oscrud/core
$ go install github.com/oscrud/core/oscru
```

After complete installation, you can Go with a simple boilerplate generate by CLI using `oscrud generate`. Once generated you can start your application in development mode with simple `oscrud dev`. 

```go
package main

import (
	oscrud "github.com/oscrud/core"
)

func main() {
	oscrud := oscrud.NewOscrud() 
	oscrud.Register(new(Service))
	oscrud.UseDevServer("some_random_password")
	oscrud.Start()
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